const express = require('express'); 
const axios = require('axios'); 

const router = express.Router(); 
const URL = 'http://localhost:8002/v1'; 

const request = async (req, api)=>{

    try{
        if(!req.session.jwt){//세션에 토큰이 없을 경우 토큰을 발급받아 세션에 저장한다. 
            const tokenResult = await axios.post(`${URL}/token`,{
                clientSecret: process.env.CLIENT_SECRET, 
            }); 
            req.session.jwt = tokenResult.data.token; //세션에 토큰 저장
        }

            return await axios.get(`${URL}${api}`,{
                headers: {authorization:req.session.jwt}, 
            }); //API 요청 


    }catch(error){
        console.error(error); 
        if(error.response.status < 500 ){
            //410이나 419처럼 의도된 에러면 발생 
            return error.response; 
        }
        throw error; 
    }

};


router.get('/posts',async (req,res,next)=>{

    try{
        const result = await request(req,'/post/my');
        res.json(result.data); 

    }catch(error){
        console.error(error); 
        next(error); 
    }


});

router.get('/search/:hashtag', async (req,res,next)=>{

    try{
        const result = await request(
            req,
            `/post/hashtag/${encodeURIComponent(req.params.hashtag)}`,
                                    );

            res.json(result.data); 

    }catch(error){
    
        if(error.code){
            console.error(error); 
            next(error); 
        }
    }

});


/*
router.get('/test', async (req,res,next)=>{

    try{

        if(!req.session.jwt){ //세션에 토큰이 없으면... 토큰을 발급 받는다. 
            const tokenResult = await axios.post('http://localhost:8002/v1/token', {
                clientSecret: process.env.CLIENT_SECRET,
              });
    
            if(tokenResult.data && tokenResult.data.code === 200){ //토큰 발급 성공

                req.session.jwt =tokenResult.data.token //세션에 토큰 저장 

            }else{//발급 실패 사유 응답 
            
                return res.json(tokenResult.data); 
        }
    }

        const result = await axios.get('http://localhost:8002/v1/test', {
           
              headers: {authorization:req.session.jwt}, 
              //API verify에 req.headers.authorization이 된다. 
              //보통 토큰은 HTTP 요청 헤더에 넣어서 보냅니다. 

          });
          
          return res.json(result.data); 
                  //

    }catch(error){

            console.error(error); 
            if(error.response.status === 419){ //토큰 만료 시 
                return res.json(error.response.data); 
            }

            return next(error); 
         }
    
});
*/

module.exports = router; 