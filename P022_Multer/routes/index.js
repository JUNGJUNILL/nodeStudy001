var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('post_page',{title:'Express'});
  res.render('file',{title:'Express'});
});


router.get('/hello', function(req, res, next) {
  //res.render('post_page',{title:'Express'});
  console.log('??'); 

});
module.exports = router;