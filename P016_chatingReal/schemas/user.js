const monggoose =require('mongoose'); 


const {Schema} = monggoose; 
const userSchema  = new Schema({


    userName : {
        type:String, 
        unique:true, 
        required : true, //꼭 입력해야 한다. 
    },
    nickName : {type : String, trim: true, },
    password : {type: String,},
    partCode : {type: String,},
    remark01 : {type: String,},
    remark02 : {type: String,},


});  


module.exports = mongoose.model('UserList', userSchema);