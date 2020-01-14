const local = require('./localStrategy'); 
const kakao = require('./kakaoStrategy'); 
const {User}  = require('../models'); 


module.exports = (passport) =>{

    passport.serializeUser((user,done)=>{
        done(null,user.id); 
    }); 
    //req.session 객체에 어떤 데이터 정할지 선택 
    //세션에 사용자 정보를 모두 저장하면 세션의 용량이 커지고 데이터 일관성에 문제가 발생하므로 
    //사용자의 아이디만 저장하라고 명령한 것입니다. 


    passport.deserializeUser((id,done)=>{
        User.findOne({
            where:{id},
            include:[{
                model:User,
                attributes:['id','nick'],
                as:'Followers',
            },{
                model:User,
                attributes:['id','nick'],
                as:'Followings', 
            }],
        })
        .then(user=>done(null,user))
                               //req.user에 저장 
        .catch(err=>done(err)); 
    }); 
    //매 요청시마다 실행됨 
    //app.js -> app.use(passport.session()) 에서 호출함 
    //req.user를 통해 로그인한 사용자의 정보를 가져올 수 있따. 


    local(passport); 
    kakao(passport); 



};