var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/file', function(req, res, next) {
  res.render('fileupload', { title: '파일 업로드' });
});


module.exports = router;
