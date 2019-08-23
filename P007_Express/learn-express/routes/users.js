var express = require('express');
var router = express.Router();

/* GET users listing. */
// /users요청의 callback 함수 
router.get('/', function(req, res, next) {
  res.locals.userValue = 'respond with a resource userCallBack'; 
  res.render('users');


});


// router.get('/', function(req, res, next) {
//  console.log('실행됩니다.'); 
//  res.render('users' , {test : 'jun'}); //이 부분이 이해가 잘 안되고 저 test라는 변수를 view단에서 어떻게 사용 해야 할까? 
//  next('route');
// });


// router.get('/', function(req, res, next) {
//   res.locals.userValue = 'respond with a resource userCallBack'; 
//   res.render('users');
// });




router.get('/flash',function(req,res){

    req.session.message = '세션 메시지'; 
    req.flash('message','flash 메시지');  //key - value
    res.redirect('/users/flash/result'); 

}); 

router.get('/flash/result',function(req,res){

    res.send(`${req.session.message} ${req.flash('message')}`); //flash('key')

}); 


module.exports = router;
