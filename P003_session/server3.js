const http = require('http'); 


const parseCookies = (cookie='')=>{
    console.log("흑흑알려줘->" + cookie);
    cookie.split(';')
    .map(v=>v.split('='))
    .map((k,...vs)=>[k,vs.join('=')])
    .reduce((acc,[k,v])=>{
        acc[k] = decodeURIComponent(v); 
        return acc;   
    },{})


}
/*
http.createServer((req,res)=>{

    const cookies = parseCookies(req.headers.cookie);
    
    console.log(req.url,cookies); 
    res.writeHead(200,{'Set-Cookie':'mycookie=test'}); //요청이 성공적이면 ,응답 헤더에 쿠기를 심어줘 라는 의미이다. 
    res.end(req.headers.cookie); 
})
.listen(9992,()=>{
    console.log('9992번 포트에서 서버 대기 중입니다.'); 
})

*/


http.createServer((req,res)=>{

    const cookies = parseCookies(req.headers.cookie); 
  
   
    if(req.url.startsWith('/login')){
      
        const {query} = url.parse(req.url); 
        const {name} = qs.parse(query); 
        const expires = new Date(); 

        expires.setMinutes(expires.getMinutes+5); 

        console.log("req.url==>  " , req.url); 
        console.log("query-->"  + query); 
        console.log("name-->  " + name); 

        res.writeHead(302,{

            Location:'/',
            'Set-Cookie':`name=${encodeURIComponent(name)};HttpOnly;Path=/`,

        });
        console.log("cookies.name--->" + cookies.name); 
        res.end();


    }else if(cookies.name){
        console.log(cookies.name); 
        res.writeHead(200,{'Content-Type':'text/html; charset-utf8'}); 
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
