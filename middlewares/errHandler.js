exports.notFound = function (req, res) {
  res.status(404)
  .send('404, no such page yet');
};

exports.serverErr = function (err, req, res, next) {
  res.status(500)
  .send('500, I just make a boo boo');
};
