
var express = require('express');
var config = require('./config');
var Post = require('./proxy').Post;

var router = express.Router();

router.get('/', function (req, res) {
  Post.getPosts(10, function (err, posts) {
    res.render('index', {config : config, posts : posts || []});
  });
});

router.get('/post/new', function (req, res) {
  res.render('new', {config :config});
});

router.post('/post/new', function (req, res) {
  Post.create(req.body.title, req.body.content, function (err, post) {
    res.render('post', { post : post });
  });
});

router.get('/post/:id', function (req, res) {
  Post.getPostById(req.params.id, function (err, post) {
    res.render('post', { post : post });
  });
});



module.exports = router;
