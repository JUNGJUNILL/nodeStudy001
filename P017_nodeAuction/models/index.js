
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(
    config.database, config.username,config.password,config,);

db.sequelize = sequelize; 
db.Sequelize = Sequelize;
db.User      = require('./user')(sequelize,Sequelize); 
db.Good      = require('./good')(sequelize,Sequelize); 
db.Auction      = require('./auction')(sequelize,Sequelize); 


db.Good.belongsTo(db.User,{as:'owner'}); //actiongoods에 onwerId 라는 컬럼 추가됨 
db.Good.belongsTo(db.User,{as:'sold'});  //actiongoods에 soldId  라는 컬럼 추가됨 
/*
actiongoods ownerId <-> fk actionusers id 
actiongoods soldId  <-> fk actionusers  id 


*/


db.User.hasMany(db.Auction);     //1(User) : M 구조 
db.Auction.belongsTo(db.User);   //M(Auction) : 1 구조 

db.Good.hasMany(db.Auction);     //1(Good) : M 구조 
db.Auction.belongsTo(db.Good);   //M(Auction) : 1 구조 

/*
auction -> actionuserId 
           actiongoodId   <-> fk actionusers id 
db.User.hasMany(db.Auction);     //1 : M 구조 
db.Auction.belongsTo(db.User);   // M : 1 구조 
  

auction -> id(pk)  <-> fk actiongoods  id 
db.Good.hasMany(db.Auction);     //1 : M 구조 
db.Auction.belongsTo(db.Good);   // M : 1 구조 
*/

module.exports = db;
