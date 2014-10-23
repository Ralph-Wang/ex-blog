var should = require('should');
var request = require('supertest');
var app = require('../app');

describe('test/app.test.js # index', function () {
  it('/ should return with Welcome', function (done) {
    request(app).get('/')
    .end(function (err, res) {
      res.status.should.be.exactly(200);
      res.text.should.containEql('Welcome');
      done();
    });
  });
});
