var request = require('supertest');
var EventProxy = require('eventproxy');
var ready = require('ready');
var Post = require('../../proxy').Post;
var app = require('../../app');


var key = Date.now();

var ep = new EventProxy();

ep.all('post', function (post, agent) {
  exports.post = post;
});

Post.create('title' + key, 'content' + key, function (err, post) {
  post._id = String(post._id);
  ep.emit('post', post);
});

