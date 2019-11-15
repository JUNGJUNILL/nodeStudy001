const LocalStrategy = require('passport-local').Strategy;


const bcrypt = require('bcrypt'); 

const User = require('../schemas/user'); 

module.exports=(passport)=>{

    passport.use(new LocalStrategy({
                 //로그인 전략 구현 
                 // passport-local 모듈에서 Strategy 생성자를 불러와 사용한다. 
                 // usernameField와 passwordFiel에 일치하는 
                 // req.body 속성명을 적어주면 된다. 

                 // req.body.email에 email, req.body.password에 password를 
                 // 각각 넣어줌 
                 

        usernameField : 'email',
        passwordField : 'password', 
    

    }, async (email,password,done)=>{
                             //▲ passport.authenticate의 콜백함수 

        try{

            //const exUser =  await User.findOne({where:{email}}).select('email');
            //const exUser =  await User.find().where('email').equals('dala1207@naver.com');  
            //const exUser =  await User.find({name:"email"});  
            const exUser =  await User.findOne({email:email},{email:1,nick:1,partCode:1});  
            if(exUser){
                //const result = await bcrypt.compare(password,exUser.password); 
                /*await bcrypt.compare(password,exUser.partCode,(err,res)=>{
                   if(res){
                    done(null,exUser); 
                   }else{
                    done(null,false,{message:'비밀번호가 일치하지 않습니다.'})
                   }
                }); */
                if(password === exUser.partCode){
                    done(null,exUser); 
                }else{
                    done(null,false,{message:'비밀번호가 일치하지 않습니다.'})
                }

                /*if(result){
                    done(null,exUser); 
                }else{
                    done(null,false,{message:'비밀번호가 일치하지 않습니다.'})
                }
                */

            }else{
                
                done(null,false,{message:exUser}); 

            }

        }catch(error){
            console.error(error); 
            done('서버 or 디비 에러 --> ' , error); 
        }
      } 
    ));
  }