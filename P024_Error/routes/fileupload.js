const express =require('express');
const multer = require('multer'); 
const path   = require('path'); 
const fs     = require('fs'); 

const router = express.Router();



router.get('/',(req,res,next)=>{

        res.send('hh'); 
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

    limits:{fileSize: 5 * 1024 * 1024}, //바이트 단위이다. 
}); 

router.post('/uploadfile',(req,res,next)=>{
 
    //api보고 구성항 
    upload.single('myFile')(req,res,(err)=>{


        const file = req.file;
        if(file === undefined){
            err = new Error('please upload a file');
        }


        if(err){
                console.log('파일이 없썽..ㅜㅜ'); 
                console.error(err);
                 return next(err); //에러처리 미들웨어로 이동... 
        }
        res.send(file); 
    });

});

module.exports = router;