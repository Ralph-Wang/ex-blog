var should = require('should');
var request = require('supertest');
var qs = require('querystring');
var eventproxy = require('eventproxy');
var support = require('../support');
var app = require('../../app');

describe('test/controllers/post.test.js', function () {
  
    it('GET /post/:id should return with post', function (done) {
      request(app).get('/post/' + support.post._id)
      .end(function (err ,res){
        res.status.should.be.equal(200);
        res.text.should.containEql(support.post.title);
        res.text.should.containEql(support.post.content);
        done();
      });
    });


    it('GET /post/new should return with form', function (done) {
      support.agent.get('/post/new')
      .end(function (err, res) {
        res.status.should.be.equal(200);
        res.text.should.be.containEql('<form');
        res.text.should.be.containEql('<input');
        res.text.should.be.containEql('</textarea>');
        res.text.should.be.containEql('</form>');
        done(err);
      });
    });

    it('POST /post/new should return with post', function (done) {
      var title = 'title' + Date.now();
      var content = 'content' + Date.now();
      support.agent.post('/post/new')
      .send('title=' + title + '&content=' + content)
      .end(function (err, res) {
        res.status.should.be.equal(200);
        res.text.should.containEql(title);
        res.text.should.containEql(content);
        done(err);
      });
    });


    it('GET /post/edit/:id should return with post', function (done) {
      support.agent.get('/post/edit/' + support.post._id)
      .end(function (err ,res){
        res.status.should.be.equal(200);
        res.text.should.containEql(support.post._id);
        res.text.should.containEql(support.post.title);
        res.text.should.containEql(support.post.content);
        done();
      });
    });

    it('Post /post/edit/:id should return 200', function (done) {
      var title = 'edit' + Date.now();
      var content = 'edit' + Date.now();
      support.agent.post('/post/edit/' + support.post._id)
      .send(qs.stringify({title: title, content: content}))
      .end(function(err, res) {
        res.status.should.be.equal(200);
        res.text.should.be.containEql(title);
        res.text.should.be.containEql(content);
        done();
      });
    });
});
