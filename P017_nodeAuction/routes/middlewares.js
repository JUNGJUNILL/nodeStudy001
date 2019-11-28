
//Passport는 req 객체에 isAuthenticated() 메소드를 추가합니다. 
// 로그인 중 true : false 
// 로그인 여부 파악 
exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) { //로그인에 성공! 
      next();
    } else {
      res.status(403).send('로그인 필요');
    }
  };
  
  exports.isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) { //로그인에 실패! 
      next();
    } else {
      res.redirect('/');
    }
  };