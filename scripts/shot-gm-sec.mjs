import { chromium } from "playwright-core";

const browser = await chromium.launch({ channel: "msedge", headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 950 },
  reducedMotion: "reduce",
  deviceScaleFactor: 1,
});
const page = await ctx.newPage();
await page.goto("http://localhost:5199/gemstone-marketplace", {
  waitUntil: "load",
  timeout: 45000,
});
await page.waitForTimeout(1500);
await page.addStyleTag({
  content:
    '*[style*="opacity: 0"] { opacity: 1 !important; transform: none !important; }',
});

for (const sel of [".gm-hero", ".gm-cats", ".gm-process", ".gm-showcase"]) {
  const el = page.locator(sel);
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await el.screenshot({
    path: `C:\\Users\\User\\AppData\\Local\\Temp\\opencode\\sec-${sel.replace(/\W/g, "")}.png`,
  });
  console.log("saved", sel);
}
await browser.close();
