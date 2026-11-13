import { chromium } from "playwright-core";

const dark = process.argv[2] !== "light";
const browser = await chromium.launch({ channel: "msedge", headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  reducedMotion: "reduce",
  deviceScaleFactor: 1,
});
const page = await ctx.newPage();
await page.goto("http://localhost:5199/gemstone-marketplace", {
  waitUntil: "load",
  timeout: 45000,
});
await page.waitForTimeout(1500);
if (dark) {
  await page.evaluate(() => document.body.classList.add("dark-mode"));
  await page.waitForTimeout(600);
}
await page.addStyleTag({
  content:
    '*[style*="opacity: 0"] { opacity: 1 !important; transform: none !important; }',
});

const vars = await page.evaluate(() => {
  const cs = getComputedStyle(document.body);
  return {
    bg: cs.getPropertyValue("--bg").trim(),
    bgg: cs.getPropertyValue("--bgg").trim(),
    card: cs.getPropertyValue("--card-bg").trim(),
    text: cs.getPropertyValue("--text").trim(),
    darkClass: document.body.classList.contains("dark-mode"),
  };
});
console.log("VARS:", JSON.stringify(vars));

const sections = [".gm-stats", ".gm-features", ".gm-showcase", ".gm-faq"];
for (const sel of sections) {
  const el = page.locator(sel);
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await el.screenshot({
    path: `C:\\Users\\User\\AppData\\Local\\Temp\\opencode\\dark-${sel.replace(/\W/g, "")}.png`,
  });
  console.log("saved", sel);
}
await browser.close();
