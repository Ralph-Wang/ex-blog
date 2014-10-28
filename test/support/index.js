var request = require('supertest');
var EventProxy = require('eventproxy');
var ready = require('ready');
var Post = require('../../proxy').Post;
var app = require('../../app');


var key = Date.now();

var ep = new EventProxy();

ep.all('post', 'agent', function (post, agent) {
  exports.post = post;
  exports.agent = agent;
});

Post.create('title' + key, 'content' + key, function (err, post) {
  post._id = String(post._id);
  ep.emit('post', post);
});

// 准备一个有 session 的 agent
// 使用默认用户才能进行测试
var agent = request.agent(app);

agent.post('/login')
.send('user=test&pwd=test')
.end(function (err, res) {
  ep.emit('agent', agent);
});
