var config = require('../config');
var Post = require('../proxy').Post;
var markdown = require('markdown').markdown;
var EventProxy = require('eventproxy');

exports.index = function (req, res) {
  Post.getPosts(10, function (err, posts) {
    res.render('index', {config : config, posts : posts || []});
  });
};

/*
 * 新建页面
 */
exports.new = function (req, res) {
  res.render('edit', { type : 'new' });
};

/**
 * 创建博客
 */
exports.create = function (req, res) {
  Post.create(req.body.title, req.body.content, function (err, post) {
    post.content = markdown.toHTML(post.content);
    res.render('post', { post : post });
  });
};


/**
 * 展示博客
 */
exports.show = function (req, res) {
  Post.getPostById(req.params.id, function (err, post) {
    post.content = markdown.toHTML(post.content);
    res.render('post', { post : post });
  });
};

/**
 * 编辑页面
 */
exports.showEdit = function (req, res) {
  var ep = EventProxy.create('post', function (post) {
    res.render('edit', { type : 'edit/' + post._id,
      post : post});
  });

  Post.getPostById(req.params.id, function (err, post) {
    ep.emit('post', post);
  });
};

/**
 * 保存编辑
 */
exports.edit = function (req, res) {
  var ep = EventProxy.create('post', function (post) {
    res.render('post', {post: post});
  });
  Post.getPostById(req.params.id, function (err, post) {
    post.title = req.body.title;
    post.content = req.body.content;
    post.save(function (err, post) {
      ep.emit('post', post);
    });
  });
};
