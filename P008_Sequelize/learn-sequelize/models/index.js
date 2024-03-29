const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
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
db.Comment = require('./comment')(sequelize,Sequelize); 


db.User.hasMany(db.Comment,{foreignKey:'commenter',sourceKey:'id'});
db.Comment.belongsTo(db.User,{foreignKey:'commenter',targetKey:'id'})


module.exports = db;