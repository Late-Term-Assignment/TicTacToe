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