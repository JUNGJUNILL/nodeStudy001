const http = require('http'); 
const fs = require('fs'); 

http.createServer((req,res)=>{

    //root는 c:\git Repository\nodeStudy001 이다.. 
    fs.readFile('./P001_test01/server2.html',(err,data)=>{

        if(err){
            throw err; 
        }
        res.end(data)
    });
}).listen(9991,()=>{
    console.log('9991번 포트에서 서버 대기 중입니다.'); 
})