// src/api.test.js
const request = require("supertest")
const api = require("./api")

describe("GET /api/gameBoardStatus", () => {
	it("should return a board initialized with nulls", async () => {
		const res = await request(api).get("/ticTacToe/gameBoardStatus");
		expect(res.status).toBe(200);
		expect(res.body).toEqual({"gameBoardStatus": [1, 2, 3, 4, 5, 6, 7, 8, 9]})
	});
});

describe("GET /api/currentPlayerStatus", () => {
	it("should return current player with X", async () => {
		const res = await request(api).get("/ticTacToe/currentPlayerStatus");
		expect(res.status).toBe(200);
		expect(res.body).toEqual({"currentPlayerStatus": "X"})
	});
});

describe("GET /api/currentPlayerStatusChanged", () => {
	it("should return current player with O, returning to default", async () => {
		const api1 = require("./api")
		const res = await request(api1).get("/ticTacToe/currentPlayerStatusChanged");
		expect(res.status).toBe(200);
		expect(res.body).toEqual({"currentPlayerStatusChanged": "O"})
	});
});

describe("GET /api/moveMade", () => {
	it("should return board with index 3 marked as O", async () => {
		const api2 = require("./api")
		const res = await request(api2).get("/ticTacToe/moveMade");
		expect(res.status).toBe(200);
		expect(res.body).toEqual({"moveMade": [1, 2, "O", 4, 5, 6, 7, 8, 9]})
	});
});