
var express = require('express');
var post = require('./controllers/post');
var user = require('./controllers/user');
var auth = require('./middlewares').auth;

var router = express.Router();

router.get('/', post.index);
router.get('/post/new', auth.loginRequired, post.new);
router.post('/post/new', auth.loginRequired, post.create);
router.get('/post/:id', post.show);
router.get('/post/edit/:id', auth.loginRequired, post.showEdit);
router.post('/post/edit/:id', auth.loginRequired, post.edit);

router.get('/login', user.showLogin);
router.post('/login', user.login);
router.get('/logout', user.logout);

// support for err
router.get('/err', function (req, res) {
  throw new Error();
});

module.exports = router;
