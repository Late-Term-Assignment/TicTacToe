const puppeteer = require('puppeteer');
puppeteer.launch({headless: false}).then(async browser => {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 })
  await page.goto('https://tictactoe1inarow.herokuapp.com/')  

  //await for the selection, then press square 1 with player x.
  await page.waitFor(1000) //short delay just in case.
  await page.waitForSelector('#s1') 
  await page.click("#s1")
  //await page.screenshot({ path: 's1XInput.png', fullPage: true })
  await browser.close()
});