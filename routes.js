
var express = require('express');
var post = require('./controllers/post');

var router = express.Router();

router.get('/', post.index);
router.get('/post/new', post.new);
router.post('/post/new', post.create);
router.get('/post/:id', post.show);
router.get('/post/edit/:id', post.showEdit);
router.post('/post/edit/:id', post.edit);

// support for err
router.get('/err', function (req, res) {
  throw new Error();
});

module.exports = router;
