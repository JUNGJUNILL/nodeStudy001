const express = require('express');
const indexRouter = require('./routes'); 
const app = express(); 
const { sequelize } = require('./models');
sequelize.sync();

app.use('/',indexRouter);
app.set('view engine', 'jade');

const server = app.listen(8012,()=>{
  console.log('listening 8012 Port'); 
})
