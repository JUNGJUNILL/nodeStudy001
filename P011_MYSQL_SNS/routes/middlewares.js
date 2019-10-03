
//로그인 했을 시 회원가입이나 로그인 버튼이 보이면 안되니까.. 
//반대로 로그인을 안했는데 로그아웃 버튼이나 로그인 권한의 버튼이 보이면 안되기 떄문에
//이 라우터로 제어한다. 
exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) { //로그인에 성공!  //로그인 중일 경우 req.isAuthenticated()가 true이다. 
                                                //passport는 req 객체에 isAuthenticated()를 추가한다.
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