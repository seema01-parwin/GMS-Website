import { chromium } from "playwright-core";

const browser = await chromium.launch({ channel: "msedge", headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  reducedMotion: "reduce",
  deviceScaleFactor: 1,
});
const page = await ctx.newPage();
page.on("pageerror", (e) => console.log("PAGE EXCEPTION:", e.message));
await page.goto("http://localhost:5199/gemstone-marketplace", {
  waitUntil: "load",
  timeout: 45000,
});
await page.waitForTimeout(1500);

const report = async (label) => {
  const data = await page.evaluate(() => {
    const pick = (sel) => {
      const el = document.querySelector(sel);
      if (!el) return `${sel}: MISSING`;
      const cs = getComputedStyle(el);
      return `${sel}: opacity=${cs.opacity} transform=${cs.transform.slice(0, 40)} inline="${el.getAttribute("style")?.slice(0, 80) || ""}"`;
    };
    return [
      pick(".gm-stat"),
      pick(".gm-feat-card"),
      pick(".gm-cat"),
      pick(".gm-step-card"),
      pick(".gm-security-li"),
      pick(".gm-faq-list"),
    ].join("\n");
  });
  console.log(`--- ${label} ---\n${data}`);
};

await report("initial");

// scroll slowly through the page
const height = await page.evaluate(() => document.body.scrollHeight);
for (let y = 0; y < height; y += 450) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await page.waitForTimeout(220);
}
await page.waitForTimeout(1200);
await report("after scroll");

await browser.close();
