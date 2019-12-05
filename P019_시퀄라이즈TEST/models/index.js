
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


db.Dept.hasMany(db.Emp,{foreignKey:{name:'DEPTNO',allowNull:true}});     //1(User) : M 구조 
db.Emp.belongsTo(db.Dept,{foreignKey:{name:'DEPTNO',allowNull:true}}); //M(Auction) : 1 구조 
//외래캐 설정.. 


module.exports = db;