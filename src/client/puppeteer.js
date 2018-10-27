const puppeteer = require('puppeteer');
puppeteer.launch({headless: false}).then(async browser => {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 })
  await page.goto('https://arcane-crag-40980.herokuapp.com/?fbclid=IwAR2X0t7n5PKULXXlUqYqZ1IsrL8cRnKYnStlIeI1yOi9d4nOje94RacRfx0');  
  //take screenshot of an empty board
  // await page.screenshot({ path: 'emptyBoard.png', fullPage: true });

  //const frame = await page.frames().find(f => f.name() === 'iframe');

  /*await page.evaluate(() => {
    document.querySelector('button[type=submit]').click();
  });
  await page.click("#0");*/
  //console.log("dfkjldfjkfdklj");

  //await page.click(zero);
  //square.click();
  //await page.waitFor(10000);
/*await page.waitForSelector(".square");
var squares = await page.$(".square");
squares[0].click();*/

  //await page.waitForSelector('#0')
  /*await page.click(selector, '#0')
  
  await page.click("#0")

  await page.screenshot({ path: 'id0InputX.png', fullPage: true });
  page.click("#1");
  await page.screenshot({ path: 'id1InputO.png', fullPage: true });

  //reset game test
  page.click("#reset");
  await page.screenshot({ path: 'resetGame.png', fullPage: true });

  //form a win condition for X and screenshot.
  page.click("#0");
  page.click("#1");
  page.click("#4");
  page.click("#3");
  page.click("#8");
  await page.screenshot({ path: 'xWinCondition.png', fullPage: true });

  //new game
  page.click("#new-game");
  await page.screenshot({ path: 'newGame.png', fullPage: true });

  //win condition for O and screenshot
  page.click("#0");
  page.click("#2");
  page.click("#4");
  page.click("#5");
  page.click("#1");
  page.click("#8");
  await page.screenshot({ path: 'oWinCondition.png', fullPage: true });

  //new game, check draw condition
  page.click("#new-game");
  page.click("#0");
  page.click("#2");
  page.click("#1");
  page.click("#3");
  page.click("#6");
  page.click("#7");
  page.click("#8");
  page.click("#4");
  page.click("#5");
  await page.screenshot({ path: 'DrawCondition.png', fullPage: true });*/
  await browser.close();
});