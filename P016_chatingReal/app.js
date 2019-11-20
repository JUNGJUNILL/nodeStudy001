const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const ColorHash = require('color-hash');
const passport  =require('passport'); // --passport
 
require('dotenv').config();

const webSocket = require('./socket');
const indexRouter = require('./routes');
const authRouter = require('./routes/auth');
const pageRouter = require('./routes/page');
const connect = require('./schemas'); //index.js require 하는 것임 
const passportConfig = require('./passport');  // --passport

const app = express();
connect();
passportConfig(passport);  // --passport


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
app.use(passport.initialize()); // --passport , req에 passport 설정을 심는다. 
app.use(passport.session());    // --passport , req.session에 passport 정보를 저장
                                // req.session객체는 express-session 에서 생성하는 것이므로 passport 미들웨어는 
                                // express-session 미들웨어보다 뒤에 위치해야 한다.  
 app.use((req,res,next)=>{

    if(req.user){ //성공적으로 로그인하였고 
                  //앞으로 로직 부분에서 req.session.clientInfo로 
                  //user정보에 접근 할 수 있게 되었다. 
      req.session.clientInfo = req.user;
    }else{
      req.session.clientInfo = {email:'',nick:''};
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