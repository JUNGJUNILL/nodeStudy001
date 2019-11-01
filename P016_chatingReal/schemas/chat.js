const mongoose = require('mongoose');
const {Schema} = mongoose;
const {Types:{ObjectId}} = Schema; 
const chatSchema = new Schema({

    room : {
        type:ObjectId, 
        required:true,
        ref:'Room', //room 필드는 Room 스키마와 연결하여 Room 컬렉션의 ObjectId가 들어가지게 됩니다. 
    },
    user: {
        type:String,
        required:true, 
    },

    chat:String,
    gif:String,  //GIF 이미지 주소
    createdAt: { //채팅 시간
        type:Date,
        default:Date.now,

    },
});


module.exports = mongoose.model('Chat',chatSchema); 
