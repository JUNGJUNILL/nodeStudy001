const express = require('express'); 
const {isLoggedIn,isNotLoggedIn} = require('./middlewares');
const router = express.Router();



router.get('/join',isNotLoggedIn,(req,res)=>{

    res.render('join',{
        title : '회원가입 - chatGif', 
        user : req.user, 
        joinError:req.flash('join Error'),  
    }); 


});


router.get('/sucess',isLoggedIn,(req,res)=>{

    res.render('layout03',{

        user : req.user, 

    }); 


});


module.exports = router; 