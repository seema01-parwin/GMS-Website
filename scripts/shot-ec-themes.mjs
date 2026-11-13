import { chromium } from "playwright-core";

const dark = process.argv[2] === "dark";
const suffix = dark ? "dark" : "light";
const browser = await chromium.launch({ channel: "msedge", headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 950 },
  reducedMotion: "reduce",
  deviceScaleFactor: 1,
});
const page = await ctx.newPage();
await page.goto("http://localhost:5199/ecommerce", {
  waitUntil: "load",
  timeout: 45000,
});
await page.waitForTimeout(1500);
if (dark) {
  await page.evaluate(() => document.body.classList.add("dark-mode"));
  await page.waitForTimeout(500);
}
await page.addStyleTag({
  content:
    '*[style*="opacity: 0"] { opacity: 1 !important; transform: none !important; }',
});

for (const sel of [
  ".ec-hero",
  ".ec-showcase",
  ".ec-cats",
  ".ec-security",
  ".ec-insights",
  ".ec-cta",
]) {
  const el = page.locator(sel);
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(450);
  await el.screenshot({
    path: `C:\\Users\\User\\AppData\\Local\\Temp\\opencode\\t-${sel.replace(/\W/g, "")}-${suffix}.png`,
  });
  console.log("saved", sel, suffix);
}
await browser.close();
