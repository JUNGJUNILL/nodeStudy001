const mongoose = require('mongoose');

const {Schema} = mongoose; 

const {Types: {ObjectId} } = Schema; 

const commentSchemas = new Schema({

  commenter: {
    type:ObjectId, 
    required: true,
    ref:'User',
  },

  comment: {
    type:String, 
    required:true, 
  },

  createdAt: {
    type: Date, 
    default: Date.now, 
  },


}); 

module.exports  = mongoose.model('Comment',commentSchemas); 
