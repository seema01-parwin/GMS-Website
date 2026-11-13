import { chromium } from "playwright-core";
const route = process.argv[2] || "/";
const width = parseInt(process.argv[3] || "390", 10);
const sel = process.argv[4] || "body";
const browser = await chromium.launch({ channel: "msedge", headless: true });
const ctx = await browser.newContext({ viewport: { width, height: 844 }, reducedMotion: "reduce" });
const page = await ctx.newPage();
await page.goto("http://localhost:5199" + route, { waitUntil: "load", timeout: 45000 });
await page.waitForTimeout(1400);
const info = await page.evaluate(async ({ w, root }) => {
  const container = document.querySelector(root) || document.body;
  container.scrollIntoView({ block: "center" });
  await new Promise((r) => setTimeout(r, 700));
  const base = container.getBoundingClientRect();
  const out = [];
  container.querySelectorAll("*").forEach((el) => {
    const r = el.getBoundingClientRect();
    const s = getComputedStyle(el);
    if (s.display === "none") return;
    // element wider than its parent's content box, or spilling past container
    const overParent = el.scrollWidth > el.clientWidth + 2 && el.clientWidth > 0;
    const spillRight = r.right > base.right + 2;
    if ((overParent || spillRight) && r.width > 1) {
      out.push({
        sel: el.tagName.toLowerCase() + "." + (typeof el.className === "string" ? el.className.trim().split(/\s+/).slice(0, 3).join(".") : ""),
        w: Math.round(r.width),
        sw: el.scrollWidth,
        cw: el.clientWidth,
        right: Math.round(r.right),
        baseRight: Math.round(base.right),
        disp: s.display,
        ws: s.whiteSpace,
        minw: s.minWidth,
        gtc: s.gridTemplateColumns !== "none" ? s.gridTemplateColumns.slice(0, 60) : "",
        text: (el.textContent || "").trim().replace(/\s+/g, " ").slice(0, 38),
      });
    }
  });
  out.sort((a, b) => (b.sw - b.cw) - (a.sw - a.cw));
  return { rootW: Math.round(base.width), rootRight: Math.round(base.right), items: out.slice(0, 14) };
}, { w: width, root: sel });
console.log(JSON.stringify(info, null, 1));
await browser.close();
