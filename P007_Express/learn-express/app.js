var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan'); //로그 남기기 위한 모듈 
var session = require('express-session'); 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
console.log("path---->", path); 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use((req,res,next)=>{

    console.log(req.url, '  저도 미들웨어입니다.'); 
   next(); 
});

app.use(logger('dev')); //logger(???) : 파라메터 값 마다 저장되는 로그형식이 다르다.

//-------------------------------------------------------------
//static 미들웨어 
console.log('__dirname-->', __dirname); 
app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname, 'public')); 
//app.use(express.static(__dirname+'/public')); 로도 사용 가능하다. 
//__가 붙은 변수들은 항상 뭔가 특별한 변수들이다... 
//__dirname : node에서 제공하는 node 파일의 경로를 담고 있는 변수이다. 

//static 미들웨어는 정적인 파일들을 제공합니다. 우리 jsx.js, action.js 같은거 관리 및 배포 

//static 미들웨어는 요청에 부합하는 정적 파일을 발견한 경우 응답으로 해당 파일을 전송합니다. 
//이 경우 응답을 보냈으므로 다음에 나오는 라우터를 실행되지 않습니다. 
//만약 파일을 찾지 못했다면 요청을 라우터로 넘깁니다. 

//이렇게 자체적으로 정적 파일 라우터 기능을 수행하므로 최대한 위쪽에 배치하는 것이 좋습니다. 
//그래야 서버가 쓸데없는 미들웨어 작업을 하는 것을 막을 수 있습니다. 


//-------------------------------------------------------------



//-------------------------------------------------------------
//body-parser 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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

//-------------------------------------------------------------




app.use(cookieParser());
//요청에 동봉된 쿠키를 해석해줍니다. 
//해석된 쿠키들은 req.cookies 객체에 들어갑니다. 
//예를 들어 name=zerocho 쿠키를 보냈다면 req.cookies는 {name:'zerocho'} 가 됩니다. 

//app.use(cookieParser('secret code'));
//이와 같이 첫 번째 인자로 문자열을 넣어줄 수 있습니다. 
//이제 쿠키들은 제공한 문자열로 서명된 쿠키가 됩니다. 
//서명된 쿠키는 클라이언트에서 수정했을 때 에러가 발생하므로 클라이언트에서 쿠키로 위함한 행동을 하는 것을 방지할 수 있습니다. 


app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
