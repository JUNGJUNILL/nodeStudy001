'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
/*


create table birdusers(

	userid varchar(20) primary key,
	email  varchar(40) not null, 
	nick   varchar(15) not null , 
	passwords varchar(100) not null,
	provider  varchar(10) not null check(provider='local'),
	snsId    varchar(30) not null ,
	remark01 varchar(100), 
	remark02 varchar(100) 

)


create table posts(
	userid varchar(20) not null, 
	seq    int Identity(1,1) NOT NULL, 
	primary key clustered(
	userid, seq 
	), 
	img  varchar(200)

)

create table hashtags(
	userid varchar(20) not null, 
	seq    int  NOT NULL, 
	primary key clustered(
	userid, seq 
	), 
	title varchar(15) not null 

	
	

)


*/