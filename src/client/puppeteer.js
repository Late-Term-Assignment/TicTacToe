const puppeteer = require('puppeteer');
puppeteer.launch({headless: false}).then(async browser => {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 })
  await page.goto('http://localhost:3000/');  
  
  //take screenshot of an empty board
  //await page.screenshot({ path: 'emptyBoard.png', fullPage: true })

  //start by clearing the cache, init new board and game
  /*await page.waitFor(2000);
  await page.waitForSelector('#reset')
  await page.click("#reset")
  await page.waitFor(2000);
  await page.waitForSelector('#new-game')
  await page.click("#new-game")*/
  
  await page.waitFor(5000);
  await page.$eval( '#s1', button => {
    button.click();
  });
  await page.waitFor(2000);

  
  //await page.waitFor(2000)
  //await page.click("#0")

  /*await page.screenshot({ path: 'id0InputX.png', fullPage: true });
  page.click("#1");
  await page.waitFor(1000);
  await page.screenshot({ path: 'id1InputO.png', fullPage: true });
  await page.waitFor(1000);

  //reset game test
  page.click("#reset");
  await page.waitFor(1000);
  await page.screenshot({ path: 'resetGame.png', fullPage: true });

  //form a win condition for X and screenshot.
  await page.waitFor(1000);
  await page.click("#0");
  await page.waitFor(500);
  await page.click("#1");
  await page.waitFor(500);
  await page.click("#4");
  await page.waitFor(500);
  await page.click("#3");
  await page.waitFor(500);
  await page.click("#8");
  await page.waitFor(500);
  await page.screenshot({ path: 'xWinCondition.png', fullPage: true });

  //new game
  await page.waitFor(1000);
  await page.click("#new-game");
  await page.waitFor(1000);
  await page.screenshot({ path: 'newGame.png', fullPage: true });

  //win condition for O and screenshot
  await page.waitFor(1000);
  await page.click("#0");
  await page.waitFor(500);
  await page.click("#2");
  await page.waitFor(500);
  await page.click("#4");
  await page.waitFor(500);
  page.click("#5");
  await page.waitFor(500);
  page.click("#1");
  await page.waitFor(500);
  page.click("#8");
  await page.waitFor(500);
  await page.screenshot({ path: 'oWinCondition.png', fullPage: true });

  //new game, check draw condition
  await page.waitFor(1000);
  page.click("#new-game");
  await page.waitFor(1000);
  page.click("#0");
  await page.waitFor(500);
  page.click("#2");
  await page.waitFor(500);
  page.click("#1");
  await page.waitFor(500);
  page.click("#3");
  await page.waitFor(500);
  page.click("#6");
  await page.waitFor(500);
  page.click("#7");
  await page.waitFor(500);
  page.click("#8");
  await page.waitFor(500);
  page.click("#4");
  await page.waitFor(500);
  page.click("#5");
  await page.waitFor(500);
  await page.screenshot({ path: 'DrawCondition.png', fullPage: true });
  await page.waitFor(1000);
  await browser.close();
  */
});