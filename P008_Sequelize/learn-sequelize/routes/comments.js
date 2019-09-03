var express = require('express');
var User    = require('../models').User; 


var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
 
    Comment.findAll({ //findAll은 select * from Commnets (풀 조회)

      include: {
          model : User, 
          where : {id: req.params.id },

      }, 
    }).then((comments)=>{
      console.log(comments); 
      res.json(comments);

    }).catch((err)=>{
      console.error(err); 
      next(err); 

    });

});


router.post('/',function(req,res,next){

    Comment.create({ //insert 문 

        commenter: req.body.id,
        comment: req.body.comment,

        
    }).then((result)=>{
      console.log(result); 
      res.status(201).json(result); 

    }).catch((err)=>{
      console.error(err); 
      next(err); 

    });
});



router.patch('/:id' , function(req,res,next){

  Comment.update({comment: req.body.comment} , {where: {id: req.params.id}})
  .then((result)=>{

      res.json(result); 

  }).catch((err)=>{
    
  })

});




router.delete('/:delete',function(req,res,next){

  Comment.destroy({ where: {id: req.param.id } }).then((result)=>{ //destroy , delete문 
    res.json(result); 

  }).catch((err)=>{
    console.err(err); 
    next(err); 

  });
});

module.exports = router;
