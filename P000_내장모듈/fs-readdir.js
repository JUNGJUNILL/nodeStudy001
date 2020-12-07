const fs = require('fs'); 

//해당 폴더의 파일명 리스트를 files 배열로 반환하는 모듈이다. 

//해당
fs.readdir('./P000_내장모듈/P000-1_module,require/test',(error,files)=>{

    if(error){
        console.log('에러는 아닌가봐?')
      fs.mkdirSync('./P000_내장모듈/P000-1_module,require/test'); 
    }
   console.log(files)
})