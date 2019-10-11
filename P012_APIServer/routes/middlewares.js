const jwt = require('jsonwebtoken'); 




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


//토큰 검증하기 
exports.verifyToken = (req,res,next) =>{

    try{

      req.decoded = jwt.verify(req.headers.authorization,process.env.JWT_SECRET); 
      //jwt.verify(a,b)
      //a : 토큰, b : 토큰의 비밀 키 
      return next(); 

    }catch(error){
      if(error.name === 'TokenExpiredError'){ //유효기간 초과 
        return res.status(419).json({
                                      code:419,
                                      message:'토큰이 만료되었습니다.',
        });

      }
        return res.status(401).json({
                                      code:401,
                                      message:'유효하지 않은 토큰입니다.'
        });


    }


}; 