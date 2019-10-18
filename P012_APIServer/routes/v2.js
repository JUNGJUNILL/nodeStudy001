const express = require('express'); 
const jwt = require('jsonwebtoken');
const cors = require('cors'); 
const url = require('url'); 

const { verifyToken,apiLimiter }  = require('./middlewares'); 
const { Domain, User, Post, Hashtag } = require('../models'); 


const router = express.Router(); 

//app.js에서 /v2로 요청 들어올 시.. 
//즉, /v2/token , /v2/test , /v2//post/my 등등등.. 
// /v2 요청 시 반드시 이 라우터를 타겠금 해 놓음 그거시 router.use 메소드의 역할
// (default는 / 이기에...) , http://expressjs.com/en/5x/api.html#router.use 공식문서 
router.use(async (req,res,next)=>{
    
    const domain = await Domain.findOne({
        where :  {host: url.parse(req.get('origin')).host}, 
                        //'localhost:8003' 도메인 문자열 반환
    });
    if(domain){
        cors({origin:req.get('origin')})(req,res,next); 
        //Access-Control-Allow-Origin : localhost:8003 붙여 주는 행위 
        //req.get('request header 명') : 요청헤더값을 가져올 수 있다. 
    }else{
        next(); 
    }

}); 

//토큰 발급 라우터 
router.post('/token' , apiLimiter, async (req,res)=>{

    const {clientSecret} = req.body; 
    try{
        const domain = await Domain.findOne({

                        where: { clientSecret }, 
                        include:{
                            model:User, 
                            attribute:['nick','id'],
                        },

                    });

        
        if(!domain){
            return res.status(401).json({
                    code: 401,
                    message: '등록되지 않은 도메인입니다.먼저 도메인을 등록하세요.'
            });
        }

        //토큰 생성.. 
        const token = jwt.sign({
                                    id:domain.user.id,
                                    nick:domain.user.nick, 
                                }, 
                                
                                    process.env.JWT_SECRET,
                                
                                {
                                    expiresIn:'1m', //30분  , 유요기간
                                    issuer : 'nodebird',//발급자 
                                }
            
                              ); 

                    //sign(a,b,c)
                    //a : 토큰의 내용, b : 토큰의 비밀키 , c: 토큰 설정 
        
        return res.json({
            code:200,
            message:'토큰이 발급되었습니다.', 
            token,
        }); 

    }catch(error){

        console.error(error);
        return res.status(500).json({
            code:500,
            message:'서버 에러', 
        }); 
     }
}); 


//사용자가 발급 받은 토큰을 테스트해볼 수 있는 라우터 
//,apiLimiter, verifyToken,
router.get('/test' ,(req,res)=>{
    res.json(req.decoded); 

}); 


router.get('/post/my',apiLimiter,verifyToken,(req,res)=>{

    Post.findAll({where : {userId:req.decoded.id}})
    .then((posts)=>{
        console.log(posts); 
        res.json({
            code:200,
            payload:posts,

        });
    })
    .catch((error)=>{
        console.error(error); 
        return res.status(500).json({
            code:500,
            message:'서버 에러',
        });
    });


});



router.get('/posts/hashtag/:title',verifyToken, async (req,res)=>{

try{
        const hashtag = await Hashtag.findOne({where : {title:req.params.title}});
        if(!hashtag){
            return res.status(404).json({
                code:404,
                message:'검색 결과가 없습니다.',
            });
        }


        const posts = await hashtag.getPosts(); 
        return res.json({
            code:200,
            payload:posts,
        }); 

}catch(error){

        console.error(error); 
        return res.status(500).json({
            code:500,
            message:'서버 에러',
        })
    }
    
});



module.exports  = router; 