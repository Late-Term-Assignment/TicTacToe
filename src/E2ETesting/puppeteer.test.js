const puppeteer = require('puppeteer');
describe("X input Pupp Test", () => {
    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 80
        });
        page = await browser.newPage();
        await page.setViewport({
            width: 1280,
            height: 800
        });
    });


    test("The message displayed at the top is X's luck!", async () => {
        jest.setTimeout(12000);

        await page.goto('https://tictactoe1inarow.herokuapp.com/')

        // Check that the message simply displays Good luck!
        var message = await page.$eval("#message", e => e.textContent);
        expect(message).toBe("X's turn");
    });

    test("Player X can input in top left square", async () => {
        jest.setTimeout(12000);

        await page.goto('https://tictactoe1inarow.herokuapp.com/')

        //await for the selection, then press square 1 with player x.
        await page.waitForSelector("#s1")
        await page.click("#s1")
        var square = await page.$eval("#s1", e => e.textContent);
        expect(square).toBe("X");
    });

    test("Player O can input in top left square", async () => {
        jest.setTimeout(12000);
        await page.goto('https://tictactoe1inarow.herokuapp.com/')

        // Start by clicking the upper-left corner and then click the top-middle square
        await page.waitForSelector("#s1")
        await page.click("#s1")
        await page.waitForSelector("#s2")
        await page.click("#s2")
        var square = await page.$eval("#s2", e => e.textContent);
        expect(square).toBe("O");
    });

    test("Player X wins the game and check if the correct text is displayed", async () => {
        jest.setTimeout(12000);
        await page.goto('https://tictactoe1inarow.herokuapp.com/')
        // Tests that X wins by selecting the correct squares correctly
        await page.waitForSelector("#s1")
        await page.click("#s1")
        await page.waitForSelector("#s2")
        await page.click("#s2")
        await page.waitForSelector("#s4")
        await page.click("#s4")
        await page.waitForSelector("#s5")
        await page.click("#s5")
        await page.waitForSelector("#s7")
        await page.click("#s7")
        var message = await page.$eval("#message", e => e.textContent);
        expect(message).toBe("X wins");
    });

    test("Player O wins the game and check if the correct text is displayed", async () => {
        jest.setTimeout(12000);
        await page.goto('https://tictactoe1inarow.herokuapp.com/')
        // Tests that X wins by selecting the correct squares correctly
        await page.waitForSelector("#s1")
        await page.click("#s1")
        await page.waitForSelector("#s2")
        await page.click("#s2")
        await page.waitForSelector("#s4")
        await page.click("#s4")
        await page.waitForSelector("#s5")
        await page.click("#s5")
        await page.waitForSelector("#s6")
        await page.click("#s6")
        await page.waitForSelector("#s8")
        await page.click("#s8")
        var message = await page.$eval("#message", e => e.textContent);
        expect(message).toBe("O wins");
    });

    afterAll(() => {
        browser.close();
    });
});