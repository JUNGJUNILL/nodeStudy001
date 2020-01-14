const express = require('express'); 
const cookieParser = require('cookie-parser'); 
const morgan = require('morgan'); 
const path = require('path'); 
const session = require('express-session'); 
const flash = require('connect-flash'); 
const passport = require('passport');   //passport 
require('dotenv').config(); 

const pageRouter = require('./routes/page'); 
const authRouter = require('./routes/auth'); 
const userRouter = require('./routes/user'); 
const { sequelize } =require('./models');      //models-> index.js import , sequelize
                                               //폴더 내의 index.js 파일은 require시 이름을 생략할 수 있다. 
const passportConfig = require('./passport');  //passport 
const post            = require('./routes/post'); 

const app= express(); 
sequelize.sync();          //sequelize
passportConfig(passport);  //passport 

app.set('views',path.join(__dirname,'views')); 
app.set('view engine','pug'); 
app.set('port',process.env.PORT || 8001); 
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,'public'))); 
app.use('/img',express.static(path.join(__dirname,'uploads'))); 

//----------------------------------------------------start body-parser
app.use(express.json());                           
app.use(express.urlencoded({extended:false})); 
                              //false 인 경우 
                              //노드의 querystring 모듈을 사용하여 쿼리스트링을 해석하고, 
                              //true면 qs 모듈을 사용하여 쿼리스트링을 해석한다. 
                              //qs 모듈은 내장 모듈이 아니라 npm 패키지이며, querystring 모듈의 기능을 조금 더 확장한 모듈이다. 

//요청의 본문을 해석해주는 미들웨어입니다. 보통 폼 데이터나 AJAX 요청의 데이터를 처리한다.
//하지만 express 4.16.0 버전부터 body-parser의 일부기능이 익스프레스에 내장되어 있어 
// require('body-parser'); 모듈을 설치 하지 않아도 된다.
/*
var bodyParser = require('body-parser'); 
...
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
*/

//----------------------------------------------------end body-parser
app.use(cookieParser(process.env.COOKIE_SECRET)); 
app.use(session({
    resave : false,
    //요청이 왔을 때 세션에 수정 사항이 생기지 않더라도 세션을 다시 저장할지에 대한 설정 
    //세션을 항상 저장할지 여부를 저장하는 값(false권장)

    saveUninitialized : false,
    //세션에 저장할 내역이 없더라도 세션을 저장할지에 대한 설정, 보통 방문자를 추적할 때 사용 

    secret : process.env.COOKIE_SECRET ,
    //필수항목으로 cookie-parser의 비밀키와 같은 역할을 합니다. 
    //세션을 암호화 해줌

    cookie : {
        
    //1000이 1초이다.
    //1000 * 60 * 60 1시간 후 ,1000 * 60 * 120 2시간 후, 1000 * 60 * 180 3시간후.. 
      maxAge   : 1000 * 60 * 60, //세션 만료시간 설정
      httpOnly : true,
      secure : false, 
    },

}));
app.use(flash()); 
app.use(passport.initialize()); //passport 
                                //req 객체에 passport설정을 심음

app.use(passport.session());    //passport 
                                //req.session 객체에 passport 정보를 저장 
                                //passport -> index.js -> deserializeUser호출함 
app.use('/',pageRouter); 
app.use('/auth',authRouter); 
app.use('/post',post); 
app.use('/user',userRouter); 
app.use((req,res,next)=>{
    const err = new Error('Not Fount'); 
    err.status = 404;
    next(err); 
}); 

//에러처리 미들웨어(는 가장 마지막으로 정의해야 한다.)
app.use((err,req,res)=>{
    console.log('err==>' , err); 
    res.locals.message = err.message;
    res.locals.error   = req.app.get('env') === 'development'? err:{}; 
    res.status(err.status || 500); 
    res.render('error copy'); 
}); 

app.listen(app.get('port'),()=>{
    console.log(app.get('port'), ' 번 포트에서 대기 중'); 
}); 
