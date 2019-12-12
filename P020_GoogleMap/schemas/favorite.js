const mongoose = require('mongoose'); 

const {Schema} =mongoose; 

const favoriteSchema = new Schema({

    placeId:{
        type:String,
        unique:true,
        required:true, //not null 
    },

    name:{
        type:String,
        required:true,
    },

    location: { type: [Number], index: '2dsphere' },
    // location 필드는 좌표를 저장하는 필드로, 경도와 위도 정보가 배열로 들어갑니다. 
    // index가 '2dsphere로 되어 있는데, 위치 정보를 저장하겠다는 의미입니다. 


    createdAt:{
        type:Date,
        default:Date.now,
    },
});

module.exports = mongoose.model('Favorite',favoriteSchema); 