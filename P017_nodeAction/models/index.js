
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


db.Good.belongsTo(db.User,{as:'owner'});
db.Good.belongsTo(db.User,{as:'sold'}); 



module.exports = db;
