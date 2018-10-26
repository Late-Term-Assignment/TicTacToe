const request = require("supertest");
const app = require("../app");



describe("GET /newGame", () => {
    it("should return the game board in its initial state", async () => {
        const res = await request(app).get("/newGame");
        expect(res.status).toBe(200);
    });
});

describe("POST /makeMove/5", () => {
    it("should be able to make a move", async () => {
        const one = await request(app).post("/makeMove/9")
        const two= await request(app).post("/makeMove/7")
        const three= await request(app).post("/makeMove/1")
        const four= await request(app).post("/makeMove/2")
        const resss = await request(app).post("/getBoard")
        expect(resss.body).toEqual({ "GameBoard": ["X", "O", 3, 4, 5, 6, "O", 8, "X"]});
    });
})
