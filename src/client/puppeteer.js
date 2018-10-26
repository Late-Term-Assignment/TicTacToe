const puppeteer = require('puppeteer');
puppeteer.launch({headless: false}).then(async browser => {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 })
  await page.goto('https://www.mbl.is/frettir/');
  await page.screenshot({ path: 'myscreenshot.png', fullPage: true });
  //await browser.close();
});