var request = require('supertest');
var qs = require('querystring');
var should = require('should');
var app = require('../../app');
var config = require('../../config');
var support = require('../support');

describe('test/controllers/user.test.js', function () {
  it('GET /login should return 200 with form', function (done) {
    request(app).get('/login')
    .end(function (err, res) {
      res.status.should.be.equal(200);
      res.text.should.be.containEql('form');
      done();
    });
  });

  it('POST /login should return 200', function (done) {
    request(app).post('/login')
    .send('user=test&pwd=test')
    .end(function (err, res) {
      res.status.should.be.equal(302);
      done();
    });
  });

  it('GET /logout should return 302', function (done) {
    support.agent.get('/logout')
    .end(function (err, res) {
      res.status.should.be.equal(302);
      done();
    });
  });
});
