var express = require('express');
var router = express.Router();

/* GET users listing. */
//app.js에서 app.use('/',usersRouter)로 연결했기 때문에 
// /users와 / 이 합쳐져 /users/로 GET요청을 했을 때 이 라우터의 
//콜백 함수가 실행됩니다.  



router.get('/users/:id', function(req, res) {

  res.render('users'); 

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
