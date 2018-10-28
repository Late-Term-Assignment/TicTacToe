const puppeteer = require('puppeteer');
puppeteer.launch({headless: false}).then(async browser => {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 })
  await page.goto('http://localhost:3000/');  
  
  //take screenshot of an empty board
  //await page.screenshot({ path: 'emptyBoard.png', fullPage: true })

  //start by clearing the cache, init new board and game
  await page.waitFor(700);
  await page.waitForSelector('#reset')
  await page.click("#reset")
  await page.waitFor(700);
  await page.waitForSelector('#new-game')
  await page.click("#new-game")
  await page.waitFor(700);
  await page.screenshot({ path: 'emptyBoard.png', fullPage: true })

  
  await page.waitFor(700);
  //test x insert for top left square
  await page.click('#s1')
  await page.screenshot({ path: 'id1InputX.png', fullPage: true })
  await page.waitFor(700);
  //test o insert for top middle square
  await page.click('#s2')
  await page.waitFor(700)
  await page.screenshot({ path: 'id1InputO.png', fullPage: true })
  await page.waitFor(1000)

  //reset game test
  page.click("#reset")
  await page.waitFor(1000)
  await page.screenshot({ path: 'resetGame.png', fullPage: true })

  //form a win condition for X and screenshot.
  await page.waitFor(1000)
  await page.click("#s1")
  await page.waitFor(500)
  await page.click("#s2")
  await page.waitFor(500)
  await page.click("#s5")
  await page.waitFor(500)
  await page.click("#s4")
  await page.waitFor(500)
  await page.click("#s9")
  await page.waitFor(500)
  await page.screenshot({ path: 'xWinCondition.png', fullPage: true })

  //new game
  await page.waitFor(1000)
  await page.click("#new-game")
  await page.waitFor(1000)
  await page.screenshot({ path: 'newGame.png', fullPage: true })

  //win condition for O and screenshot
  await page.waitFor(1000)
  await page.click("#s1")
  await page.waitFor(500)
  await page.click("#s3")
  await page.waitFor(500)
  await page.click("#s5")
  await page.waitFor(500)
  await page.click("#s6")
  await page.waitFor(500)
  await page.click("#s2")
  await page.waitFor(500)
  await page.click("#s9")
  await page.waitFor(500)
  await page.screenshot({ path: 'oWinCondition.png', fullPage: true })

  //new game, check draw condition
  await page.waitFor(700)
  await page.click("#new-game")
  await page.waitFor(700)
  await page.click("#s1")
  await page.waitFor(500)
  await page.click("#s3")
  await page.waitFor(500)
  await page.click("#s2")
  await page.waitFor(500)
  await page.click("#s4")
  await page.waitFor(500)
  await page.click("#s7")
  await page.waitFor(500)
  await page.click("#s8")
  await page.waitFor(500)
  await page.click("#s9")
  await page.waitFor(500)
  await page.click("#s5")
  await page.waitFor(500)
  await page.click("#s6")
  await page.waitFor(500)
  await page.screenshot({ path: 'DrawCondition.png', fullPage: true })
  await page.waitFor(1000)
  await page.click("#reset")
  await page.screenshot({ path: 'finalReset.png', fullPage: true })
  await page.waitFor(1000)

  await browser.close()
});