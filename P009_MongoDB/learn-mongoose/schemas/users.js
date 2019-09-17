const mongoose = require('mongoose');

const {Schemas} = mongoose; 

const userSchemas = new Schemas({

  name : {

    type: String, 
    required: true, //not null 
    unique: true,   //primaryKey

  },
  age: {
    type:Number,
    required: true, 

  },
  married: {
    type:Boolean,
    required: true,
  
  },
  
  comment:String,

  createdAt:{
    type:Date,
    default: Date.now,
  },

});

module.exports = mongoose.model('User',userSchemas); 
//몽구스의 model 메서드로 스키마와 몽고디비 컬렉션을 연결하는 모델을 만든다. 