const request = require("supertest");
const app = require("../app");

const ticTacToe = require("../logic/ticTacToe");
const game = new ticTacToe();
const fetch = require('node-fetch');

/*
describe('POST /newGame', function() {
    it('should return 200 status code', function(done) {
        request(app)
            .post('/newGame')
            .expect(200)
            .end(function(err, res) {
            if (err) return done(err);
            done();
        });
    });
});

describe('GET /getBoard', function() {
    it('should return the current game board', function(done) {
        request(app)
            .get('/getBoard')
            .expect(200)
            .expect({"GameBoard": [1, 2, 3, 4, 5, 6, 7, 8, 9]})
            .end(function(err, res) {
            if (err) return done(err);
            done();
        });
    });
});
*/

describe("GET /getBoard", () => {
    it("should return the current game board", async () => {
        fetch('localhost:3000/getBoard', {method: 'POST', body: game})
        .then( res => expect(res.sjon()).toBe({ "GameBoard": [1, 2, 3, 4, 5, 6, 7, 8, 9] }));
    });
});

/*
describe("POST /makeMove/{move}", () => {
    it("should make a single move and return the new game board", async () => {
        const status = await request(app).post("/makeMove/5");
        const res = await request(app).get("/getBoard");
        expect(status.status).toBe(200);
        expect(res.body).toBe({ "GameBoard": ["1", "2", "3", "4", "X", "6", "7", "8", "9"] });
    });
});*/