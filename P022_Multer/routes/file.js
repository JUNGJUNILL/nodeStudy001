const express = require('express'); 
const multer = require('multer');

const router = express.Router(); 

const storage = multer.diskStorage({
    destination(req,file,callback){
        callback(null,'uploads'); 
    },
    filename(req,file,callback){
        let array = file.originalname.split('.');
        array[0] = array[0]+'_'; 
        array[1] = '.'+array[1]; 
        array.splice(1,0,Date.now().toString()); 
        const result = array.join(''); 
        callback(null,result); 
    }
});


const upload = multer({
    storage,
    limits:{
        files:10,
        //multipart  형식 폼에서 최대 파일 사이즈(bytes)

        fileSize:1024*1024*1024,
    }
}); 

router.post('/good',upload.array('photo',1),(req,res,next)=>{


    console.log("/test")


});

router.post('/hello',upload.array('photo',1),(req,res,next)=>{


    console.log("/test")


});

router.post('/upload',upload.array('photo',1),(req,res,next)=>{

    try{
        const files = req.files; 
        let originalName=''; 
        let fileName =''; 
        let mimeType=''; 
        let size=0; 

        if(Array.isArray(files)){
            console.log(`files is array~`); 
            originalName = files[0].originalname; 
            fileName = files[0].filename; 
            mimeType = files[0].mimetype; 
            size = files[0].size;
        }else { 
            console.log(`files is not array~`); 
            
            originalName = files[0].originalname; 
            fileName = files[0].filename; 
            mimeType = files[0].mimetype; 
            size = files[0].size; 
        }
       console.log(`file inform : ${originalName}, ${fileName}, ${mimeType}, ${size}`);
 

    }catch(error){
        console.dir(err.stack); 
    }

}); 


module.exports = router;
