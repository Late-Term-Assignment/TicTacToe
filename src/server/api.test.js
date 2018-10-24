// src/api.test.js
const request = require("supertest")
const api = require("./api")

describe("GET /api/gameBoardStatus", () => {
	it("should return a 200 OK status code", async () => {
		const res = await request(api).get("/ticTacToe/gameBoardStatus");
		expect(res.status).toBe(200);
	});
	it("should return a board initialized with nulls", async () => {
		const res = await request(api).get("/ticTacToe/gameBoardStatus");
		expect(res.body).toEqual({"gameBoardStatus": [1, 2, 3, 4, 5, 6, 7, 8, 9]})
	});
});

describe("GET /api/currentPlayerStatus", () => {
	it("should return a 200 OK status code", async () => {
		const res = await request(api).get("/ticTacToe/currentPlayerStatus");
		expect(res.status).toBe(200);
	});
	it("should return current player with X", async () => {
		const res = await request(api).get("/ticTacToe/currentPlayerStatus");
		expect(res.body).toEqual({"currentPlayerStatus": "X"})
	});
});