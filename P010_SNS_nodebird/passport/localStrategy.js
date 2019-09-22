const LocalStrategy = require('passport-local').Strategy; 
       //passport-local 모듈에서 Strategy 생성자를 불러와 사용합니다. 
       
const bcrypt = require('bcrypt'); 

const { User } = require('../models'); 


module.exports = (passport) =>{

    passport.use(new LocalStrategy({

        usernameField : 'email', 
        passwordField : 'password', 


    },async (email,password,done)=>{

        try{

            const exUser = await User.fine({ where : { email }}); 

            if(exUser){

                const result = await bcrypt.compare(password,exUser.password); 
                if(result){
                    done(null, exUser); 
                }else{
                    done(null, false, {message:'비밀번호가 일치하지 않습니다.'}); 

                }

            }else{
            
                done(null,false,{message:'가입되지 않은 회원입니다.'}); 

            }


        }catch(error){
            console.error(err); 
            done(error); 
        }

    }));


};