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
		console.log(res.body)
		expect(res.body).toEqual({"name": [1, 2, 3, 4, 5, 6, 7, 8, 9]})
	});
});