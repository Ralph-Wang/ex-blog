var Post = require('../models').Post;


/**
 * 获取一定数量博客
 * Callback:
 * - err, 数据库错误
 * - posts, 博客列表
 */
exports.getPosts = function(limit, callback) {
  var query = Post.find();
  query.sort({ update_at : -1 });
  query.limit(limit);
  query.exec(callback);
};

/**
 * 根据 ID 查询博客
 * Callback:
 * - err, 数据库错误
 * - post, 博客
 */
exports.getPostById = function (id, callback) {
  var query = Post.findOne({ _id : id });
  query.exec(callback);
};

/**
 * 创建新博客
 * Callback:
 * - err, 数据库错误
 * - post, 博客
 */
exports.create = function (title, content, callback) {
  var post = new Post();
  post.title = title;
  post.content = content;
  post.save(callback);
};
