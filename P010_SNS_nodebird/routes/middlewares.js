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