const express = require('express');
const indexRouter = require('./routes'); 
const sse = require('./sse'); 
const app = express(); 


app.use('/',indexRouter);
app.set('view engine', 'jade');

const server = app.listen(8011,()=>{
  console.log('listening 8011 Port'); 
})

sse(server); 
