const express = require('express'); 
const multer = require('multer'); 
const path   = require('path'); 
const fs     = require('fs'); 


const {Good, Auction, User} = require('../models'); 
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
      await Good.create({
        ownerId: req.user.id,
        name,
        img: req.file.filename,
        price,
      });
      res.redirect('/');
    } catch (error) {
      console.error(error);
      next(error);
    }
  });



router.get('/good/:id',isLoggedIn,async (req,rex,next)=>{


  try{
      const [good,auction]  = await Promise.all([Good.find({
                                                              where:{id:req.params.id},
                                                              include:{
                                                                model:User,
                                                                as:'owner',
                                                              }
                                                           })], 
      )

  }catch(error){
    console.error(error); 
    next(error); 
  }


})


module.exports = router; 