
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env]; 
const db ={}; 

const sequelize = new Sequelize(
  config.database,
  config.username, 
  config.password, 
  config, 
); 



db.sequelize = sequelize;
db.Sequelize = Sequelize;


db.User    = require('./user')(sequelize,Sequelize); 
db.Post    = require('./post')(sequelize,Sequelize); 
db.Hashtag = require('./hashtag')(sequelize,Sequelize); 

db.User.hasMany(db.Post);    // 1
db.Post.belongsTo(db.User);  // M

db.Post.belongsToMany(db.Hashtag,{through:'PostHashtag'}); // N
db.Hashtag.belongsToMany(db.Post,{through:'PostHashtag'}); // M
//N:M 관계에서 중간에 관계 테이블이 생성됩니다.
//시퀄라이즈가 관계를 분석하여 PostHashtag라는 이름으로 테이블을 자동 생성합니다.
//컬럼 이름은 postId와 hashTagId입니다. 




db.User.belongsToMany(db.User,{
  foreignKey:'followingId', //컬럼명
  as:'Followers',           //모델이름 
  through:'Follow', 
}); 

db.User.belongsToMany(db.User,{
  foreignKey:'followerId',  //컬럼명 
  as:'Followings',          //모델이름 
  through:'Follow',
}); 
//같은 테이블간 N:M 관계에서는 모델 이름과 컬럼 이름을 따로 정해주어야 합니다.
//as 옵션은 시퀄라이즈가 JOIN 작업 시 사용하는 이름입니다. 

module.exports = db;
