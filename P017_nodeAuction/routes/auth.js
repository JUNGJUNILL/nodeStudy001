const express=require('express'); 
const passport = require('passport'); 
const bcrypt =require('bcryptjs'); 
const {isLoggedIn, isNotLoggedIn} = require('./middlewares'); 
const {User}  = require('../models'); 

const router = express.Router(); 


//회원가입
router.post('/join',isNotLoggedIn, async (req,res,next)=>{

    const {email,nick,password,money} = req.body;

    try{
        const exUser = await User.findOne({where:{email}}); 
        if(exUser){
            req.flash('joinError' , '이미 가입된 이메일 입니다.'); 
            return res.redirect('/join'); 
        }

        const hash = await bcrypt.hash(password,12);
        await User.create({
            email,
            nick,
            password:hash,
            money,
        });

        return res.redirect('/'); 

    }catch(error){
        console.error(errpr); 
        return next(error); 
    }

}); 

router.post('/login',isNotLoggedIn,(req,res,next)=>{

        passport.authenticate('local',(authError,user,info)=>{

            if(authError){
                console.error(authError); 
                return next(authError);
            }
            if(!user){
                req.flash('loginError' , info.message); 
                return res.redirect('/');
            }

            return req.login(user,(loginError)=>{
                if(loginError){
                    console.error(loginError); 
                    return next(loginError); 
                }
                return res.redirect('/'); 


            });


        })(req,res,next);  

});


router.get('/logout' , isLoggedIn, (req,res)=>{

    if(req.isAuthenticated()){
        next(); 
    }else{
        req.flash('loginError','로그인이 필요합니다.'); 
        req.redirect('/'); 
    }


}); 


module.exports = router; 