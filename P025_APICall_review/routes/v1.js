const express = require('express'); 
const jwt = require('jsonwebtoken');

const { verifyToken,apiLimiter,deprecated }  = require('./middlewares'); 
const { Domain, User, Post, Hashtag } = require('../models'); 


const router = express.Router(); 
//router.use(deprecated); 
//라우터 앞에 deprecated 미들웨어를 추가하여 v1
//으로 접근한 모든 요청에 deprecated 응답을 보내도록 합니다.


//토큰 발급 라우터 
router.post('/token' , async (req,res)=>{

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
                                    expiresIn:'1m', //1분  , 유요기간
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
router.get('/test', verifyToken, (req,res)=>{
    res.json(req.decoded); 

}); 



router.get('/posts/my',verifyToken,(req,res)=>{

    Post.findAll({where:{userId:req.decoded.id}})
        .then((posts)=>{
            console.log('posts==>',posts);
            res.json({
                code:200,
                playload:posts, 
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



router.get('/posts/hashtag/:title',verifyToken,async(req,res)=>{

    try{
        console.log('req.params.title==>', req.params.title); 
        const hashtag = await Hashtag.findOne({where:{title:req.params.title}}); 
        if(!hashtag){
            return res.status(404).json({
                code:404,
                message:'검색 결과가 없습니다.',
            }); 
        }
        const posts = await hashtag.getPosts(); 
        /*                          get메소드의 반환값은 [] 배열이다.
      [{
        "id":18,
        "content":
        "#배#수박#겨울#겨울왕국#올라프\r\n난 영화가 좋아요",
        "img":"",
        "createdAt":"2020-01-14T01:31:33.150Z",
        "updatedAt":"2020-01-14T01:31:33.150Z",
        "deletedAt":null,
        "userId":3,

        "PostHashtag":
                        {"createdAt":"2020-01-14T01:31:33.295Z",
                        "updatedAt":"2020-01-14T01:31:33.295Z",
                        "postId":18,
                        "hashtagId":29
                        }		
        }]     
        */
        
        return res.json({
                        code:200,
                        playload:posts,
                    
            }); 

    }catch(error){
        console.error(error); 
        return res.status(500).json({
            code:500,
            message:'서버 에러',
        });
    }

}); 



module.exports = router; 