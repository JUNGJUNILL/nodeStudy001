var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
 
/* GET */
router.get('/', function(req, res, next) {
    var id = req.query.id;
    var age = req.query.age;
    console.log("## get request");
    res.render('result_page', { title: 'Express', id: id, age: age, method: "get" });
});
 
/* POST */
router.post('/post', function(req, res, next) {
    var id = req.body.id;
    var age = req.body.age;
    console.log("## post request"); 
    res.render('result_page', { title: 'Express', id: id, age: age, method: "post" });
});
 
module.exports = router;
