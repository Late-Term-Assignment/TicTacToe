const puppeteer = require('puppeteer');
describe("X input Pupp Test", () => { 
    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: true,
            slowMo: 80
        });
    });

    test("Player X can input in top left square", async () => {
            jest.setTimeout(12000);
            const page = await browser.newPage();
            await page.setViewport({ width: 1280, height: 800 })
            await page.goto('https://tictactoe1inarow.herokuapp.com/')  
          
            //await for the selection, then press square 1 with player x.
            await page.waitForSelector("#s1") 
            await page.click("#s1")
            var tmp = await page.$eval("#s1", e => e.textContent);
            expect(tmp).toBe("X");
    });
    test("Player O can input in top left square", async () => {
        jest.setTimeout(12000);
        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 800 })
        await page.goto('https://tictactoe1inarow.herokuapp.com/')  
      
        //await for the selection, then press square 1 with player x.
        await page.waitForSelector("#s1") 
        await page.click("#s1")
        await page.waitForSelector("#s2") 
        await page.click("#s2")
        var tmp = await page.$eval("#s2", e => e.textContent);
        expect(tmp).toBe("O");
});
    afterAll(() => {
        browser.close();
    });
});

