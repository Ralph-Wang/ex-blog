var config = require('../config');

exports.loginRequired = function (req, res, next) {
  if (!req.session || req.session.user !== config.author) {
    return res.redirect('/');
  }
  next();
};
