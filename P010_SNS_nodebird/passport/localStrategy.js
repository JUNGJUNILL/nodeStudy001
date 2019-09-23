const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const { User } = require('../models');

//로그인 인증 로직, 
module.exports = (passport) => {
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  }, 
  //LocalStrategy의 첫번째 인자로 주어진 객체는 전략에 관한 설정하는 하는 곳이다. 
  //req.body.email에 이메일이, 
  //req.body.password에 비밀번호가 담겨 들어오므로 email과 password를 각각 넣어 주었다. 
  
  async (email, password, done) => {
  //실제 전략을 수행하는 async함수이다. 
  //LocalStrategy의 두 번째 인자로 들어갑니다. 
  //위에서 넣어준 email과 password는 async함수의 첫 번째와 
  //두 번째 매개변수가 됩니다. 
  //세 번째 매개변수 done함수는 passport.authenticate의 콜백 함수 입니다. 

    try {
      const exUser = await User.findOne({ where: { email } });
     // console.log('exUser   ' , exUser);
      if (exUser) {
        console.log('password   '  , password); 
        const result = await bcrypt.compare(password, exUser.password);
        console.log('result  ' , result); 
        if (result) {
          done(null, exUser);
        } else {
          console.log('exUser.password  ' + exUser.password);
          done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
        }
      } else {
        done(null, false, { message: '가입되지 않은 회원입니다.' });
      }
    } catch (error) {
      console.error(error);
      done(error);
    }
  }));
};