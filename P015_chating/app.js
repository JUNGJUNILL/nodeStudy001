const express = require('express');
const indexRouter = require('./routes'); 
const app = express(); 
const webSocket = require('./socket');


app.use('/',indexRouter);


const server = app.listen(8007,()=>{
  console.log('listening 8006 Port'); 
})

webSocket(server); 