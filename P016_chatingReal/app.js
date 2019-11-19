const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const ColorHash = require('color-hash');
const passport  =require('passport');
 
require('dotenv').config();

const webSocket = require('./socket');
const indexRouter = require('./routes');
const authRouter = require('./routes/auth');
const pageRouter = require('./routes/page');
const connect = require('./schemas'); //index.js require 하는 것임 
const passportConfig = require('./passport'); 

const app = express();
connect();
passportConfig(passport); 


const sessionMiddleware = session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
});
// Socket.IO에서 세션에 접근하기 위한 작업 



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('port', process.env.PORT || 8005);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(sessionMiddleware);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {

    if(req.isAuthenticated()){
        req.session.color = req.user; 
    }else{
        req.session.color={email:'',nick:''};  
    }
next(); 
});

app.use('/', indexRouter);
app.use('/auth',authRouter);
app.use('/page',pageRouter);  

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

const server = app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});

webSocket(server, app, sessionMiddleware);