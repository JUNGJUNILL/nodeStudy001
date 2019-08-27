var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan'); //로그 남기기 위한 모듈 
var session = require('express-session'); 
var flash  = require('connect-flash');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
console.log("path---->", path); //c:\git Repository\nodeStudy001\P007_Express\learn-express (현재 이 파일이 들어있는 root부터 폴더까지) 
app.set('views', path.join(__dirname, 'views'));  
//views 템플릿 파일들이 위치한 폴더를 지정하는 것이다. 
//res.render() 가 이 폴더 기준으로 템플릿 엔진을 찾아서 렌더링합니다. 
//res.render('index') : views/index.pug를 렌더링한다. 
//res.render('admin/main') : views/admin/main.pug를 덴더링한다. 

app.set('view engine', 'pug');
//app.set('view engine','ejs'); 

//어떤 템플릿 엔진을 사용할 것인지? 
//pug? , ejs? 

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



//cookieParser
app.use(cookieParser());
//요청에 동봉된 쿠키를 해석해줍니다. 
//해석된 쿠키들은 req.cookies 객체에 들어갑니다. 
//예를 들어 name=zerocho 쿠키를 보냈다면 req.cookies는 {name:'zerocho'} 가 됩니다. 

//app.use(cookieParser('secret code'));
//이와 같이 첫 번째 인자로 문자열을 넣어줄 수 있습니다. 
//이제 쿠키들은 제공한 문자열로 서명된 쿠키가 됩니다. 
//서명된 쿠키는 클라이언트에서 수정했을 때 에러가 발생하므로 클라이언트에서 쿠키로 위함한 행동을 하는 것을 방지할 수 있습니다. 


//express-session 
app.use(session({
    resave : false,
    //요청이 왔을 때 세션에 수정 사항이 생기지 않더라도 세션을 다시 저장할지에 대한 설정 

    saveUninitialized : false,
    //세션에 저장할 내역이 없더라도 세션을 저장할지에 대한 설정, 보통 방문자를 추적할 때 사용 

    secret : 'secret code',
    //필수항목으로 cookie-parser의 비밀키와 같은 역할을 합니다. 

    cookie : {
      httpOnly : true,
      secure : false, 
    },

}));
/*
express-session 1.5버전 이전에는 내부적으로 cooike-parser를 사용하고 있어서 cookie-parser 미들웨어보다 뒤에 
위치해야 해지만, 1.5 버전 이후부터는 사용하지 않게 되어 순서가 상관없습니다. 그래도 현재 어떤 버전을 사용하고 있는지
모른다면, cookie-parser 미들웨어 뒤에 놓는 것이 안전합니다. 

express-session은 세션 관리 시 클라이언트에 쿠키를 보냅니다. 이를 세션 쿠키라고 부릅니다. 안전하게 쿠키를 전송하려면 
쿠키에 서명을 추가해야 하고, 쿠키를 서명하는 데 secret의 값이 필요합니다. cookie-parser의 sercret과 같게 설정해야 합니다. 
*/


//connect-flash 
app.use(flash()); 
/*
connect-flash 미들웨어는 cookie-parser와 express-session을 사용하므로 이들보다는 뒤에 위치해야 한다. 

*/

app.use('/index', indexRouter);
app.use('/users', usersRouter);
//라우팅 미들웨어는 첫 번째 인자로 주소를 받아서 특정 주소에 해당하는 
//요청이 왔을 때만 미들웨어가 동작할 수도 있다. 


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
