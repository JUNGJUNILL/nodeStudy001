const path = require('path');
const Sequelize = require('sequelize');

//const env = process.env.NODE_ENV || 'development';
//const config = require(__dirname + '/../config/config.json')[env];
const db = {};


//const sequelize = new Sequelize(config.database, config.username, config.password, config); 
const sequelize = new Sequelize('test123', 'sa', 'hubmeka', {
  port : '1433',
  host : '127.0.0.1',
  dialect:'mssql',
   dialectOptions : {
    "instanceName" :  "test123"
   } 
  
}); 


db.sequelize = sequelize;
db.Sequelize = Sequelize;


/*
db.Dept = require('./users')(sequelize,Sequelize); 
db.Emp   = require('./emp')(sequelize,Sequelize); 
*/
//db.Dept.hasMany(db.Emp,{foreignKey:'deptno',sourceKey:'deptno'});
//db.Emp.belongsTo(db.Dept,{foreignKey:'deptno',targetKey:'deptno'});


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


module.exports = db;

