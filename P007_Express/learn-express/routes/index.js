var express = require('express');
var router = express.Router();
//01)
//라우터 객체 생성 후.. 

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.locals.title='HELLOWORLD'; 
  //res.locals 객체를 읽어서 변수를 집어 넣습니다. 
  //이 방식의 장점은 현재 라우터 뿐만 아니라 템플릿에서도 사용가능하다.

  res.render('index'); 
  //res.render 메서드로 클라이언트에 응답을 보냅니다. 
  //익스프레스가 응답 객체에 새로 추가한 메서드입니다. 
  //이 메서드는 템플릿 엔진을 사용하는 부분입니다. 

});
*/

router.get('/',function(req,res,next){
  next('route'); 
},function(req,res,next){
  console.log('실행되지 않습니다01.')
  next(); 
},function(req,res,next){
  console.log('실행되지 않습니다02.')
  next(); 
}); 


router.get('/', function(req, res) {
  console.log('실행됩니다.')
  res.render('index', { title: 'Express' });


});


module.exports = router;
//02)
//module.exports = router로 라우터 모듈을 만든다. 