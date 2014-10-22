var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/test', function (err) {
  if (err) {
    console.log('oops, mongodb connect err: ' + err. message);
  }
});


require('./post');


exports.Post = mongoose.model('Post');
