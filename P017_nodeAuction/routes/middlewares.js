//Passport는 req 객체에 isAuthenticated() 메소드를 추가합니다. 
// 로그인 중 true : false 
// 로그인 여부 파악 
  exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else {
      req.flash('loginError', '로그인이 필요합니다');
      res.redirect('/');
    }
  };
  
  exports.isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
      next();
    } else {
      res.redirect('/');
    }
  };