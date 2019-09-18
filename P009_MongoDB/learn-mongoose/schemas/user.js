const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
  name: {
    type: String,
    required: true, //not null 
    unique: true,   //primarykey? 
  },
  age: {
    type: Number,
    required: true,
  },
  married: {
    type: Boolean,
    required: true,
  },
  comment: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', userSchema);