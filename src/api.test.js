// src/api.test.js
const request = require("supertest")
const api = require("./api")

describe("GET /api/", () => {
	it("should return a 200 OK status code", async () => {
		const res = await request(api).get("/ticTacToe/");
		expect(res.status).toBe(200);
	});
	it("should return a board initialized with nulls", async () => {
		const res = await request(api).get("/ticTacToe/");
		expect(res.body).toEqual({"gameBoardStatus": [null, null, null, null, null, null, null, null, null]})
	});
});