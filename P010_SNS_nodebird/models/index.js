const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};
const sequelize = new Sequelize(config.database,config.username,config.password,config); 

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



db.sequelize = sequelize;
db.Sequelize = Sequelize;


db.User = require('./user')(sequelize,Sequelize); 
db.Post = require('./post')(sequelize,Sequelize); 
db.Hashtag = require('./hashtag')(sequelize,Sequelize); 

db.User.hasMany(db.Post);  //1 : M 구조 
db.Post.belongsTo(db.User);  // M : 1 구조 


//belongsToMany n : m 관계 설정시 사용 
//테이블의 이름을 정하는 through 속성은 필수적이다.
db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });


db.User.belongsToMany(db.User,{

  foreignKey : 'followingId',
  as : 'Followers', 
  through : 'Follow', //'Follow' 이라는 이름으로 테이블 생성할겨, 

}); 

db.User.belongsToMany(db.User,{

  foreignKey : 'followingId',
  as : 'Followings', 
  through : 'Follow',

}); 

module.exports = db; 





