/* Audit v3: per-section scroll (animations settle), then two metrics:
   A) content cut past the viewport edge (not inside an overflow-clipped ancestor)
   B) in-flow child spilling past its own parent box (crushed/overflowing columns)
   Absolute-positioned children are ignored (decorative bleeds are by design). */
import { chromium } from "playwright-core";

const BASE = "http://localhost:5199";
const WIDTHS = (process.env.WIDTHS || "390,640").split(",").map(Number);
const ROUTES = process.env.ROUTES
  ? process.env.ROUTES.split(",")
  : ["/", "/about", "/contact", "/software", "/infrastructure", "/master-planning",
     "/real-estate", "/marketing", "/bpo", "/career", "/gallery", "/portfolio",
     "/blog", "/news", "/interior-design", "/graphic-design", "/privacy", "/terms"];

const MEASURE = `(sections) => {
  const winW = window.innerWidth;
  const cut = [];
  const spill = [];
  const seen = new Set();
  const key = (el) => el.tagName.toLowerCase() + "." +
    (typeof el.className === "string" ? el.className.trim().split(/\\s+/).slice(0, 3).join(".") : "");
  const inClipper = (el) => {
    for (let p = el.parentElement; p; p = p.parentElement) {
      if (["hidden", "clip", "auto", "scroll"].includes(getComputedStyle(p).overflowX)) return true;
    }
    return false;
  };
  for (const sec of sections) {
    const scope = document.querySelector(sec);
    if (!scope) continue;
    scope.querySelectorAll("*").forEach((el) => {
      const st = getComputedStyle(el);
      if (st.display === "none" || st.visibility === "hidden" || st.position === "fixed") return;
      const r = el.getBoundingClientRect();
      if (r.width < 1 || r.height < 1) return;

      // A) cut by viewport
      if (!inClipper(el) && (r.right > winW + 1 || r.left < -1)) {
        const k = "cut|" + key(el);
        if (!seen.has(k)) {
          seen.add(k);
          cut.push({ sel: key(el), left: Math.round(r.left), right: Math.round(r.right),
                     over: Math.round(Math.max(r.right - winW, -r.left)) });
        }
      }

      // B) in-flow child overflowing this box
      const ox = st.overflowX;
      if (!["auto", "scroll"].includes(ox)) {
        for (const c of el.children) {
          const cst = getComputedStyle(c);
          if (cst.position === "absolute" || cst.position === "fixed") continue;
          if (cst.display === "none") continue;
          const cr = c.getBoundingClientRect();
          const over = cr.right - r.right;
          if (over > 8) {
            const k = "spill|" + key(el) + ">" + key(c);
            if (!seen.has(k)) {
              seen.add(k);
              spill.push({ sel: key(el), child: key(c), over: Math.round(over), cw: Math.round(r.width) });
            }
          }
        }
      }
    });
  }
  cut.sort((a, b) => b.over - a.over);
  spill.sort((a, b) => b.over - a.over);
  return { cut: cut.slice(0, 6), spill: spill.slice(0, 6) };
}`;

const browser = await chromium.launch({ channel: "msedge", headless: true });
const report = {};

for (const width of WIDTHS) {
  const ctx = await browser.newContext({ viewport: { width, height: 844 }, reducedMotion: "reduce" });
  for (const route of ROUTES) {
    const page = await ctx.newPage();
    try {
      await page.goto(BASE + route, { waitUntil: "load", timeout: 45000 });
      await page.waitForTimeout(1200);
      const sections = await page.evaluate(() =>
        Array.from(document.querySelectorAll("section, footer"))
          .filter((el) => !el.parentElement?.closest("section"))
          .map((el, i) => {
            if (!el.className) el.setAttribute("data-audit", String(i));
            return el.className
              ? "." + String(el.className).trim().split(/\s+/).join(".")
              : "[data-audit='" + i + "']";
          })
      );
      let acc = { cut: [], spill: [] };
      for (const sel of sections) {
        await page.evaluate((s) => {
          const e = document.querySelector(s);
          if (e) e.scrollIntoView({ block: "start" });
        }, sel);
        await page.waitForTimeout(420);
        const res = await page.evaluate(`(${MEASURE})(${JSON.stringify([sel])})`);
        acc.cut.push(...res.cut);
        acc.spill.push(...res.spill);
      }
      const dedupe = (arr) => {
        const s = new Set();
        return arr.filter((x) => {
          const k = JSON.stringify(x);
          if (s.has(k)) return false;
          s.add(k);
          return true;
        }).slice(0, 10);
      };
      acc.cut = dedupe(acc.cut);
      acc.spill = dedupe(acc.spill);
      if (acc.cut.length || acc.spill.length) report[width + "px " + route] = acc;
    } catch (e) {
      report[width + "px " + route] = { failed: String(e).slice(0, 120) };
    }
    await page.close();
  }
  await ctx.close();
}
await browser.close();
console.log(JSON.stringify(report, null, 1));
