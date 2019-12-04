var express = require('express');
var router = express.Router();
const {Emp,Dept} = require('../models'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/emp', async (req,seq,next)=>{

  console.log('emp'); 
  const empList =  await Emp.findAll({
      where:{EMPNO:1001},

  });   
  empList.

  console.log('empList-->  ' , empList)

});


module.exports = router;
