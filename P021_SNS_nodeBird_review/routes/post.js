const express=require('express'); 
const multer = require('multer');
const path   = require('path'); 
const fs     = require('fs'); 

const {Post,Hashtag,User} = require('../models'); 
const {isLoggedIn}  = require('./middlewares');
const router = express.Router(); 

fs.readdir('uploads',(error)=>{

    console.error('uploads 폴더가 없어 uploads폴더를 생성합니다.'); 
    fs.mkdirSync('uploads'); 
});  

const upload= multer({
    storage:multer.diskStorage({
                    //diskStorage 파일을 디스크에 저장하기 위해 모든 제어 기능을 제공합니다. 
                    //destination , filnename 의 두 가지 옵션이 가능하다. 
                    //두 옵션 모두 파일을 어디에 저장할 지를 정하는 함수이다.
        destination(req,file,cb){
                    //어느 폴더안에 업로드한 파일을 저장할 지를 결정합니다. 

            cb(null,'uploads'); 
        },
        filename(req,file,cb){
            const ext = path.extname(file.originalname); 
                        //해당 파일의 이름 
            cb(null,path.basename(file.originalname,ext)+new Date().valueOf()+ext); 
                    //해당 파일의 이름+확장자명
        },
    }),

    limits:{fileSize: 5 * 1024 * 1024}, //바이트 단위이다. 대략 5.5MB의 파일을 올릴 수 있음
}); 

router.post('/img',isLoggedIn, upload.single('img'), (req,res)=>{
    //이미지 업로드를 처리하는 라우터
    //이 라우터에서는 single 미들웨어를 사용하고 있습니다. single 메서드에 이미지가 담긴 req.body 속성의 이름을 적어줍니다. 

    //뷰단에서 ajax로 이미지를 보낼 때 속성 이름을 img로 하고 있습니다.
    //이제 upload.single 미들웨어는 이 이미지를 처리하고 req.file 객체에 결과를 저장한다. 

    //res.file.filnename을 클라이언트로 보내서 나중에 게시글을 등록할 때 사용할 수 있게 합니다. 
    console.log('req.file==>   ' , req.file);
    res.json({url:`/img/${req.file.filename}`}); 
    
}); 


//게시글 업로드를 처리하는 라우터... 
//코드 몇줄 안되는데 잘 이해가 안된다. 
const upload2=multer(); 
router.post('/',isLoggedIn,upload2.none(), async (req,res,next)=>{
                            //none()
                            //오직 텍스트 필드만 허용합니다. 
                            //만일 파일이 업로드 되었을 경우 "LIMIT_UNEXPECTED_FILE" 와 같은 에러 코드가 발생할 것입니다. 이는 upload.fields([]) 와 같은 동작을 합니다.
                                                                                                                        //fields -> 파일형식이 아닌 필드의 최대 개수
    try{    
        const post = await Post.create({
            content:req.body.content,
                        //post방식이므로 req.body 이다. 
                        //get방식같은 경우에는 
                        //localhost/hello?id=hell&age=30 
                        //req.query.id , req.query.age 형식으로 받아야 한다. 
            img:req.body.url,
            userId:req.user.id,
        }); 
        const hashtags = req.body.content.match(/#[^\s#]*/g);
        //게시글 내용에서 해시태그를 정규표현식으로 추출해 낸다. 

        if(hashtags){
            const result = await Promise.all(hashtags.map(tag=>Hashtag.findOrCreate({
                                                                        where : {title:tag.slice(1).toLowerCase()},
            }))); 
            await post.addHashtags(result.map(r=>r[0])); 
        }
            res.redirect('/'); 



    }catch(error){
       console.error(error);  
       next(error); 
    }

}); 


router.get('/hashtag', async (req,res,next)=>{

    const query = req.query.hashtags;; 
    if(!query){
        return res.redirect('/'); 
    }

    try{
        const hashtag = await Hashtag.findOne({where:{title:query}}); 
        let posts = []; 
        if(hashtag){
            posts = await hashtag.getPosts({include:[{model:User}]}); 
        }
        return res.render('main',{
            title:`${query} | NodeBird`, 
            user : req.user,
            twits: posts,
        }); 


    }catch(error){
        console.error(error); 
        next(error); 
    }



}); 

module.exports = router; 