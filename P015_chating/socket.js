const SocketIO = require('socket.io'); 

module.exports = (server) =>{

    const io = SocketIO(server); 

    io.on('connection',(socket)=>{

        
        socket.on('chat message', (msg)=>{
            io.emit('chat message', msg);
            console.log('message=> : ',msg);
          });
       

        socket.on('disconnect',()=>{
            console.log('user disconnected');
        });

        socket.on('reply',(data)=>{

            console.log(data+"뿌레낑뚜루꿍"); 

        });

        socket.interval = setInterval(()=>{

            socket.emit('news', 'Server to Client'); 
                //3초마다 클라이언트 한 명에게 메시지를 보내는 부분이 있다. 
                //인자가 두 개입니다. 
                //emit(a,b) : a:이벤트 이름, b:데이터 , 즉, news라는 이벤트 이름으로 Hello Socket.IO라는 데이터를 클라이언트에게 보낸 것이다. 
                //클라이언트가 이 메시지를 받기 위해서는 news 이벤트 리스너를 만들어두어야 합니다. 
                },3000)

        }); 


  



}

