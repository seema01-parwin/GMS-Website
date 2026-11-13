/* Responsive audit: measures horizontal overflow + console errors on every
   route at mobile/tablet widths using system Edge (via playwright-core). */
import { chromium } from "playwright-core";

const BASE = process.env.AUDIT_URL || "http://localhost:5199";
const WIDTHS = (process.env.AUDIT_WIDTHS || "390,640,768,1024")
  .split(",")
  .map((n) => parseInt(n, 10));

const ROUTES = [
  "/",
  "/about",
  "/contact",
  "/software",
  "/infrastructure",
  "/master-planning",
  "/real-estate",
  "/marketing",
  "/bpo",
  "/career",
  "/gallery",
  "/portfolio",
  "/blog",
  "/news",
  "/interior-design",
  "/graphic-design",
  "/privacy",
  "/terms",
];

const OVERFLOW_PROBE = `(() => {
  const winW = window.innerWidth;
  const out = [];
  const seen = new Set();
  const walk = (el) => {
    const style = getComputedStyle(el);
    if (style.display === "none" || style.visibility === "hidden") return;
    const r = el.getBoundingClientRect();
    const clipped = ["hidden", "clip", "auto", "scroll"].includes(style.overflowX);
    if (r.width > 0.5 && r.height > 0.5 && (r.right > winW + 1 || r.left < -1)) {
      if (!clipped) {
        const key = (el.className && el.className.toString ? el.className.toString() : "") + "|" + el.tagName;
        if (!seen.has(key)) {
          seen.add(key);
          out.push({
            tag: el.tagName.toLowerCase(),
            cls: (el.className && el.className.toString ? el.className.toString() : "").slice(0, 90),
            left: Math.round(r.left),
            right: Math.round(r.right),
            w: Math.round(r.width),
            overflow: Math.round(Math.max(r.right - winW, -r.left)),
          });
        }
      }
    }
    if (!clipped) {
      for (const c of el.children) walk(c);
    }
  };
  walk(document.documentElement);
  out.sort((a, b) => b.overflow - a.overflow);
  return { docWidth: document.documentElement.scrollWidth, winW, offenders: out.slice(0, 8) };
})()`;

const browser = await chromium.launch({ channel: "msedge", headless: true });
const results = [];

for (const width of WIDTHS) {
  const context = await browser.newContext({
    viewport: { width, height: 900 },
    reducedMotion: "reduce",
    deviceScaleFactor: 1,
  });
  for (const route of ROUTES) {
    const page = await context.newPage();
    const errors = [];
    page.on("console", (m) => {
      if (m.type() === "error") errors.push(m.text().slice(0, 200));
    });
    page.on("pageerror", (e) => errors.push(String(e).slice(0, 200)));
    try {
      await page.goto(BASE + route, { waitUntil: "load", timeout: 45000 });
      await page.waitForTimeout(1800);
      const probe = await page.evaluate(OVERFLOW_PROBE);
      const overflowing = probe.docWidth > probe.winW + 1;
      if (overflowing || errors.length) {
        results.push({
          width,
          route,
          docWidth: probe.docWidth,
          winW: probe.winW,
          overflowing,
          offenders: probe.offenders,
          errors,
        });
      }
    } catch (e) {
      results.push({ width, route, failed: String(e).slice(0, 200) });
    }
    await page.close();
  }
  await context.close();
}

await browser.close();
console.log(JSON.stringify(results, null, 2));
