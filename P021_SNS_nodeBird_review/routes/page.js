const express = require('express'); 
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');
const {Post, User} =require('../models'); 
const router = express.Router(); 



router.get('/profile',isLoggedIn,(req,res)=>{

    res.render('profile',{title:'내 정보 - NodeBird', user:req.user}); 

}); 

//회원가입 라우터 
router.get('/join',(req,res)=>{
    res.render('join',{
        title:'회원가입 - NodeBird',
        user: req.user,
        joinError:req.flash('joinError'), 
    }); 

}); 

router.get('/',(req,res,next)=>{

    Post.findAll({
        include:{
            model:User, //조인 조건문
            attributes:['id','nick'],
        }, 
        order:[['createdAt','DESC']],
    }).then((posts)=>{

        res.render('main',{
            title:'NodeBird',
            twits:posts,
            user:req.user,
            loginError:req.flash('loginError'),
        }); 
    }).catch((error)=>{
        console.log(error); 
        next(error); 
    })


}); 

module.exports = router; 

