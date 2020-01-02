const fs = require('fs'); 

var appendArrayList;

fs.readFile(__dirname+'/appentTextList.txt','utf8',(err,data)=>{

    appendArrayList = data.replace(/\r\n/g,',').split(',');

}); 



fs.readFile(__dirname+'/materialNameList.txt','utf8',(err,data1)=>{

     let materialList = data1.replace(/\r\n/g,',').split(',');



     materialList.map((v,i)=>{ 
        let vv='';
        vv=v+' '.concat(appendArrayList).replace(/,/gi,' ')+'\n'; 

    try{
            fs.appendFileSync('./P000_makeinsertQuyeryStorage/finalAppendMaterialNameList.txt', vv);
           if(materialList.length-1 === i){
               console.log('파일 생성이 완료되었습니다.'); 
           }
      
    }catch(error){
        console.error(error); 
    }
      
       console.log(vv); 
   })
}); 

