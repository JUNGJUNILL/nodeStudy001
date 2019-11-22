const SocketIO = require('socket.io');
const axios = require('axios');
const Room = require('./schemas/room');

module.exports = (server, app, sessionMiddleware) => {
  const io = SocketIO(server, { path: '/socket.io' });

  app.set('io', io);
  //라우터에서 io객체를 사용할 수 있게 저장해 둔다. 
  //req.app.get('io')로 접근 가능하다. 


  const room = io.of('/room');
  const chat = io.of('/chat');
                //of : Socket.IO에 네임스페이스를 부여하는 메서드이다. 
                //Socket.IO는 기본적으로 /네임스페이스에 접속하지만
                //of 메서드를 사용하면 다른 네임스페이스를 만들어 접속할 수 있다. 
                //같은 네임스페이스끼리만 데이터를 전달합니다. 
                
                //현재 채팅방 생성 및 삭제에 관한 정보를 전달하는 /room과 체팅
                //메시지를 전달하는 /chat이라는 네임스페이스 두 개를 만들었습니다. 
                //이렇게 네임스페이스를 구분하였으므로 지정된 네임스페이스에 연결한 클라이언트에게만 
                //테이터를 전달합니다. 


  io.use((socket, next) => {
    //io.use 메서드에 미들웨어를 장착할 수 있다. 
    //이 부분은 모든 웹 소켓 연결 시마다 실행된다. 

    sessionMiddleware(socket.request, socket.request.res,next);
    //세션 미들웨어에 요청,응답,next함수를 일자로 넣어주면 된다. 

  });



 //----------------------start 방 socket---------------------- 
  room.on('connection', (socket) => {
                         //▲컨넥션에 성공했을 때 컨녁션에 대한 정보를 담고 있는 변수 
  //네임스페이스 마다 각각 이벤트 리스너를 붙일 수 있다. 

    socket.join('hello'); 
    console.log('room 네임스페이스에 접속');
    socket.on('disconnect', () => {
      console.log('room 네임스페이스 접속 해제');
    });
  });
//----------------------end  방 socket---------------------- 



  chat.on('connection', async (socket) => {
    console.log('chat 네임스페이스에 접속');
    const req = socket.request;
    const { headers: { referer } } = req;
    const roomId = referer
      .split('/')[referer.split('/').length - 1]
      .replace(/\?.+/, '');
      //socket.request.headers.referer를 통해 현재 웹 페이지의 URL을 가져 올 수 있다. 
      //URL에서 방 아이디 부분을 추출하였다. 

    socket.join(roomId);
    //Socket.IO에는 네임스페이스보다 더 세부적인 개념으로 방(Room)이라는 것이 
    //있습니다. 같은 네임스페이스 안에서도 같은 방에 들어 있는 소켓끼리만 데이터를 
    //주고받을 수 있습니다. 
  
    let userInfoEmail=''
    let userInfoNick='' 
    let owner=''; 
    const sessioninfo = req.session.clientInfo;
    
    if(sessioninfo){//세션에 유저 정보가 있으면

      userInfoEmail = sessioninfo.email;
      userInfoNick = sessioninfo.nick; 
      
      //해당 사용자가 방장인지 아닌지 검증
      const isOwner = await Room.findOne({owner:userInfoEmail},{_id:0,email:1}); 
      if(isOwner){
        owner='[방장]';
      }else{
        owner=null; 
      }

    }

    socket.to(roomId).emit('join', {
            //to메서드로 특정 방(roomId)에 데이터를 보낼 수 있다.
      user: 'system',
      chat: `${userInfoNick}님이 입장하셨습니다.`,
                //세션 미들웨어와 Socket.IO를 연결했으므로 
                //req.session.color 사용 가능 
      onwer : owner,
    });


    socket.on('disconnect', () => {
      console.log('chat 네임스페이스 접속 해제');
      socket.leave(roomId);

//----------------------------------------------------------------
      const currentRoom = socket.adapter.rooms[roomId];
      console.log('currentRoom -->  ' , currentRoom);
      const userCount = currentRoom ? currentRoom.length : 0;
      if (userCount === 0) { //방을 폭파시킬거야 
        axios.delete(`http://localhost:8005/room/${roomId}`)
          .then(() => {
            console.log('방 제거 요청 성공');
          })
          .catch((error) => {
            console.error(error);
          });
      } else {               //방은 남겨둘거야
        socket.to(roomId).emit('exit', {
          user: 'system',
          chat: `${userInfoNick}님이 퇴장하셨습니다.`,
        });
      }
//----------------------------------------------------------------
    });


  });
};