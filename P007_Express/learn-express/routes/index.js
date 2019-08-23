var express = require('express');
var router = express.Router();
//01)
//라우터 객체 생성 후.. 

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.locals.title='HELLOWORLD'; 
  //res.locals 객체를 읽어서 변수를 집어 넣습니다. 
  //이 방식의 장점은 현재 라우터 뿐만 아니라 템플릿에서도 사용가능하다.

  res.render('index'); 
});

module.exports = router;
//02)
//module.exports = router로 라우터 모듈을 만든다. 