var should = require('should');
var Post = require('../../proxy').Post;

describe('test/proxy/post.test.js # post proxy', function () {
  var global_id = '';
  var global_title = 'title' + Date.now();
  var global_content = 'content' + Date.now();
  it('create should return post in callback', function (done) {
    Post.create(global_title, global_content, function (err, post) {
      post.should.have.property('id');
      global_id = String(post._id);
      post.title.should.be.equal(global_title);
      post.content.should.be.equal(global_content);
      post.is_updated.should.be.false;
      done(err);
    });
  });
  it('getPosts should return post in callback', function (done) {
    Post.getPosts(1, function(err, posts) {
      posts.should.be.Array;
      posts.length.should.be.equal(1);
      done(err);
    });
  });
  it('getPostById should return post in callback', function (done) {
    Post.getPostById(global_id, function (err, post) {
      String(post._id).should.be.equal(global_id);
      post.title.should.be.equal(global_title);
      post.content.should.be.equal(global_content);
      done(err);
    });
  });
});
