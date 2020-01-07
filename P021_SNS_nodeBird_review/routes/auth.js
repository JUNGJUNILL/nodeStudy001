const express = require('express'); 
const passport = require('passport'); 
const bcrypt  =require('bcrypt'); 
const {isLoggedIn, isNotLoggedIn} = require('./middlewares'); 
const {User} = require('../models'); 

const router = express.Router(); 


//회원가입 라우터 
router.post('/join',isNotLoggedIn,async (req,res,next)=>{

    const {email, nick, password} = req.body; 
    try{

        const exUser = await User.find({where:{email}}); 
        if(exUser){
            
            req.flash('joinError','이미 가입된 이메일입니다.'); 
            return res.redirect('/join'); 
        
        }

        const hash = await bcrypt.hash(password,12); 

        await User.create({
            email,
            nick,
            password:hash,
        }); 
        return res.redirect('/'); 


    }catch(error){
        console.error(error); 
        return next(error);
    }
}); 



//로그인 라우터 
router.post('/login', isNotLoggedIn,(req,res,next)=>{

    passport.authenticate('local',(authError,user,info)=>{

        if(authError){
            console.error(authError); 
            return next(authError); 
        }


        if(!user){
            req.flash('loginError',info.message); 
            return res.redirect('/'); 
        }


        return req.login(user,(loginError)=>{
                //passport폴더->index.js-> passport.serializeUser() 호출 
                //req.login(user,...) 이 user가 passport.serializeUser()로 넘어가게 된다. 

            if(loginError){
                console.error(loginError); 
                return next(loginError); 
            }

            return res.redirect('/'); 
        }); 

    })(req,res,next); 

}); 

//passport가 req.login(), req.logout() 메서드를 추가합니다. 

router.get('/logout',isLoggedIn,(req,res)=>{
    req.logout(); 
    //req.user 객체 제거 

    req.session.destroy();
    //req.session 객체 제거 
    
    res.redirect('/'); 
}); 


module.exports = router; 