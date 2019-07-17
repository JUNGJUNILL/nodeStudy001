const http = require('http'); 
/*
http.createServer((req,res)=>{

    res.write('<h1>Hello Node</h1>'); 
    res.write('<p>Hello Server</p>'); 

}).listen(8080,()=>{
    //listen 메서드를 붙여 클라이언트에게 공개할 포트 번호와 포트 연결 완료 후실행될 콜백함수를 넣는다. 
    //이제 이 파일을 실행하면 서버는 8080 포트에서 요청이 오기를 대기한다. 
    console.log('8080번 포트에서 서버 대기 중입니다.'); 
}); 
*/

//서버에 listening 이벤트 리스너를 붙여도 된다. 
const server = http.createServer((req,res)=>{

    res.write('<h1>Hello Node</h1>'); // wirte의 첫번째 인자는 클라이언트로 보낼 데이터이다. 
                                      //지금은 html 모양의 문자열을 보냈지만 버퍼를 보낼 수도 있다.  
                                      //여러 번 호출해서 데이터를 여러 개 보내도 된다. 

    res.end('<p>Hello Server</p>');    //end는 응답을 종료하는 메서드이다. 만약 인자가 있다면 그 데이터도 클라이언트로 보내고 응답을 종료한다. 

}); 
server.listen(9999); 

server.on('listening',()=>{
    console.log('8080번 포트에서 서버 대기 중입니다.'); 
}); 

server.on('error',(error)=>{
    console.error(error);
})