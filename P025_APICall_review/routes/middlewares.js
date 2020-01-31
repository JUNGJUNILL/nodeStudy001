const jwt = require('jsonwebtoken'); 
const RateLimit = require('express-rate-limit'); 




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
    
      req.decoded = jwt.verify(req.headers.authorization,
                               process.env.JWT_SECRET); 
      //jwt.verify(a,b)
      //a : 토큰, b : 토큰의 비밀 키 
      //요청 해더에 저장된 토큰(req.headers.authorization)을 사용한다. 
      //사용자가 쿠키처럼 헤더에 토큰을 넣어 보낼 것입니다.
      //verify로 토튼을 검증할 수 있다. 

      //인증에 성공한 경우에는 토큰의 내용을 반환한다. 
      //토큰의 내용은 조금 전에 넣은 사용자 아이디와 닉네임, 발급자, 유효 기간 등입니다. 
      //이 내용을 req.decoded에 넣어 다음 미들웨어에서 쓸 수 있도록 한다. 

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




exports.apiLimiter = new RateLimit({
  windowMs: 60 * 1000, // 1분동안
  max: 1, //1 번 요청 할 수 있다. 
  delayMs: 0,
  handler(req, res) {
    res.status(this.statusCode).json({
      code: this.statusCode, // 기본값 429
      message: '1분에 한 번만 요청할 수 있습니다.',
    });
  },
});


  
exports.deprecated = (req,res)=>{

  res.status(410).json({
      code:410,
      message:'새로운 버전이 나왔습니다. 새로운 버전을 사용하세요.',
  });

}                                 