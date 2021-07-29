const jwt = require('jsonwebtoken'); 
const token = jwt.sign({nick:'hello world',},
                      'JWTSCRET',
                      {
                          expiresIn:'10m',
                          issuer:'how'
                      }

); 
console.log(token); 
try{
    const vertifyToken =  jwt.verify(token,'JWTSCRET'); //성공
    //const vertifyToken =  jwt.verify(token,'JWTSCRET'); //에러
    console.log(JSON.stringify(vertifyToken)); 
}catch(e){
    console.log(JSON.stringify(e)); 
}
