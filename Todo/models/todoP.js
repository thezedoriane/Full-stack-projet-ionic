var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name : String,
  description : String,
  price : Number,
  categoryId : {type:mongoose.Schema.Types.ObjectId,ref:"Category"},
  done : {
    type : Boolean,
    default : false
  },
  createdAt : {
    type : Date,
    default : Date.now
  },
});

module.exports = mongoose.model('Product', ProductSchema);