import { chromium } from "playwright-core";
const browser = await chromium.launch({ channel: "msedge", headless: true });
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: "reduce" });
const page = await ctx.newPage();
const route = process.argv[2] || "/privacy";
await page.goto("http://localhost:5199" + route, { waitUntil: "load", timeout: 45000 });
await page.waitForTimeout(1200);
const info = await page.evaluate(() => {
  const body = document.querySelector(".legal-body") || document.body;
  const cs = getComputedStyle(body);
  const widest = [];
  document.querySelectorAll(".legal-page *").forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.width > 400) {
      const s = getComputedStyle(el);
      widest.push({
        sel: el.tagName.toLowerCase() + "." + (typeof el.className === "string" ? el.className.trim().split(/\s+/).slice(0,2).join(".") : ""),
        w: Math.round(r.width),
        disp: s.display,
        minw: s.minWidth,
        pos: s.position,
        ws: s.whiteSpace,
        gtc: s.gridTemplateColumns.slice(0, 60),
        text: (el.textContent || "").trim().slice(0, 40),
      });
    }
  });
  return {
    mq992: matchMedia("(max-width: 992px)").matches,
    bodyGTC: cs.gridTemplateColumns,
    bodyW: Math.round(body.getBoundingClientRect().width),
    count: widest.length,
    sample: widest.slice(0, 14),
  };
});
console.log(JSON.stringify(info, null, 1));
await browser.close();
