const express = require('express'); 
const multer = require('multer'); 
const path   = require('path'); 
const fs     = require('fs'); 
const schedule = require('node-schedule'); 
const Sequelize = require('sequelize');
const Op = Sequelize.Op;



const {Good, Auction, User, sequelize} = require('../models'); 
const {isLoggedIn,isNotLoggedIn} = require('./middlewares'); 


const router = express.Router(); 


router.use((req,res,next)=>{

    res.locals.user = req.user;  
    //모든 pug 템플릿에 사용자 정보를 변수로 집어넣었다. 
    //중복 제거를 위함... 

    next(); 
}); 


//메인화면 렌더링 
router.get('/', async (req, res, next) => {
  try {
   
   
    const goods = await Good.findAll({ where: { soldId: null } });
                            //렌더링할 때 경매가 진행 중인 상품 목록도 같이 불러온다. 
                            //soldeId가 낙찰자 아이디이므로 날찰자가 null이면 경매가 진행 중인 것이다. 
    res.render('main', {
      title: 'NodeAuction',
      goods,
      loginError: req.flash('loginError'),
    });


  } catch (error) {

    console.error(error);
    next(error);

  }
});


//회원가입 
router.get('/join',isNotLoggedIn,(req,res)=>{


    res.render('join',{
        title:'회원가입 - NodeAuction',
        joinError:req.flash('joinError'),
    });
});



router.get('/good',isLoggedIn,(req,res)=>{

    res.render('good',{title:'상품 등록 - NodeAuction'}); 
}); 


fs.readdir('uploads',(error)=>{

    if(error){
        console.error('uploads 폴더가 없어 uploads폴더를 생성합니다.'); 
        fs.mkdirSync('uploads'); 
    }

}); 


const upload = multer({
    storage: multer.diskStorage({
      destination(req, file, cb) {
        cb(null, 'uploads/');
      },
      filename(req, file, cb) {
        const ext = path.extname(file.originalname);
        cb(null, path.basename(file.originalname, ext) + new Date().valueOf() + ext);
      },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
  });


  router.post('/good', isLoggedIn, upload.single('img'), async (req, res, next) => {
    try {
      const { name, price } = req.body;
      const good = await Good.create({
        ownerId: req.user.id,
        name,
        img: req.file.filename,
        price,
      });
      const end = new Date();
      end.setMinutes(end.getMinutes() + 1); // 1분 뒤
      schedule.scheduleJob(end, async () => {
        const success = await Auction.findOne({
          where: { actiongoodId: good.id },
          order: [['bid', 'DESC']],
        });
        await Good.update({ soldId: success.userId }, { where: { id: good.id } });
        await User.update({
          money: sequelize.literal(`money - ${success.bid}`),
        }, {
          where: { id: success.userId },
        });
      });
      res.redirect('/');
    } catch (error) {
      console.error(error);
      next(error);
    }
  });

  router.get('/good/:id', isLoggedIn, async (req, res, next) => {
    try {
      const [good, auction] = await Promise.all([
        Good.findOne({
          where: { id: req.params.id },
          include: {
            model: User,
            as: 'owner',
          },
        }),
        Auction.findAll({
          where: { actiongoodId: req.params.id },
          include: { model: User },
          order: [['bid', 'ASC']],
        }),
      ]);
      res.render('auction', {
        title: `${good.name} - NodeAuction`,
        good,
        auction,
        auctionError: req.flash('auctionError'),
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  });
  



router.post('/good/:id/bid', isLoggedIn, async (req, res, next) => {
  try {
    const { bid, msg } = req.body;
    const good = await Good.findOne({
      where: { id: req.params.id },
      include: { model: Auction },
      order: [[{ model: Auction }, 'bid', 'DESC']],
    });
    if (good.price > bid) { // 시작 가격보다 낮게 입찰하면
      return res.status(403).send('시작 가격보다 높게 입찰해야 합니다.');
    }
    console.log('good.createdAt-->  ', good.createdAt);
    console.log('new Date(good.createdAt).valueOf()-->  ',new Date(good.createdAt).valueOf()); 
    console.log('new Date(good.createdAt).valueOf() + (60 * 1000) --> ' , new Date(good.createdAt).valueOf() + (24 * 60 * 60 * 1000) ); 
    console.log('typeof -->' ,typeof (new Date(good.createdAt).valueOf() + (60 * 1000)) ); 

    // 경매 종료 시간이 지났으면
    if (new Date(good.createdAt).valueOf() + (1000*60) < new Date()) {
      return res.status(403).send('경매가 이미 종료되었습니다');
    }
    // 직전 입찰가와 현재 입찰가 비교
    if (good.auctions[0] && good.auctions[0].bid >= bid) {
      return res.status(403).send('이전 입찰가보다 높아야 합니다');
    }
    const result = await Auction.create({
      bid,
      msg,
      actionuserId: req.user.id,
      actiongoodId: req.params.id,
    });

    req.app.get('io').to(req.params.id).emit('bid', {
      bid: result.bid,
      msg: result.msg,
      nick: req.user.nick,
    });
    return res.send('ok');

  } catch (error) {
    console.error(error);
    return next(error);
  }
});





router.get('/list',isLoggedIn,async (req,res,next)=>{


    try{
        const goods = await Good.findAll({
          where:{soldId:req.user.id},
          include:{model:Auction},
          //on(a.dealercode = b.dealercode) 이걸 자동으로 해준다네;;;
          order   : [[{model:Auction},'bid','DESC']],
        }); 

        res.render('list',{title:'낙찰 목록 - NodeAuction',goods}); 

    }catch(error){
      console.error(error); 
      next(error); 
    }


}); 






router.get('/final',async (req,res,next)=>{

  try {
    const yesterday = new Date();
    yesterday.setMinutes(yesterday.getMinutes() - 1);
    const gooddata = await Good.findOne({where:{soldId:null}}); 

    const targets = await Good.findAll({
      where: {
        soldId: null,
        createdAt: {[Op.lte]: yesterday }, //이하... <=
      },
    });


    targets.forEach(async (target) => {
      console.log('target--> ' , target); 
      const success = await Auction.findOne({
                                             where: { actiongoodId: target.id },
        order: [['bid', 'DESC']],
      });
      console.log('success-> ' , success); 
      await Good.update({ soldId: success.actionuserId }, { where: { id: target.id } });
      await User.update({
        money: sequelize.literal(`money - ${success.bid}`),
      }, {
        where: { id: success.actionuserId },
      });
    });

   res.redirect('/'); 

  } catch (error) {
    console.error(error);
  }


});






module.exports = router; 