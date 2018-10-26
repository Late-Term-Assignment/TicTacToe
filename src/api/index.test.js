const request = require("supertest");
const app = require("../app");

describe("GET /ticTacToe", () => {
    it("should return 200 status code", async () => {
      const res = await request(app).get("/newGame");
      expect(res.status).toBe(200);
    });
});