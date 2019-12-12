const express = require('express');
const path = require('path'); 
const morgan = require('morgan'); 
const cookieParser = require('cookie-parser'); 
const session =require('express-session'); 
const flash= require('connect-flash'); 
require('dotenv').config(); 

const index = require('./routes'); 
const connect = require('./schemas'); 

const app = express(); 
connect(); 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('port',process.env.PORT|| 8015); 

app.use(morgan('dev')); //morgan(???) : 파라메터 값 마다 저장되는 로그형식이 다르다.
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
                              //false 인 경우 
                              //노드의 querystring 모듈을 사용하여 쿼리스트링을 해석하고, 
                              //true면 qs 모듈을 사용하여 쿼리스트링을 해석한다. 
                              //qs 모듈은 내장 모듈이 아니라 npm 패키지이며, querystring 모듈의 기능을 조금 더 확장한 모듈이다. 

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
}));
app.use(flash());
app.use('/', index);


app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
  });

  app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중');
  });