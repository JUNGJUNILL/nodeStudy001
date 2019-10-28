const SocketIO = require('socket.io');

module.exports = (server) => {
  const io = SocketIO(server,{path:'/socket.io'}); 
                             //▲두 번째 인자로 옵션 객체를 넣어 서버에 관한 여러가지 설정 가능 
                             //path :  클라이언트와 연결할 수 있는 경로를 의미 (무슨 말인지 이해가 되진 않는다.)



    io.on('connection',(socket)=>{
          //connection 이벤트는 클라이언트가 접속 했을 때, 발생하고 콜백으로 소켓 객체를 제공한다. 

    const req = socket.request; //소켓 속성으로 요청 객체에 접근이 가능하다. 응답객체로도 접근이 가능하다. 
    const ip = req.header['x-forwarded-for'] || req.connection.remoteAddress; 
    
    console.log('새로운 클라이언트 접속==>' , ip , socket.id , req.ip);
    
    socket.on('disconnection',()=>{
        console.log('클라이언트 접속 해제' , ip, socket.id); //socket.id로 소켓 고유의 아이디를 가져올 수 있다. 
                                                           //이 아이디로 소켓의 주인이 누군지 특정할 수 있다. 
        clearInterval(socket.interval); 
    });

    socket.on('error',(error)=>{
      
       console.error(error); 

    }); 

    socket.on('replay',(data)=>{
              //▲사용자가 직접 만든 이벤트 , 클라이언트에서 reply라는 이벤트명으로 데이터를 보낼 때 서버에서 받는 부분

       console.log(data); 
    
    });

    socket.interval = setInterval(()=>{

      socket.emit('news','Hello Socket.IO'); 
      //3초마다 클라이언트 한 명에게 메시지를 보내는 부분이 있다. 
      //인자가 두 개입니다. 
      //emit(a,b) : a:이벤트 이름, b:데이터 , 즉, news라는 이벤트 이름으로 Hello Socket.IO라는 데이터를 클라이언트에게 보낸 것이다. 
      //이 메시지를 받기 위해서는 news 이벤트 리스너를 만들어두어야 합니다. 

    },3000);



  }); 

};