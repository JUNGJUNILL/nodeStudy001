// call all the required packages
const express = require('express')
const bodyParser= require('body-parser')
const multer = require('multer');

 
const app = express();
 
 
//ROUTES WILL GO HERE
app.get('/', function(req, res) {
   
        res.sendFile(__dirname+'/index.html');
});
 

const storage = multer.diskStorage({
    destination(req,file,callback){
        callback(null,'P023_multer\\uploads'); 
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


const upload = multer({storage,
                       limits:{fileSize: 5 * 1024 * 1024}    
}); 
app.post('/uploadfile',upload.single('myFile'),(req,res,next)=>{

    const file = req.file; //
    console.log('file ==> ', file); 
    if(!file){
        const error = new Error('please upload a file');
        error.httpStatusCode = 500; 


    }

    res.send(file); 

}); 


app.post('/uploadmultiple',upload.array('myFiles',5),(req,res,next)=>{


    const files = req.files
    try{

        if(files.length > 5){
            console.log('6개 이상 파일을 올릴 수 없습니다.'); 
            throw new Error('에러 발생'); 
        }

    }catch(err){
        console.error(err); 
        next(err); 
    }



    
    console.log('files.length==>' , files.length); 
    files.map((v)=>{
        console.log(v); 
    }); 




/*
    if(files.length >5){
        console.log('6개 이상 올릴 수 없습니다.'); 
        res.status(500); 
    }

    files.map((v)=>{
        v.fileSize
        if(limits < v.fileSize){
               console.log(v.filename + ' : 업로드 용량이 초과되었습니다.'); 
               res.status(500); 
        }

    })
*/

});


app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('Something broke!');
})

app.listen(3000, () => console.log('Server started on port 3000'));