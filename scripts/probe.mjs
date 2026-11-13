import { chromium } from "playwright-core";
const browser = await chromium.launch({ channel: "msedge", headless: true });
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: "reduce" });
const page = await ctx.newPage();
const errs = [];
page.on("console", (m) => m.type() === "error" && errs.push(m.text()));
page.on("pageerror", (e) => errs.push(String(e)));
for (const route of ["/", "/infrastructure", "/portfolio"]) {
  await page.goto("http://localhost:5199" + route, { waitUntil: "load", timeout: 45000 });
  await page.waitForTimeout(1500);
  const info = await page.evaluate(() => ({
    inner: window.innerWidth,
    html: document.documentElement.scrollWidth,
    body: document.body.scrollWidth,
    nodes: document.body.querySelectorAll("*").length,
    h1: document.querySelector("h1")?.innerText?.slice(0, 60),
    scrollH: document.documentElement.scrollHeight,
  }));
  console.log(route, JSON.stringify(info));
}
console.log("console errors:", errs.slice(0, 5));
await page.screenshot({ path: process.env.TEMP + "\\shot-390.png", fullPage: false });
await browser.close();
