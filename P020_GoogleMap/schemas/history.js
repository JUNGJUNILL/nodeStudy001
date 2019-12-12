const moongoose = require('mongoose'); 

const {Schema} = moongoose; 
const historySchema = new Schema({

    query:{
        type:String,
        required:true,
    },

    createdAt:{
        type:Date,
        default:Date.now,
    },
})

module.exports = moongoose.model('History',historySchema); 