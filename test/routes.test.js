var should = require('should');
var request = require('supertest');
var app = require('../app');
var eventproxy = require('eventproxy');

describe('test/routes.test.js # index', function () {

  it('GET /post/new should return with form', function (done) {
    request(app).get('/post/new')
    .end(function (err, res) {
      res.status.should.be.equal(200);
      res.text.should.be.containEql('<form');
      res.text.should.be.containEql('<input');
      res.text.should.be.containEql('</textarea>');
      res.text.should.be.containEql('</form>');
      done();
    });
  });

  it('POST /post/new should return with post', function (done) {
    var title = 'title' + Date.now();
    var content = 'content' + Date.now();
    request(app).post('/post/new')
    .send('title=' + title + '&content=' + content)
    .end(function (err, res) {
      res.status.should.be.equal(200);
      res.text.should.containEql(title);
      res.text.should.containEql(content);
      done();
    });
  });

  it('GET /post/:id should return with post');
});
