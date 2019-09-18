var express = require('express');
var User    = require('../schemas/user'); 

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  User.find({}) //find 메서드는 User 스키마를 require한 뒤 사용할 수 있다. 
                // 몽고디비의 db.users.find({})와 같다. 
  .then((users)=>{
  //몽구스도 기본적으로 Promise를 지원하므로 then과 catch를 사용해서 각각 조회 성공 시와 실패 시의 정보를 얻을 수 있다. 
  //이렇게 미리 데이터베이스에서 데이터를 조회한 후 템플릿 렌더링에 사용할 수 있다. 

      res.render('mongoose',{ users });

  })
  .catch((err)=>{
      console.error(err); 
      next(err); 
  });

});



module.exports = router;
