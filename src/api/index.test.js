const request = require("supertest");
const app = require("../app");

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