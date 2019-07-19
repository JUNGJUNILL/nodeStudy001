const http = require('http'); 
const fs = require('fs'); 
const url = require('url'); 
const qs = require('querystring'); 


const parseCookies = (cookie='')=>


    cookie
    .split(';')
    .map(v=>v.split('='))
    .map(([k,...vs])=>[k, vs.join('=')])
    .reduce((acc,[k,v])=>{

        acc[k] = decodeURIComponent(v); 
        return acc; 
    },{});

    const session= {}; 

http.createServer((req,res)=>{

    const cookies = parseCookies(req.headers.cookie); 
   
    if(req.url.startsWith('/login')){
      
        const {query} = url.parse(req.url); 
        const {name} = qs.parse(query); 
        const expires = new Date(); 
        expires.setMinutes(expires.getMinutes()+1); 
        const randomInt = +new Date(); 

        session[randomInt] = {

            name, 
            expires,
        }; //프로퍼티 축약형

        res.writeHead(302,{
            
            Location:'/',
            'Set-Cookie':`session=${randomInt}; Expires=${expires.toUTCString()}; HttpOnly; Path=/`, 
        });
        //쿠키명=쿠키값 
        // Expires=만료기한 :, 기본값은 클라이언트가 종료될 때 까지이다. 
        // Max-age=초       :Expires와 비슷하지만 날짜 대신 초를 입력할 수 있다. Expires 보다 우선함 
        // Domain=도메인명   : 쿠기가 전송될 URL을 특정할 수 있다.  

        res.end(); 


    }else if(cookies.session && session[cookies.session].expires > new Date() ){
        
        res.writeHead(200,{'Content-Type':'text/html; charset=utf8'}); 
        res.end(`${session[cookies.session].name}님 안녕하세요`); 

    }else{
        fs.readFile('./P003_session/server4.html',(err,data)=>{

            if(err){
                throw err
            }

            res.end(data); 

        });
    }



})
.listen(9993,()=>{

    console.log('9993 포트에서 서버 대기 중입니다.'); 

})
