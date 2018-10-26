const request = require("supertest");
const app = require("../app");

// describe('POST /newGame', function() {
//     it('should return 200 status code', function(done) {
//         request(app)
//             .post('/newGame')
//             .expect(200)
//             .end(function(err, res) {
//             if (err) return done(err);
//             done();
//         });
//     });
// });


describe("GET /newGame", () => {
    it("should return the game board in its initial state", async () => {
        const res = await request(app).get("/newGame");
        expect(res.status).toBe(200);
    });
});

// describe("GET /getBoard", () => {
//     it("should check if /getBoard is up and running", async () => {
//         const res = await request(app).get("http://localhost:3000/getBoard");
//         expect(res.status).toBe(200);
//     });
// });

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

// describe("POST /makeMove/{move}", () => {
//     it("should make a single move and return the new game board", async () => {
//         const status = await request(app).post("/makeMove/5");
//         const res = await request(app).get("/getBoard");
//         expect(status.status).toBe(200);
//         expect(res.body).toBe({ "GameBoard": ["1", "2", "3", "4", "X", "6", "7", "8", "9"] });
//     });
// });