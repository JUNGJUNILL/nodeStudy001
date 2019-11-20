const express = require('express');

const Room = require('../schemas/room');
const Chat = require('../schemas/chat');
const {isLoggedIn,isNotLoggedIn} = require('./middlewares');

const router = express.Router();



router.get('/',(req,res,next)=>{


    let userInfo; 

    if(req.isAuthenticated()){

      userInfo = req.user; 

    }else{

      userInfo = null; 
    }

  res.render('layout03',{
    user:userInfo,
  });

}); 


router.get('/createChatRoom', async (req, res, next) => {
  try {
    const rooms = await Room.find({});
    res.render('main', { rooms, title: 'GIF 채팅방', error: req.flash('roomError') });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//채팅방 생성 화면 
router.get('/room', (req, res) => {
  res.render('room', { title: 'GIF 채팅방 생성' });
});


//채팅방 CREATE 
router.post('/room', async (req, res, next) => {
  try {
    const room = new Room({
      title: req.body.title,
      max: req.body.max,
      owner: req.user.email,
      password: req.body.password,
    });
    const newRoom = await room.save(); // insert 
    const io = req.app.get('io');
    io.of('/room').emit('newRoom', newRoom);
    res.redirect(`/room/${newRoom._id}?password=${req.body.password}`);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/room/:id', async (req, res, next) => {
  try {
    const room = await Room.findOne({ _id: req.params.id });
    const io = req.app.get('io');
    if (!room) {
      req.flash('roomError', '존재하지 않는 방입니다.');
      return res.redirect('/');
    }
    if (room.password && room.password !== req.query.password) {
      req.flash('roomError', '비밀번호가 틀렸습니다.');
      return res.redirect('/');
    }
    const { rooms } = io.of('/chat').adapter;
    if (rooms && rooms[req.params.id] && room.max <= rooms[req.params.id].length) {
      req.flash('roomError', '허용 인원이 초과하였습니다.');
      return res.redirect('/');
    }

    const chats = await Chat.find({room:room._id}).sort('createdAt'); 
    //먼저 GET /room/:id 라우터에서 방 접속 시 기존 채팅 내역을 불러오도록 수정합니다.
    //방 접속 시 DB로부터 채팅 내역을 가져오고, 
    //접속 후에는 웹 소켓으로 새로운 채팅 메시지를 받습니다.  

    return res.render('chat', {
      room,
      title: room.title,
      chats,
      user: req.user.email,
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});


router.post('/room/:id/chat', async (req, res, next) => {
  try {
    const chat = new Chat({
      room: req.params.id,
      user: req.user.email,
      chat: req.body.chat,
    });
    await chat.save();
    req.app.get('io').of('/chat').to(req.params.id).emit('chat', chat);
    //채팅을 데이터베이스에 저장한 후 req.params.id(방 아이디) 같은 방에 있는
    //소켓들에게'만' 메시지 데이터를 전송합니다.

    res.send('ok');
  } catch (error) {
    console.error(error);
    next(error);
  }
});




router.delete('/room/:id', async (req, res, next) => {
  try {
    await Room.remove({ _id: req.params.id });
    await Chat.remove({ room: req.params.id });
    res.send('ok');
    setTimeout(() => {
      req.app.get('io').of('/room').emit('removeRoom', req.params.id);
    }, 2000);
  } catch (error) {
    console.error(error);
    next(error);
  }
});







module.exports = router;