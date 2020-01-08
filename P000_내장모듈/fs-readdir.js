const fs = require('fs'); 

//해당 폴더의 파일명 리스트를 files 배열로 반환하는 모듈이다. 
fs.readdir('./P000-1_module,require',(error,files)=>{

    if(error){
        console.log('?'); 
    }
    files.map((v)=>console.log(v)); 
})