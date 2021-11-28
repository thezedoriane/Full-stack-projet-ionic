var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorySchema = new Schema({
    name : String,
    description : String,
    shopId : {type:mongoose.Schema.Types.ObjectId,ref:"Shop"},
    done : {
      type : Boolean,
      default : false
    },
    createdAt : {
      type : Date,
      default : Date.now
    },
  });

  module.exports = mongoose.model('Category', CategorySchema);
