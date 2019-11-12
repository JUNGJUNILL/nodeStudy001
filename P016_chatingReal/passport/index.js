const local = require('./localStrategy'); 
const kakao = require('./kakaoStrategy');

const {User} =require('../models'); 

module.exports = (passport)=>{


                            //▼이 user는 로그인 전략 수행이 성공적으로 완료되었을 경우 반환해준다.
    passport.serializeUser((user,done)=>{
              //app.js의 app.use(passport.session())으로 인해 req.session에
              //passport 정보를 저장 할 수 있게 되었고 
              
              //serializeUser는 req.session 객체에 어떤 데이터를 저장할지 선택한다. 


        done(null,user.id); 
                  //매개변수 user를 받아, done 함수의 두 번째 인자로 user.id를 넘기고 있다. 
                  //첫번째 인자는 에러 발생 시 사용하는 것이므로 두 번째 인자가 중요하다. 
                  //즉, req.session에는 user.id가 저장된다. 
    }); 


    passport.deserializeUser((id,done)=>{
             //매 요청 시 실행된다. 
             //app.js -> app.use(passport.session()) 미들웨어가 이 메서드를 호출한다.
             //passport.serializeUser메서드에서 받은 user.id를 데이베이스에서 사용자 정보를 조회한다.
             


        User.findOne({where:{id}})
        .then(user=>{done(null,user)
        console.log('deserializeUser user   ====>   ',user);    
        })
                              //▲해당 아이디에 상응하는 select 데이터를 
                              //user에 저장하고 이것은 req.user에 저장된다. 
                            

        .catch(err=>done(err));

    });


    local(passport); 
    kakao(passport); 

}