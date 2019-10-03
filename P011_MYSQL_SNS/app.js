const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan'); 
const path = require('path');
const session = require('express-session'); 
const flash  = require('connect-flash');
const passport = require('passport'); 
//require('passport');는 require('passport/index.js');와 같습니다.
// index.js 파일은 require시 이름을 생략할 수 있습니다. 

require('dotenv').config(); 
//서버 시작 시 .env의 비밀키들을 process.env에 넣으므로 
//이후에 process.env.COOKIE_SECRET처럼 키를 사용할 수 있습니다. 

const pageRouter = require('./routes/page'); 
const authRouter = require('./routes/auth');
//onst postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const { sequelize } =require('./models');
const passportConfig = require('./passport');

const app = express(); 
sequelize.sync();
passportConfig(passport); 

app.set('views',path.join(__dirname,'views')); 
app.set('view engine', 'pug');
app.set('port',process.env.PORT||8001);

app.set(morgan('dev')); 
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(session({
    resave : false,
    //요청이 왔을 때 세션에 수정 사항이 생기지 않더라도 세션을 다시 저장할지에 대한 설정 

    saveUninitialized : false,
    //세션에 저장할 내역이 없더라도 세션을 저장할지에 대한 설정, 보통 방문자를 추적할 때 사용 

    secret : process.env.COOKIE_SECRET,
    //필수항목으로 cookie-parser의 비밀키와 같은 역할을 합니다. 

    cookie : {
      httpOnly : true,
      secure : false, 
    },

}));

app.use(flash());
app.use(passport.initialize()); 
app.use(passport.session());  
//initialize()미들웨어는 요청(req)에 passport 설정을 심고, (유저 정보겠지)
//session()미들웨어는 req.session 객체에 passport 정보를 저장한다. 
//req.session 객체는 express-session에서 생성하는 것이므로
//passport미들웨어는 express-session 미들웨어보다 뒤에 연결해 주어야 한다. 


app.use('/', pageRouter);
app.use('/auth', authRouter);
//app.use('/post', postRouter);
app.use('/user', userRouter);

app.use((req,res,next)=>{

    const err = new Error('NOT FOUNT'); 
    err.status=404; 
    next(err); 

})

//에러처리 미들웨어 
app.use((err,req,res)=>{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
})

app.listen(app.get('port'), ()=>{

    console.log(app.get('port'), '번 포트에서 대기 중 ' ); 

})