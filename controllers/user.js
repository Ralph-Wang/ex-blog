var utility = require('utility');
var config = require('../config');

/**
 * 登录页面
 */
exports.showLogin = function (req, res) {
  res.render('login', { err : '' });
};

/**
 * 登录
 */
exports.login = function (req, res) {
  var user_ok = (req.body.user === config.author);
  var md5_pwd = utility.md5(req.body.pwd);
  var pwd_ok = (md5_pwd === config.pwd);
  if (user_ok && pwd_ok) {
    req.session.user = config.author;
    return res.redirect('/');
  } else {
    return res.render('login', { err : '用户/密码不正确' });
  }
};



/**
 * 登出
 */
exports.logout = function (req, res) {
  req.session.destroy();
  res.redirect('/');
};
