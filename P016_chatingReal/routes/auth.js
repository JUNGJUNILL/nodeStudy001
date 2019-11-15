const express = require('express');
const passport= require('passport'); 
const bcrypt   =require('bcrypt'); 
const User = require('../schemas/user');
const {isLoggedIn,isNotLoggedIn} = require('./middlewares'); 


const router = express.Router();


router.post('/join',isNotLoggedIn,async (req,res,next)=>{

    const {email,nick,password} =req.body; 

    try{

        const exUser = await User.findOne({where:{email}}); 

        if(exUser){
          
                req.flash('joinError','이미 가입된 email입니다.'); 
                return res.redirect('/join');      
        }

        const hash = await bcrypt.hash(password,12); 
        
        /*await User.create({
            email ,
            nick,
            password:hash,
            partCode:password,
        })
        시퀄라이즈용(아마 몽구스도 될 것이다.)
        */
        const user = new User({
            email ,
            nick,
            password:hash,
            partCode:password,
        });
        await user.save();
        return res.redirect('/'); 


    }catch(error){
   
        console.error(error); 
        next(error); 
    }


}); 


//로그인 라우터
router.post('/login',isNotLoggedIn,(req,res,next)=>{

    passport.authenticate('local',(authError,user,info)=>{
            //전략이 성공하거나 실패하면 authenticate 메서드에서 콜백 함수가 실행됩니다. 
            //콜백 함수의 첫 번째 인자 값이 있다면 실패한 것이다. 
            //두 번째 인자값이 있다면 성공한 것이고, req.login 메서드를 호출한다. 
            //Passport는 req 객체에 login, logout 메서드를 추가한다. 

            //req.login은 passport.serializeUser를 호출한다. 
            //

        if(authError){
            console.error('authError ---> ' , authError);
            return next(authError); 
        }

        if(!user){
            console.log('user ->' , user); 
            console.log('info.message -->' , info.message);
            req.flash('loginError',info.message); 
            return res.redirect('/'); 

        }

        return req.login(user,(loginError)=>{
               //req.login 메서드가 
              console.log('user ---> ' , user);
            if(loginError){
                console.error('loginError --->  ', loginError); 
                return next(loginError); 
            }

            return res.redirect('/page/sucess');

        }); 

    })(req,res,next);  

}); 



module.exports = router;