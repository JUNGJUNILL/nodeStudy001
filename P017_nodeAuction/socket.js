const SocketIO = require('socket.io')


module.exports = (server,app)=>{

    const io = SocketIO(server,{path:'/socket.io'}); 

    app.set('io',io);

    
    io.on('connection',(socket)=>{

        const req = socket.request;
        const { headers: { referer } } = req;
        const roomId = referer.split('/')[referer.split('/').length - 1]
        //socket.request.headers.referer를 통해 현재 웹 페이지의 URL을 가져 올 수 있다. 

        
        socket.join(roomId); 
        //클라이언트 연결 시 주소로부터 경매방 아이디를 받아와
        //socket.join으로 해당 방에 입장합니다. 연결이 끊겼다면
        // socket.leave로 해당 방을 나갑니다. 

        

        socket.on('disconnection',()=>{

            socket.leave(roomId); 
        }); 



    });

}
