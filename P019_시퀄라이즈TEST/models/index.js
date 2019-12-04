
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};


const sequelize = new Sequelize(
    config.database, config.username,config.password,config, { operatorsAliases:false });

db.sequelize = sequelize; 
db.Sequelize = Sequelize;



db.Emp =require('./emp')(sequelize,Sequelize); 
db.Dept =require('./dept')(sequelize,Sequelize); 


//db.Dept.belongsTo(db.Emp,{as:'DEPTNO'}); 

//db.Dept.hasMany(db.Emp);    
//db.Emp.belongsTo(db.Dept);



module.exports = db;