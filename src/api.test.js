// src/api.test.js
const request = require("supertest")

describe("GET /ticTacToe/", () => {
	it("should return a 200 OK status code", async () => {
		const res = await request(ticTacToe).get("/ticTacToe/");
		expect(res.status).toBe(200);
	})
});