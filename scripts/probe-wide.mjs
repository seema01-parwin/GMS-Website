import { chromium } from "playwright-core";
const route = process.argv[2] || "/";
const width = parseInt(process.argv[3] || "390", 10);
const browser = await chromium.launch({ channel: "msedge", headless: true });
const ctx = await browser.newContext({ viewport: { width, height: 844 }, reducedMotion: "reduce" });
const page = await ctx.newPage();
await page.goto("http://localhost:5199" + route, { waitUntil: "load", timeout: 45000 });
await page.waitForTimeout(1400);
const info = await page.evaluate((w) => {
  const bad = [];
  document.querySelectorAll("body *").forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.width > w + 4 || r.right > w + 20) {
      const s = getComputedStyle(el);
      if (s.display === "none" || s.visibility === "hidden") return;
      if (el.closest("[class*='marquee'],[class*='ticker'],.mobile-panel")) return;
      const p = el.parentElement;
      const ps = p ? getComputedStyle(p) : null;
      bad.push({
        sel: el.tagName.toLowerCase() + "." + (typeof el.className === "string" ? el.className.trim().split(/\s+/).slice(0, 3).join(".") : ""),
        w: Math.round(r.width),
        right: Math.round(r.right),
        gtc: s.gridTemplateColumns !== "none" ? s.gridTemplateColumns.slice(0, 70) : "",
        disp: s.display,
        minw: s.minWidth,
        ws: s.whiteSpace,
        owx: s.overflowX,
        parent: p ? p.tagName.toLowerCase() + "." + (typeof p.className === "string" ? p.className.trim().split(/\s+/).slice(0, 3).join(".") : "") : "",
        pGTC: ps && ps.gridTemplateColumns !== "none" ? ps.gridTemplateColumns.slice(0, 70) : "",
        pDisp: ps ? ps.display : "",
        pOwx: ps ? ps.overflowX : "",
        text: (el.textContent || "").trim().replace(/\s+/g, " ").slice(0, 45),
      });
    }
  });
  bad.sort((a, b) => b.w - a.w);
  return { count: bad.length, worst: bad.slice(0, 12) };
}, width);
console.log(route, width + "px", "→ offenders:", info.count);
console.log(JSON.stringify(info.worst, null, 1));
await browser.close();
