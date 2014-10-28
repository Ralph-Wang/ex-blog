var mongoose = require('mongoose');
var config = require('../config');


mongoose.connect(config.db, function (err) {
  if (err) {
    console.log('oops, mongodb connect err: ' + err. message);
  }
});


require('./post');


exports.Post = mongoose.model('Post');
