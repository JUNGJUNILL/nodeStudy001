const express = require('express'); 
const cookieParser = require('cookie-parser'); 
const morgan = require('morgan'); 
const path = require('path'); 
const session = require('express-session'); 
const flash = require('connect-flash'); 

const pageRouter = require('./routes/page'); 

const app= express(); 

app.set('views',path.join(__dirname,'views')); 
app.set('view engine','pug'); 
app.set('port',process.env.PORT || 8001); 

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'public'))); 
app.use(express.json());                           
app.use(express.urlencoded({extended:false})); 
app.use(cookieParser('nodebirdsecret')); 

app.use(session,{
    
})