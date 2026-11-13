import { chromium } from "playwright-core";

const widths = (process.argv[2] || "1440,1180,1024,901,900,640,390")
  .split(",")
  .map((w) => parseInt(w.trim(), 10));

const browser = await chromium.launch({ channel: "msedge", headless: true });
const results = [];

for (const width of widths) {
  const ctx = await browser.newContext({
    viewport: { width, height: 900 },
    reducedMotion: "reduce",
  });
  const page = await ctx.newPage();
  const errors = [];
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  page.on("pageerror", (e) => errors.push(String(e)));
  await page.goto("http://localhost:5199/master-planning", {
    waitUntil: "load",
    timeout: 45000,
  });
  await page.waitForTimeout(1200);
  await page.evaluate(() => {
    document.querySelector(".mp-process")?.scrollIntoView({ block: "center" });
  });
  await page.waitForTimeout(700);

  const geo = await page.evaluate(() => {
    const out = { vw: innerWidth, issues: [] };
    const sec = document.querySelector(".mp-process");
    if (!sec) return { ...out, issues: ["section missing"] };

    // viewport spill
    sec.querySelectorAll("*").forEach((el) => {
      const r = el.getBoundingClientRect();
      const s = getComputedStyle(el);
      if (s.display === "none" || r.width < 1) return;
      if (r.left < -1 || r.right > innerWidth + 1) {
        out.issues.push(
          `viewport spill: ${String(el.className).slice(0, 40)} L=${Math.round(r.left)} R=${Math.round(r.right)}`
        );
      }
    });

    const sheet = sec.querySelector(".mpp-sheet");
    const rowTop = sec.querySelector(".mpp-row--top");
    const rowBot = sec.querySelector(".mpp-row--bottom");
    const axis1 = sec.querySelector(".mpp-row--top .mpp-axis");
    const axis2 = sec.querySelector(".mpp-row--bottom .mpp-axis");
    const bend = sec.querySelector(".mpp-bend");
    const cells = [...sec.querySelectorAll(".mpp-cell")];
    const horizontal = axis1 && getComputedStyle(axis1).display !== "none";
    const rect = (el) => el.getBoundingClientRect();

    if (horizontal) {
      out.mode = "sheet";
      const r1 = rect(rowTop);
      const r2 = rect(rowBot);
      const a1 = rect(axis1);
      const a2 = rect(axis2);
      const b = rect(bend);

      if (Math.abs(a1.top - r1.top) > 2) out.issues.push("row1 axis not on row top");
      if (Math.abs(a2.top - r2.top) > 2) out.issues.push("row2 axis not on row top");
      if (Math.abs(b.top - r1.top) > 2) out.issues.push("bend does not start at row1 axis");
      if (Math.abs(b.bottom - r2.top) > 2)
        out.issues.push(`bend misses row2 (bottom ${Math.round(b.bottom)} vs row2 top ${Math.round(r2.top)})`);

      // nodes must sit on their row axis; cards must clear the node
      cells.forEach((c, i) => {
        const n = rect(c.querySelector(".mpp-node"));
        const card = rect(c.querySelector(".mpp-card"));
        const row = c.closest(".mpp-row") === rowTop ? r1 : r2;
        if (Math.abs(n.top + n.height / 2 - row.top) > 3)
          out.issues.push(`cell ${i} node off axis`);
        if (card.top < n.bottom - 1)
          out.issues.push(`cell ${i} card overlaps node`);
      });

      // tags must not collide with each other or with nodes
      const tags = [...sec.querySelectorAll(".mpp-tag")].map(rect);
      const hit = (a, b) =>
        a.left < b.right - 1 && a.right > b.left + 1 && a.top < b.bottom - 1 && a.bottom > b.top + 1;
      tags.forEach((a, i) => {
        tags.slice(i + 1).forEach((b, j) => {
          if (hit(a, b)) out.issues.push(`tag ${i} collides with tag ${i + 1 + j}`);
        });
        const n = rect(cells[i].querySelector(".mpp-node"));
        if (hit(a, n)) out.issues.push(`tag ${i} collides with its node`);
      });

      // route order: row1 L->R = 01 02 03, row2 L->R = 06 05 04
      const order = cells
        .map((c) => ({
          row: c.closest(".mpp-row") === rowTop ? 1 : 2,
          x: rect(c).left,
          tag: c.querySelector(".mpp-tag").textContent.trim(),
        }))
        .sort((a, b) => a.row - b.row || a.x - b.x)
        .map((c) => c.tag);
      const want = ["01", "02", "03", "06", "05", "04"];
      if (order.join() !== want.join())
        out.issues.push(`route order wrong: got ${order.join(",")} want ${want.join(",")}`);

      // title block must sit inside the sheet
      const blk = rect(sec.querySelector(".mpp-block"));
      const sh = rect(sheet);
      if (blk.bottom > sh.bottom + 1 || blk.left < sh.left - 1 || blk.right > sh.right + 1)
        out.issues.push("title block escapes sheet");
    } else {
      out.mode = "rail";
      const rail = getComputedStyle(sec.querySelector(".mpp-rows"), "::before");
      out.rail = rail.content !== "none" && rail.display !== "none";
      // vertical order must be 01..06 top to bottom
      const order = cells
        .map((c) => ({ y: rect(c).top, tag: c.querySelector(".mpp-tag").textContent.trim() }))
        .sort((a, b) => a.y - b.y)
        .map((c) => c.tag);
      const want = ["01", "02", "03", "04", "05", "06"];
      if (order.join() !== want.join())
        out.issues.push(`vertical order wrong: got ${order.join(",")}`);
      cells.forEach((c, i) => {
        const n = rect(c.querySelector(".mpp-node"));
        const card = rect(c.querySelector(".mpp-card"));
        if (card.left < n.right - 1)
          out.issues.push(`step ${i} card (${Math.round(card.left)}) touches node (${Math.round(n.right)})`);
        if (card.right > innerWidth + 1)
          out.issues.push(`step ${i} card right ${Math.round(card.right)} > vw`);
        if (i > 0 && card.top < rect(cells[i - 1].querySelector(".mpp-card")).bottom - 1)
          out.issues.push(`step ${i} card overlaps previous`);
      });
    }

    // visibility under reduced motion (framer must not hide anything)
    // note: axis/bend carry a deliberate CSS opacity of 0.55 — flag only 0
    const vis = {};
    [".mpp-sheet", ".mpp-cell", ".mpp-axis", ".mpp-card"].forEach((s) => {
      const el = sec.querySelector(s);
      const o = el ? getComputedStyle(el).opacity : "missing";
      vis[s] = o;
      if (el && (o === "0" || o === "missing"))
        out.issues.push(`${s} opacity ${o}`);
    });
    out.vis = vis;
    out.secH = Math.round(rect(sec).height);
    out.docOverflowX = document.documentElement.scrollWidth - innerWidth;
    return out;
  });

  results.push({ width, ...geo, errors });
  await ctx.close();
}

// normal-motion pass: bring each animated element into view and verify it
// becomes fully visible WHILE in view (framer whileInView reverts to initial
// once the element exits — that's expected, so never check after scrolling away)
for (const width of [1440, 390]) {
  const ctx = await browser.newContext({ viewport: { width, height: 900 } });
  const page = await ctx.newPage();
  await page.goto("http://localhost:5199/master-planning", {
    waitUntil: "load",
    timeout: 45000,
  });
  await page.waitForTimeout(1000);
  const vis = await page.evaluate(async () => {
    document.documentElement.style.scrollBehavior = "auto";
    const sec = document.querySelector(".mp-process");
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const targets = [
      sec.querySelector(".mpp-sheet"),
      ...sec.querySelectorAll(".mpp-cell"),
      sec.querySelector(".mpp-row--top .mpp-axis"),
      sec.querySelector(".mpp-bend"),
      sec.querySelector(".mpp-row--bottom .mpp-axis"),
    ];
    const hidden = [];
    const opacityOf = (el) => parseFloat(getComputedStyle(el).opacity);
    // axes/bend carry a deliberate CSS opacity of 0.55 (framer only animates scale)
    const expected = (el) =>
      el.className.includes("axis") || el.className.includes("bend") ? 0.55 : 1;
    for (const el of targets) {
      if (!el || getComputedStyle(el).display === "none") continue;
      const label =
        el.className.includes("cell")
          ? `cell${[...sec.querySelectorAll(".mpp-cell")].indexOf(el)}`
          : String(el.className).split(" ")[0];
      el.scrollIntoView({ block: "center", behavior: "instant" });
      // wait for stagger delay (max 1.05+0.24+0.5) + buffer, polling in view
      const want = expected(el);
      let ok = false;
      for (let t = 0; t < 2600 && !ok; t += 100) {
        await sleep(100);
        ok = Math.abs(opacityOf(el) - want) < 0.01;
      }
      if (!ok) hidden.push({ label, o: getComputedStyle(el).opacity, want });
    }
    const g = (s) => {
      const el = sec.querySelector(s);
      return el ? { o: getComputedStyle(el).opacity, t: getComputedStyle(el).transform.slice(0, 36) } : null;
    };
    return { hiddenCells: hidden, sheet: g(".mpp-sheet"), axis: g(".mpp-axis"), bend: g(".mpp-bend") };
  });
  results.push({ width, motion: "normal", vis });
  await ctx.close();
}

console.log(JSON.stringify(results, null, 1));
await browser.close();
