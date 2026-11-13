import { chromium } from "playwright-core";

const width = parseInt(process.argv[2] || "1440", 10);
const out = process.argv[3] || "C:\\Users\\User\\AppData\\Local\\Temp\\opencode\\ec.png";
const dark = process.argv[4] === "dark";
const full = process.argv[5] !== "viewport";
const browser = await chromium.launch({ channel: "msedge", headless: true });
const ctx = await browser.newContext({
  viewport: { width, height: 900 },
  reducedMotion: "reduce",
  deviceScaleFactor: 1,
  colorScheme: dark ? "dark" : "light",
});
const page = await ctx.newPage();
page.on("console", (m) => {
  if (m.type() === "error") console.log("PAGE ERROR:", m.text());
});
page.on("pageerror", (e) => console.log("PAGE EXCEPTION:", e.message));
await page.goto("http://localhost:5199/ecommerce", {
  waitUntil: "load",
  timeout: 45000,
});
await page.waitForTimeout(1800);
if (dark) {
  await page.evaluate(() => document.body.classList.add("dark-mode"));
  await page.waitForTimeout(500);
}
// trigger all scroll-in animations, then pin them visible for the capture
await page.evaluate(async () => {
  for (let y = 0; y < document.body.scrollHeight; y += 700) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 90));
  }
  window.scrollTo(0, 0);
});
await page.addStyleTag({
  content:
    '*[style*="opacity: 0"] { opacity: 1 !important; transform: none !important; }',
});
await page.waitForTimeout(900);
await page.screenshot({ path: out, fullPage: full });
console.log("saved", out);
await browser.close();
