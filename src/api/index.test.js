const request = require("supertest");
const app = require("../app");

// Get new game board
describe("GET /newGame", () => {
    it("should return the game board in its initial state", async () => {
        const res = await request(app).get("/newGame");
        expect(res.status).toBe(200);
        expect(res.body.game.board).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});


// Make a single move
describe("POST /makeMove/5", () => {
    it("should be able to make a move", async () => {
        await request(app).get("/newGame");
        const one = await request(app).post("/makeMove/5")
        const res = await request(app).post("/getBoard")
        expect(res.body).toEqual({ "GameBoard": [1, 2, 3, 4, "X", 6, 7, 8, 9]});
    });
});

// Make multiple moves
describe("POST /makeMove/5, /makeMove/7, /makeMove/9", () => {
    it("should be able to make a move", async () => {
        await request(app).get("/newGame");
        const one = await request(app).post("/makeMove/5")
        const two = await request(app).post("/makeMove/7")
        const three = await request(app).post("/makeMove/9")
        const res = await request(app).post("/getBoard")
        expect(res.body).toEqual({ "GameBoard": [1, 2, 3, 4, "X", 6, "O", 8, "X"]});
    });
});