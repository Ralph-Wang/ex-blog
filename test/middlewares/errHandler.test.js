var should = require('should');
var app = require('../../app');
var request = require('supertest');


describe('test/middlewares/errHandler.test.js', function () {
  it('/nosuchpage should return 404', function (done) {
    request(app).get('/nosuchpage')
    .end(function (err, res) {
      res.status.should.be.equal(404);
      res.text.should.be.containEql('no such page');
      done();
    });
  });

  it('/err should return 500', function (done) {
    request(app).get('/err')
    .end(function (err, res) {
      res.status.should.be.equal(500);
      res.text.should.be.containEql('boo boo');
      done();
    });
  });
});
