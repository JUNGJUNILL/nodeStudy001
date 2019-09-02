
const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username,config.password,config); 

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('아니 도대체 왜 안되는건데?', err);
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
