var express = require('express');
var router = express.Router();
const {Emp,Dept} = require('../models'); 
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/emp', async (req,res,next)=>{

  console.log('emp'); 
 

  /*const empListAll = await Emp.findAll({
                                //findAll -> SELECT * 
    where:{



    },
    include:[{model:Dept}]
  });    */


    const empListAll = await Emp.findAll({        
                            where:{JOB : {[Op.substring]: '장'}
                                          //JOB LIKE '%장%'

                                 // [Op.or]:[{EMPNO:'1001'},{EMPNO:'1002'}] 
                                 //-> EMPNO='1001' or EMPNO='1002'

                                 //EMPNO: {[Op.in] :['1003','1004']}
                                 //-> EMPNO IN ('1003','1004')

                                //EMPNO: {[Op.lte] : '1005'}
                                //EMPNO <= '1005'
                              },                              
                            include:[ { model:Dept} ]                         
                          });
                          //SELECT *
                          //FROM emp a left outer join dept b 
                          //on(a.deptno = b.deptno)
                          //where a.job like '%장%'


      

  res.render('empList', 
  {
    emplist:empListAll });
});


module.exports = router;
