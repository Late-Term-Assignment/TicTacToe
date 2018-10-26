const request = require("supertest");
const app = require("../app");

describe("GET /newGame", () => {
    it("should return the game board in its initial state", async () => {
        const res = await request(app).get("/newGame");
        expect(res.status).toBe(200);
        expect(res.body.game.board).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});

describe("POST /makeMove/5", () => {
    it("should be able to make a move", async () => {
        const one = await request(app).post("/makeMove/5")
        const res = await request(app).post("/getBoard")
        expect(res.body).toEqual({ "GameBoard": [1, 2, 3, 4, "X", 6, 7, 8, 9]});
    });
})
