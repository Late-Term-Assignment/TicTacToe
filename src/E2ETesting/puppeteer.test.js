const puppeteer = require('puppeteer');
describe("Puppeteer testing for game", () => {
    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: true,
            slowMo: 80
        });
        page = await browser.newPage();
        await page.setViewport({
            width: 1280,
            height: 800
        });
    });

    test("Everything is set to its initial status", async () => {
        jest.setTimeout(12000);

        await page.goto('https://fast-tor-43758.herokuapp.com/')

        // Checks that everything is displayed correctly when the user resets
        await page.waitForSelector("#reset")
        await page.click("#reset")
        var player1 = await page.$eval("#score1", e => e.textContent);
        var player2 = await page.$eval("#score2", e => e.textContent);
        var draws = await page.$eval("#draws", e => e.textContent);
        expect(player1).toBe("0");
        expect(player2).toBe("0");
        expect(draws).toBe("0");
    });


    test("The message displayed at the top is X's turn!", async () => {
        jest.setTimeout(12000);

        await page.goto('https://fast-tor-43758.herokuapp.com/')

        // Check that the message simply displays X's turn!
        var message = await page.$eval("#message", e => e.textContent);
        expect(message).toBe("X's turn");
    });

    test("The message displayed at the top is O's turn!", async () => {
        jest.setTimeout(3000);
        await page.goto('https://fast-tor-43758.herokuapp.com/')
        await page.waitForSelector("#s1")
        await page.click("#s1")
        // Check that the message simply displays Good luck!
        var message = await page.$eval("#message", e => e.textContent);
        expect(message).toBe("O's turn");
    });

    test("Player X can input in top left square", async () => {
        jest.setTimeout(12000);

        await page.goto('https://fast-tor-43758.herokuapp.com/')

        //await for the selection, then press square 1 with player x.
        await page.waitForSelector("#s1")
        await page.click("#s1")
        var square = await page.$eval("#s1", e => e.textContent);
        expect(square).toBe("X");
    });

    test("Player O can input in top left square", async () => {
        jest.setTimeout(12000);
        await page.goto('https://fast-tor-43758.herokuapp.com/')

        // Start by clicking the upper-left corner and then click the top-middle square
        await page.waitForSelector("#s1")
        await page.click("#s1")
        await page.waitForSelector("#s2")
        await page.click("#s2")
        var square = await page.$eval("#s2", e => e.textContent);
        expect(square).toBe("O");
    });

    test("Player X wins the game, vertical, and check if the correct text on the site is displayed", async () => {
        jest.setTimeout(15000);
        await page.goto('https://fast-tor-43758.herokuapp.com/')
        // Tests that X wins, vertically, by selecting the correct squares correctly
        await page.waitForSelector("#reset")
        await page.click("#reset")
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
        var player1 = await page.$eval("#score1", e => e.textContent);
        var player2 = await page.$eval("#score2", e => e.textContent);
        var draws = await page.$eval("#draws", e => e.textContent);
        expect(message).toBe("X wins");
        expect(player1).toBe("1");
        expect(player2).toBe("0");
        expect(draws).toBe("0");
    });

    test("Repeated X win test, but new game initialized and score stored and unchanged", async () => {
        jest.setTimeout(15000);
        await page.goto('https://fast-tor-43758.herokuapp.com/')
        // Tests that X wins, new game selected and score stored and checked for accuracy.
        await page.waitForSelector("#reset")
        await page.click("#reset")
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
        await page.waitForSelector("#new-game")
        await page.click("#new-game")
        var message = await page.$eval("#message", e => e.textContent);
        var player1 = await page.$eval("#score1", e => e.textContent);
        var player2 = await page.$eval("#score2", e => e.textContent);
        var draws = await page.$eval("#draws", e => e.textContent);
        expect(message).toBe("X's turn");
        expect(player1).toBe("1");
        expect(player2).toBe("0");
        expect(draws).toBe("0");

    });

    test("Player O wins the game, vertical, and check if the correct text is displayed", async () => {
        jest.setTimeout(12000);
        await page.goto('https://fast-tor-43758.herokuapp.com/')
        // Test that O wins, vertically, and if the score updates correctly
        await page.waitForSelector("#reset")
        await page.click("#reset")
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
        var player1 = await page.$eval("#score1", e => e.textContent);
        var player2 = await page.$eval("#score2", e => e.textContent);
        var draws = await page.$eval("#draws", e => e.textContent);
        expect(message).toBe("O wins");
        expect(player1).toBe("0");
        expect(player2).toBe("1");
        expect(draws).toBe("0");
    });

    test("Player X wins the game, diagonally, and check if the correct text is displayed", async () => {
        jest.setTimeout(12000);
        await page.goto('https://fast-tor-43758.herokuapp.com/')
        // Test that X wins, diagonally, and if the score updates correctly
        await page.waitForSelector("#reset")
        await page.click("#reset")
        await page.waitForSelector("#s1")
        await page.click("#s1")
        await page.waitForSelector("#s2")
        await page.click("#s2")
        await page.waitForSelector("#s5")
        await page.click("#s5")
        await page.waitForSelector("#s3")
        await page.click("#s3")
        await page.waitForSelector("#s9")
        await page.click("#s9")

        var message = await page.$eval("#message", e => e.textContent);
        var player1 = await page.$eval("#score1", e => e.textContent);
        var player2 = await page.$eval("#score2", e => e.textContent);
        var draws = await page.$eval("#draws", e => e.textContent);
        expect(message).toBe("X wins");
        expect(player1).toBe("1");
        expect(player2).toBe("0");
        expect(draws).toBe("0");
    });

    test("Player O wins the game, horizontally, and check if the correct text is displayed", async () => {
        jest.setTimeout(12000);
        await page.goto('https://fast-tor-43758.herokuapp.com/')
        // Test that O wins, horizontally, and if the score updates correctly
        await page.waitForSelector("#reset")
        await page.click("#reset")
        await page.waitForSelector("#s1")
        await page.click("#s1")
        await page.waitForSelector("#s4")
        await page.click("#s4")
        await page.waitForSelector("#s2")
        await page.click("#s2")
        await page.waitForSelector("#s5")
        await page.click("#s5")
        await page.waitForSelector("#s9")
        await page.click("#s9")
        await page.waitForSelector("#s6")
        await page.click("#s6")
        var message = await page.$eval("#message", e => e.textContent);
        var player1 = await page.$eval("#score1", e => e.textContent);
        var player2 = await page.$eval("#score2", e => e.textContent);
        var draws = await page.$eval("#draws", e => e.textContent);
        expect(message).toBe("O wins");
        expect(player1).toBe("0");
        expect(player2).toBe("1");
        expect(draws).toBe("0");
    });

    test("Draw and check if the correct text is displayed", async () => {
        jest.setTimeout(12000);
        await page.goto('https://fast-tor-43758.herokuapp.com/')
        // Test draw, diagonally, and if the score updates correctly
        await page.click("#reset")
        await page.click("#s1")
        await page.click("#s3")
        await page.click("#s2")
        await page.click("#s4")
        await page.click("#s7")
        await page.click("#s8")
        await page.click("#s9")
        await page.click("#s5")
        await page.click("#s6")
        var message = await page.$eval("#message", e => e.textContent);
        var player1 = await page.$eval("#score1", e => e.textContent);
        var player2 = await page.$eval("#score2", e => e.textContent);
        var draws = await page.$eval("#draws", e => e.textContent);
        expect(message).toBe("Draw");
        expect(player1).toBe("0");
        expect(player2).toBe("0");
        expect(draws).toBe("1");
    });

    test("Illegal input test, O tries to fill in square 1 which is already occupied", async () => {
        jest.setTimeout(12000);
        await page.goto('https://fast-tor-43758.herokuapp.com/')
        // X starts by occupying square #1, then it's O's turn and he/she tests the same square with no changes occuring.
        await page.click("#reset")
        await page.click("#s1")
        await page.click("#s1")
        var message = await page.$eval("#message", e => e.textContent);
        var player1 = await page.$eval("#score1", e => e.textContent);
        var player2 = await page.$eval("#score2", e => e.textContent);
        var draws = await page.$eval("#draws", e => e.textContent);
        var square = await page.$eval("#s1", e => e.textContent);

        expect(message).toBe("O's turn");
        expect(square).toBe("X");
        expect(player2).toBe("0");
        expect(draws).toBe("0");
    });


    afterAll(() => {
        browser.close();
    });
});