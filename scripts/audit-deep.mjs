/* Deep responsive audit: finds (a) content clipped by overflow-hidden ancestors,
   (b) children/text spilling out of their own box, (c) tiny tap targets. */
import { chromium } from "playwright-core";

const BASE = "http://localhost:5199";
const WIDTHS = [390, 640];
const ROUTES = [
  "/", "/about", "/contact", "/software", "/infrastructure", "/master-planning",
  "/real-estate", "/marketing", "/bpo", "/career", "/gallery", "/portfolio",
  "/blog", "/news", "/interior-design", "/graphic-design", "/privacy", "/terms",
];

const PROBE = `(() => {
  const winW = window.innerWidth;
  const clipped = [];
  const spill = [];
  const taps = [];
  const key = (el) =>
    el.tagName.toLowerCase() +
    (typeof el.className === "string" && el.className ? "." + el.className.trim().split(/\\s+/).slice(0, 3).join(".") : "");
  const inClipper = (el) => {
    for (let p = el.parentElement; p; p = p.parentElement) {
      const ox = getComputedStyle(p).overflowX;
      if (["hidden", "clip", "auto", "scroll"].includes(ox)) return true;
    }
    return false;
  };
  const walk = (el) => {
    const st = getComputedStyle(el);
    if (st.display === "none" || st.visibility === "hidden") return;
    const r = el.getBoundingClientRect();
    if (r.width > 0.5 && r.height > 0.5) {
      if (r.right > winW + 1 && inClipper(el)) {
        clipped.push({ sel: key(el), right: Math.round(r.right), w: Math.round(r.width), over: Math.round(r.right - winW) });
      }
      const oxSelf = st.overflowX;
      if (!["auto", "scroll"].includes(oxSelf) && el.scrollWidth > el.clientWidth + 2 && el.clientWidth > 0) {
        spill.push({ sel: key(el), scrollW: el.scrollWidth, clientW: el.clientWidth, over: el.scrollWidth - el.clientWidth });
      }
      const tag = el.tagName;
      if ((tag === "A" || tag === "BUTTON" || tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") &&
          (r.height < 26 || r.width < 24) && el.textContent.trim().length) {
        taps.push({ sel: key(el), w: Math.round(r.width), h: Math.round(r.height), text: (el.textContent || "").trim().slice(0, 24) });
      }
    }
    if (!["hidden", "clip"].includes(st.overflowX) || true) {
      for (const c of el.children) walk(c);
    }
  };
  walk(document.documentElement);
  const uniq = (arr) => {
    const seen = new Set();
    return arr.filter((x) => (seen.has(x.sel) ? false : (seen.add(x.sel), true)))
      .sort((a, b) => (b.over || 0) - (a.over || 0)).slice(0, 10);
  };
  return { clipped: uniq(clipped), spill: uniq(spill), taps: uniq(taps) };
})()`;

const browser = await chromium.launch({ channel: "msedge", headless: true });
const report = {};

for (const width of WIDTHS) {
  const ctx = await browser.newContext({ viewport: { width, height: 844 }, reducedMotion: "reduce" });
  for (const route of ROUTES) {
    const page = await ctx.newPage();
    try {
      await page.goto(BASE + route, { waitUntil: "load", timeout: 45000 });
      await page.waitForTimeout(1500);
      const r = await page.evaluate(PROBE);
      if (r.clipped.length || r.spill.length || r.taps.length) {
        report[width + "px " + route] = r;
      }
    } catch (e) {
      report[width + "px " + route] = { failed: String(e).slice(0, 120) };
    }
    await page.close();
  }
  await ctx.close();
}
await browser.close();
console.log(JSON.stringify(report, null, 1));
