const KakaoStrategy = require('passport-kakao').Strategy; 
//passport-kakao 모듈로부터 Strategy 생성자를 불러와 사용합니다.

const {User} = require('../models'); 


module.exports = (passport) =>{

    passport.use(new KakaoStrategy({
        clientID:process.env.KAKAO_ID,
        callbackURL:'/auth/kakao/callback',
        
    }, async (accessToken, refreshToken, profile, done)=>{

        try{
            const exUser = await User.findOne({where:{snsId:profile.id,provider:'kakao'}}); 
            if(exUser){
                done(null,exUser);
            }else{
                const newUser = await User.create({
                    email:profile._json && profile._json.kaccount_email,
                    nick:profile.displayName,
                    snsId:profile.id,
                    provider:'kakao',
                }); 
                done(null,newUser);
            }
        
        }catch(error){
            console.error(error); 
            done(error); 
        }
    }));
};