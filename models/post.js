var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title : { type : String, trim : true }, 
  content : { type : String, trim : true },
  
  create_at : { type : Date, default: Date.now },
  update_at : { type : Date, default: Date.now }
});

PostSchema.virtual('is_updated').get(function () {
  // 就算新建也可能产生 1 ms 的差值 T_T
  return this.update_at.getTime() - this.create_at.getTime() > 100;
});

PostSchema.index({ create_at : -1 });
PostSchema.index({ update_at : -1 });



mongoose.model('Post', PostSchema);
