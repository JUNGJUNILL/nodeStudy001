const local = require('./localStrategy'); 
//const kakao = require('./kakaoStrategy');

const { User } =require('../models'); 

//https://stackoverflow.com/questions/19948816/passport-js-error-failed-to-serialize-user-into-session
module.exports = (passport)=>{

    passport.serializeUser((user,done)=>{
             //req.session 객체에 어떤 데이터를 저장할지 선택한다. 
             //매개변수로 user를 받아, done 함수에 두 번째 인자로 user.id를 넘기고 있습니다. 
             //done 함수의 첫 번째 인자는 에러 발생 시 사용하는 것이므로 두 번째 인자가 중요하다.
             
             //세션에 사용자 정보를 모두 저장하면 세션의 용량이 커지고 데이터 일관성에 문제가 발생하므로
             //사용자의 아이디만 저장하려고 명령한 것입니다. 
        //console.log(user); 
        console.log('user    ' + user)
        console.log('user.id        ' + user.id); 
        done(null,user.id); 
    }); 



passport.deserializeUser((id,done)=>{
            //매 요청시 실행된다. passport.session() 미들웨어가 이 메서드를 호출한다.
            //serializeUser에서 세션에 저장 했던 아이디를 받아 데이터베이스에서 사용자 정보를 조회한다.
            //조회한 정보를 req.user에 저장하므로, 앞으로 req.user를 통해 
            //로그인한 사용자의 정보를 가져올 수 있습니다. 
           // done(null,id)
      
         /*  User.findOne({ where: { id } })
           .then(user => done(null, user))
           .catch(err => done(err));
         */

        User.findOne({
            where :{ id },
            include:[
              
               { model:User, 
                 attributes:['id','nick'],
                 as:'Followers',
                    },   
               { model:User,
                attributes:['id','nick'],
                as:'Followings', 
                    }],
        }).then(user => done(null, user))
        .catch(err => done(err));



}); 

local(passport); 
//kakao(passport); 


};