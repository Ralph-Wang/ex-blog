var Post = require('../../proxy').Post;

var key = Date.now();

Post.create('title' + key, 'content' + key, function (err, post) {
  post._id = String(post._id);
  exports.post = post;
});
