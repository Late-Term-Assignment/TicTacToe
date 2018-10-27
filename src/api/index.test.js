const request = require("supertest");
const app = require("../app");

// Get new game board
describe("GET /newGame", () => {
    it("should return the game board in its initial state", async () => {
        const res = await request(app).get("/newGame");
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ "TicTacToe": {
                                        "GameBoard": [1, 2, 3, 4, 5, 6, 7, 8, 9],
                                        "GameStatus": 0,
                                        "XWins": 0,
                                        "OWins": 0,
                                        "Draws": 0,
                                        "Turn": "X"
                                        }
                                    });
    });
});

// Make a single move
describe("GET /makeMove/5", () => {
    it("should be able to make a move", async () => {
        await request(app).get("/resetGame");
        const res = await request(app).get("/makeMove/5");
        expect(res.body).toEqual({ "TicTacToe": {
                                        "GameBoard": [1, 2, 3, 4, "X", 6, 7, 8, 9],
                                        "GameStatus": 0,
                                        "XWins": 0,
                                        "OWins": 0,
                                        "Draws": 0,
                                        "Turn": "O"
                                        }
                                    });
    });
});

// Make multiple moves
describe("GET /makeMove/{5, 7, 9}", () => {
    it("should make multiple moves", async () => {
        await request(app).get("/resetGame");
        await request(app).get("/makeMove/5");
        await request(app).get("/makeMove/7");
        const res = await request(app).get("/makeMove/9");
        expect(res.body).toEqual({ "TicTacToe": {
                                        "GameBoard": [1, 2, 3, 4, "X", 6, "O", 8, "X"],
                                        "GameStatus": 0,
                                        "XWins": 0,
                                        "OWins": 0,
                                        "Draws": 0,
                                        "Turn": "O"
                                    }
                                });
    });
});

// X wins the game
describe("GET /makeMove/{1, 2, 4, 5, 7}", () => {
    it("X should win the game", async () => {
        await request(app).get("/resetGame");
        await request(app).get("/makeMove/1");
        await request(app).get("/makeMove/2");
        await request(app).get("/makeMove/4");
        await request(app).get("/makeMove/5");
        const res = await request(app).get("/makeMove/7");
        expect(res.body).toEqual({ "TicTacToe": {
                                        "GameBoard": ["X", "O", 3, "X", "O", 6, "X", 8, 9],
                                        "GameStatus": 1,
                                        "XWins": 1,
                                        "OWins": 0,
                                        "Draws": 0,
                                        "Turn": "O"
                                    }
                                });
    });
});

// O wins the game
describe("GET /makeMove/{5, 1, 4, 2, 7, 3}", () => {
    it("O should win the game", async () => {
        await request(app).get("/resetGame");
        await request(app).get("/makeMove/5");
        await request(app).get("/makeMove/1");
        await request(app).get("/makeMove/4");
        await request(app).get("/makeMove/2");
        await request(app).get("/makeMove/7");
        const res = await request(app).get("/makeMove/3");
        expect(res.body).toEqual({ "TicTacToe": {
                                        "GameBoard": ["O", "O", "O", "X", "X", 6, "X", 8, 9],
                                        "GameStatus": 2,
                                        "XWins": 0,
                                        "OWins": 1,
                                        "Draws": 0,
                                        "Turn": "X"
                                    }
                                });
    });
});

// check if there is a tie
describe("GET /makeMove/{1, 5, 2, 3, 7, 4, 6, 9, 8}", () => {
    it("should end in a draw", async () => {
        await request(app).get("/resetGame");
        await request(app).get("/makeMove/1");
        await request(app).get("/makeMove/5");
        await request(app).get("/makeMove/2");
        await request(app).get("/makeMove/3");
        await request(app).get("/makeMove/7");
        await request(app).get("/makeMove/4");
        await request(app).get("/makeMove/6");
        await request(app).get("/makeMove/9");
        const res = await request(app).get("/makeMove/8");
        expect(res.body).toEqual({ "TicTacToe": {
                                        "GameBoard": ["X", "X", "O", "O", "O", "X", "X", "X", "O"],
                                        "GameStatus": 3,
                                        "XWins": 0,
                                        "OWins": 0,
                                        "Draws": 1,
                                        "Turn": "O"
                                    }
                                });
    });
});

// Check what happens when trying to insert onto a n already occupied slot
describe("GET /makeMove/{1, 1, 2}", () => {
    it("should place X in the first spot and O in the second", async () => {
        await request(app).get("/resetGame");
        await request(app).get("/makeMove/1");
        await request(app).get("/makeMove/1");
        const res = await request(app).get("/makeMove/2");
        expect(res.body).toEqual({ "TicTacToe": {
                                        "GameBoard": ["X", "O", 3, 4, 5, 6, 7, 8, 9],
                                        "GameStatus": 0,
                                        "XWins": 0,
                                        "OWins": 0,
                                        "Draws": 0,
                                        "Turn": "X"
                                    }
                                });
    });
});

// Create a new session and check if it is empty
describe("POST /resetGame", () => {
    it("should play with the game board then create a new session", async () => {
        await request(app).get("/newGame");
        await request(app).get("/makeMove/1");
        await request(app).get("/makeMove/1");
        await request(app).get("/makeMove/2");
        await request(app).get("/resetGame");
        const res = await request(app).get("/getBoard");
        expect(res.body).toEqual({ "TicTacToe": {
                                        "GameBoard": [1, 2, 3, 4, 5, 6, 7, 8, 9],
                                        "GameStatus": 0,
                                        "XWins": 0,
                                        "OWins": 0,
                                        "Draws": 0,
                                        "Turn": "X"
                                    }
                                });
    });
});