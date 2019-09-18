var express = require('express');
var router = express.Router();

/* GET users listing. */

//router.get('/')이면 주소로 GET 요청을 하는 것과 같습니다.
//res.render() 메서드로 클라이언트에 응답을 보냅니다. 익스프레스가 응답 객체에 새로 추가한 메서드 입니다. 
//이 메서드는 템플릿 엔진을 사용하는 부분입니다.

//app.js에서 app.use('/',usersRouter)로 연결했기 때문에 
// /users와 / 이 합쳐져 /users/로 GET요청을 했을 때 이 라우터의 
//콜백 함수가 실행됩니다.  

//라우터를 사용할 필요없이 app.js에서 app.get('/',미들웨어), app.get('/users',미들웨어)를 해도
//기능은 동일합니다. 하지만 코드 관리를 위해 라우터를 별도로 분리하는 것입니다. 



router.get('/',function(req, res,next){
  next('route'); 
},function(req, res,next){
  console.log('실행안됨'); 
  next();
},function(req, res,next){
  console.log('실행안됨'); 
  next();
});


router.get('/', function(req, res) {


  res.render('users',{ title : 'Users'}); 
              //▲사용할 템플릿 명 
 
});




router.get('/flash',function(req,res){

    req.session.message = '세션 메시지'; 
    req.flash('message','flash 메시지');  //key - value
    res.redirect('/users/flash/result'); 

}); 

router.get('/flash/result',function(req,res){

    res.send(`${req.session.message} ${req.flash('message')}`); //flash('key')

}); 


module.exports = router;
