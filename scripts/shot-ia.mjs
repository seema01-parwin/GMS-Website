import { chromium } from "playwright-core";

const width = parseInt(process.argv[2] || "1440", 10);
const out = process.argv[3] || "C:\\Users\\User\\AppData\\Local\\Temp\\opencode\\ia.png";
const dark = process.argv[4] === "dark";
const browser = await chromium.launch({ channel: "msedge", headless: true });
const ctx = await browser.newContext({
  viewport: { width, height: 900 },
  reducedMotion: "reduce",
  deviceScaleFactor: 1,
  colorScheme: dark ? "dark" : "light",
});
const page = await ctx.newPage();
await page.goto("http://localhost:5199/infrastructure", {
  waitUntil: "load",
  timeout: 45000,
});
await page.waitForTimeout(1500);
if (dark) {
  await page.evaluate(() => document.body.classList.add("dark-mode"));
  await page.waitForTimeout(400);
}
const sec = page.locator(".infra-process");
await sec.scrollIntoViewIfNeeded();
await page.waitForTimeout(600);
await sec.screenshot({ path: out });
console.log("saved", out);
await browser.close();
