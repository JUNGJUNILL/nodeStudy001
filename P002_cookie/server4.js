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


http.createServer((req,res)=>{

    const cookies = parseCookies(req.headers.cookie); 
   
    if(req.url.startsWith('/login')){
        console.log(req.url); 
        const {query} = url.parse(req.url); 
        const {name} = qs.parse(query); 
        const expires = new Date(); 

        expires.setMinutes(expires.getMinutes+5); 

     //   console.log("req.url==>  " , req.url); 
     //   console.log("query-->"  + query); 
     //   console.log("name-->  " + name); 

        res.writeHead(302,{

            Location:'/',
            'Set-Cookie':`name=${encodeURIComponent(name)};Expires=${expires.toUTCString()};HttpOnly;Path=/`,
                           //헤더 값은 한글이 들어갈 수 없어서 인코등해 줬다.
        });
        res.end();


    }else if(cookies.name){
        
        res.writeHead(200,{'Content-Type':'text/html; charset=utf8'}); 
        res.end(`${cookies.name}님 안녕하세요`); 

    }else{
        fs.readFile('./P002_cookie/server4.html',(err,data)=>{

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
