const request = require("supertest");
const app = require("../app");

// Get new game board
describe("GET /newGame", () => {
    it("should return the game board in its initial state", async () => {
        const res = await request(app).get("/newGame");
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ "TicTacToe": {
                                        "GameBoard": [1, 2, 3, 4, 5, 6, 7, 8, 9],
                                        "GameStatus": 0
                                        }
                                    });
    });
});

// Make a single move
describe("POST /makeMove/5", () => {
    it("should be able to make a move", async () => {
        await request(app).get("/newGame");
        const res = await request(app).post("/makeMove/5");
        expect(res.body).toEqual({ "TicTacToe": {
                                        "GameBoard": [1, 2, 3, 4, "X", 6, 7, 8, 9],
                                        "GameStatus": 0
                                        }
                                    });
    });
});

// Make multiple moves
describe("POST /makeMove/{5, 7, 9}", () => {
    it("should make multiple moves", async () => {
        await request(app).get("/newGame");
        await request(app).post("/makeMove/5");
        await request(app).post("/makeMove/7");
        const res = await request(app).post("/makeMove/9");
        expect(res.body).toEqual({ "TicTacToe": {
                                        "GameBoard": [1, 2, 3, 4, "X", 6, "O", 8, "X"],
                                        "GameStatus": 0
                                    }
                                });
    });
});

// X wins the game
describe("POST /makeMove/{1, 2, 4, 5, 7}", () => {
    it("X should win the game", async () => {
        await request(app).get("/newGame");
        await request(app).post("/makeMove/1");
        await request(app).post("/makeMove/2");
        await request(app).post("/makeMove/4");
        await request(app).post("/makeMove/5");
        const res = await request(app).post("/makeMove/7");
        expect(res.body).toEqual({ "TicTacToe": {
                                        "GameBoard": ["X", "O", 3, "X", "O", 6, "X", 8, 9],
                                        "GameStatus": 1
                                    }
                                });
    });
});

// O wins the game
describe("POST /makeMove/{5, 1, 4, 2, 7, 3}", () => {
    it("O should win the game", async () => {
        await request(app).get("/newGame");
        await request(app).post("/makeMove/5");
        await request(app).post("/makeMove/1");
        await request(app).post("/makeMove/4");
        await request(app).post("/makeMove/2");
        await request(app).post("/makeMove/7");
        const res = await request(app).post("/makeMove/3");
        expect(res.body).toEqual({ "TicTacToe": {
                                        "GameBoard": ["O", "O", "O", "X", "X", 6, "X", 8, 9],
                                        "GameStatus": 2
                                    }
                                });
    });
});

// check if there is a tie
describe("POST /makeMove/{1, 5, 2, 3, 7, 4, 6, 9, 8}", () => {
    it("should end in a draw", async () => {
        await request(app).get("/newGame");
        await request(app).post("/makeMove/1");
        await request(app).post("/makeMove/5");
        await request(app).post("/makeMove/2");
        await request(app).post("/makeMove/3");
        await request(app).post("/makeMove/7");
        await request(app).post("/makeMove/4");
        await request(app).post("/makeMove/6");
        await request(app).post("/makeMove/9");
        const res = await request(app).post("/makeMove/8");
        expect(res.body).toEqual({ "TicTacToe": {
                                        "GameBoard": ["X", "X", "O", "O", "O", "X", "X", "X", "O"],
                                        "GameStatus": 3
                                    }
                                });
    });
});

// Check what happens when trying to insert onto a n already occupied slot
describe("POST /makeMove/{1, 1, 2}", () => {
    it("should place X in the first spot and O in the second", async () => {
        await request(app).get("/newGame");
        await request(app).post("/makeMove/1");
        await request(app).post("/makeMove/1");
        const res = await request(app).post("/makeMove/2");
        expect(res.body).toEqual({ "TicTacToe": {
                                        "GameBoard": ["X", "O", 3, 4, 5, 6, 7, 8, 9],
                                        "GameStatus": 0
                                    }
                                });
    });
});

// Create a new session and check if it is empty
describe("GET /resetGame", () => {
    it("should play with the game board then create a new session", async () => {
        await request(app).get("/newGame");
        await request(app).post("/makeMove/1");
        await request(app).post("/makeMove/1");
        await request(app).post("/makeMove/2");
        await request(app).post("/resetGame");
        const res = await request(app).get("/getBoard");
        expect(res.body).toEqual({ "TicTacToe": {
                                        "GameBoard": [1, 2, 3, 4, 5, 6, 7, 8, 9],
                                        "GameStatus": 0
                                    }
                                });
    });
});