const mongoose = require('mongoose');

const {Schema} = mongoose; 
const userSchema  = new Schema({


    email : {
        type:String, 
        unique:true, 
        required : true, //꼭 입력해야 한다. (not null true)
    },

    nick : {
        type:String, 
        required : false, 
    },
    password:{
        type:String, 
        required : true,
    },
    provider: {
        type:String,
        required:false,
        default:'local', 
    },
    snsId:{
        type:String,
        required:false,
    },
    partCode:{
        type:String, 
        required : true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },

    




});  


module.exports = mongoose.model('UserList', userSchema);