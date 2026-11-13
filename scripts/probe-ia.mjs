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
  await page.goto("http://localhost:5199/infrastructure", {
    waitUntil: "load",
    timeout: 45000,
  });
  await page.waitForTimeout(1200);
  await page.evaluate(() => {
    document
      .querySelector(".infra-process")
      ?.scrollIntoView({ block: "center" });
  });
  await page.waitForTimeout(700);

  const geo = await page.evaluate(() => {
    const out = { vw: innerWidth, issues: [] };
    const sec = document.querySelector(".infra-process");
    if (!sec) return { ...out, issues: ["section missing"] };
    const sr = sec.getBoundingClientRect();

    // 1) anything inside the section poking outside the viewport
    sec.querySelectorAll("*").forEach((el) => {
      const r = el.getBoundingClientRect();
      const s = getComputedStyle(el);
      if (s.display === "none" || r.width < 1) return;
      if (r.left < -1 || r.right > innerWidth + 1) {
        out.issues.push(
          `viewport spill: ${el.className || el.tagName} L=${Math.round(
            r.left
          )} R=${Math.round(r.right)}`
        );
      }
    });

    const band = sec.querySelector(".ia-band");
    const steps = [...sec.querySelectorAll(".ia-step")];
    const horizontal = band && getComputedStyle(band).display !== "none";

    if (horizontal) {
      const br = band.getBoundingClientRect();
      const up = steps.filter((s) => s.classList.contains("ia-step--up"));
      const down = steps.filter((s) => s.classList.contains("ia-step--down"));

      // cards must clear the band
      up.forEach((s, i) => {
        const c = s.querySelector(".ia-card").getBoundingClientRect();
        const st = s.getBoundingClientRect();
        if (c.bottom > br.top - 4)
          out.issues.push(`up-card ${i} overlaps band (${Math.round(c.bottom)} > ${Math.round(br.top)})`);
        if (c.top < st.top - 1)
          out.issues.push(`up-card ${i} overflows step top by ${Math.round(st.top - c.top)}px`);
      });
      down.forEach((s, i) => {
        const c = s.querySelector(".ia-card").getBoundingClientRect();
        const st = s.getBoundingClientRect();
        if (c.top < br.bottom + 4)
          out.issues.push(`down-card ${i} overlaps band (${Math.round(c.top)} < ${Math.round(br.bottom)})`);
        if (c.bottom > st.bottom + 1)
          out.issues.push(`down-card ${i} overflows step bottom by ${Math.round(c.bottom - st.bottom)}px`);
      });

      // same-row neighbours must not intersect horizontally
      [up, down].forEach((row, ri) => {
        for (let i = 1; i < row.length; i++) {
          const a = row[i - 1].querySelector(".ia-card").getBoundingClientRect();
          const b = row[i].querySelector(".ia-card").getBoundingClientRect();
          if (a.right > b.left + 1)
            out.issues.push(`row ${ri} cards ${i - 1}/${i} overlap by ${Math.round(a.right - b.left)}px`);
        }
      });

      // chainage labels: no collisions with each other or with stations
      const chs = [...sec.querySelectorAll(".ia-ch")].map((el) => el.getBoundingClientRect());
      const nodes = steps.map((s) => s.querySelector(".ia-node").getBoundingClientRect());
      const hit = (a, b) =>
        a.left < b.right - 1 && a.right > b.left + 1 && a.top < b.bottom - 1 && a.bottom > b.top + 1;
      chs.forEach((a, i) => {
        chs.slice(i + 1).forEach((b, j) => {
          if (hit(a, b)) out.issues.push(`ch ${i} collides with ch ${i + 1 + j}`);
        });
        nodes.forEach((n, k) => {
          if (hit(a, n)) out.issues.push(`ch ${i} collides with node ${k}`);
        });
      });

      out.mode = "horizontal";
      out.stepH = Math.round(steps[0]?.getBoundingClientRect().height || 0);
      out.bandTop = Math.round(br.top);
    } else {
      // mobile rail: cards must sit right of the rail and inside the viewport
      const railHost = sec.querySelector(".ia-steps");
      const rs = getComputedStyle(railHost, "::before");
      out.mode = "rail";
      out.rail = rs.content !== "none" && rs.display !== "none";
      steps.forEach((s, i) => {
        const c = s.querySelector(".ia-card").getBoundingClientRect();
        const n = s.querySelector(".ia-node").getBoundingClientRect();
        const st = s.getBoundingClientRect();
        if (c.left < n.right - 1)
          out.issues.push(`step ${i} card (${Math.round(c.left)}) touches node (${Math.round(n.right)})`);
        if (c.right > innerWidth + 1)
          out.issues.push(`step ${i} card right ${Math.round(c.right)} > vw`);
        if (i > 0 && c.top < steps[i - 1].getBoundingClientRect().bottom - 1)
          out.issues.push(`step ${i} card overlaps previous step`);
        const ov = getComputedStyle(s).overflow;
        if (ov !== "visible" && s.scrollHeight > s.clientHeight + 2)
          out.issues.push(`step ${i} content clipped (sh=${s.scrollHeight} ch=${s.clientHeight})`);
      });
      // band hidden?
      out.bandHidden = band ? getComputedStyle(band).display === "none" : true;
    }

    // section must not exceed viewport height unreasonably & no page-level x-overflow
    out.secH = Math.round(sr.height);
    out.docOverflowX = document.documentElement.scrollWidth - innerWidth;
    // framer must not leave anything hidden under reduced motion
    const pick = (s) => {
      const el = sec.querySelector(s);
      return el ? { o: getComputedStyle(el).opacity, t: getComputedStyle(el).transform.slice(0, 30) } : null;
    };
    out.vis = {
      card: pick(".ia-card"),
      band: pick(".ia-band"),
      step: pick(".ia-step"),
      ch: pick(".ia-ch"),
    };
    out.consoleErrors = 0;
    return out;
  });

  results.push({ width, ...geo, errors });
  await ctx.close();
}

// normal-motion pass: animations must settle to visible
for (const width of [1440, 390]) {
  const ctx = await browser.newContext({ viewport: { width, height: 900 } });
  const page = await ctx.newPage();
  await page.goto("http://localhost:5199/infrastructure", {
    waitUntil: "load",
    timeout: 45000,
  });
  await page.waitForTimeout(1000);
  await page.evaluate(() => {
    document.querySelector(".infra-process")?.scrollIntoView({ block: "center" });
  });
  await page.waitForTimeout(2500);
  const vis = await page.evaluate(() => {
    const sec = document.querySelector(".infra-process");
    const g = (s) => {
      const el = sec?.querySelector(s);
      if (!el) return null;
      const cs = getComputedStyle(el);
      return { o: cs.opacity, t: cs.transform.slice(0, 40) };
    };
    return { card: g(".ia-card"), band: g(".ia-band"), step: g(".ia-step") };
  });
  results.push({ width, motion: "normal", vis });
  await ctx.close();
}

console.log(JSON.stringify(results, null, 1));
await browser.close();
