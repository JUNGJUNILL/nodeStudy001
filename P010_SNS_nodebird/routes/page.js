const express = require('express'); 
const { isLoggedIn , isNotLoggedIn} = require('./middlewares'); 
const {Post , User} = require('../models'); 


const router = express.Router(); 


router.get('/profile',isLoggedIn, (req,res)=>{
                     
    res.render('profile',{title:'내 정보 - NodeBird',user: req.user}); 

});

router.get('/join',isNotLoggedIn,(req,res)=>{

    res.render('join',{

        title : '회원가입 - NodeBird',
        user : req.user,
        joinError : req.flash('joinError'),

    }); 

});
router.get('/', (req, res, next) => {

      Post.findAll({
        
        include:{
          model: User, //post 테이블이랑 user랑 조인 걸겠다. users의   
          attributes:['id','nick'], //특정 컬럼만 뽑겠다. 
          //where: {} 조인조건?
        },

        order: [['createdAt','DESC']],
      })
      .then((posts)=>{
        
 
        res.render('main',{
            title:'NodeBird',
            twits:posts, 
            user:req.user,
            loginError:req.flash('loginError'), 
        });
      }).catch((error)=>{
        console.error(error); 
        next(error); 
      });

  });





module.exports = router; 