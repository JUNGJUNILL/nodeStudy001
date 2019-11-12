const KakaoStrategy = require('passport-kakao').Strategy;

const { User } = require('../models');

module.exports = (passport) => {
  passport.use(new KakaoStrategy({
    clientID: process.env.KAKAO_ID,      //카카오에서 발급해주는 아이디
    callbackURL: '/auth/kakao/callback', //카카오로부터 인증 결과를 받을 라우터 주소 
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      console.log('profile --> ' , profile); 
      /*
      { 
        provider: 'kakao',
        id: 1211853745,
        username: '정준일',
        displayName: '정준일',
        
        _raw:
        '{"id":1211853745,"properties":{"nickname":"정준일","profile_image":"http://k.kakaocdn.net/dn/DOdCo/btqyEISNBYo/MOUxwMiQMwlEeD3E1Eo5q1/img_640x640.jpg","thumbnail_image":"http://k.kakaocdn.net/dn/DOdCo/btqyEISNBYo/MOUxwMiQMwlEeD3E1Eo5q1/img_110x110.jpg"},"kakao_account":{"profile_needs_agreement":false,"profile":{"nickname":"테스트","thumbnail_image_url":"http://k.kakaocdn.net/dn/DOdCo/btqyEISNBYo/MOUxwMiQMwlEeD3E1Eo5q1/img_110x110.jpg","profile_image_url":"http://k.kakaocdn.net/dn/DOdCo/btqyEISNBYo/MOUxwMiQMwlEeD3E1Eo5q1/img_640x640.jpg"},"has_email":true,"email_needs_agreement":false,"is_email_valid":true,"is_email_verified":true,"email":"fkdldjseodnl@naver.com","has_age_range":true,"age_range_needs_agreement":false,"age_range":"30~39","has_birthday":true,"birthday_needs_agreement":false,"birthday":"1207","has_gender":true,"gender_needs_agreement":false,"gender":"male"}}',
  
         _json:
            { id: 1211853745,
                properties:
                            { nickname: '정준일',
                                profile_image:
                                'http://k.kakaocdn.net/dn/DOdCo/btqyEISNBYo/MOUxwMiQMwlEeD3E1Eo5q1/img_640x640.jpg',
                                thumbnail_image:
                                'http://k.kakaocdn.net/dn/DOdCo/btqyEISNBYo/MOUxwMiQMwlEeD3E1Eo5q1/img_110x110.jpg' 
                            },
          kakao_account:
                            { profile_needs_agreement: false,
                                profile: [Object],
                                has_email: true,
                                email_needs_agreement: false,
                                is_email_valid: true,
                                is_email_verified: true,
                                email: 'fkdldjseodnl@naver.com',
                                has_age_range: true,
                                age_range_needs_agreement: false,
                                age_range: '30~39',
                                has_birthday: true,
                                birthday_needs_agreement: false,
                                birthday: '1207',
                                has_gender: true,
                                gender_needs_agreement: false,
                                gender: 'male' 
                            } 
		
    } 	
		}
      */
      const exUser = await User.findOne({ where: { snsId: profile.id, provider: 'kakao' } });
    
      if (exUser) {
        done(null, exUser);


      } else {

        const newUser = await User.create({
          email: profile._json && profile._json.kakao_account.email,
          nick: profile.displayName,
          snsId: profile.id,
          provider: 'kakao',
        });
        done(null, newUser);
      }
    } catch (error) {
      console.error(error);
      done(error);
    }
  }));
};