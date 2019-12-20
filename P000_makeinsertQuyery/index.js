const fs = require('fs'); 
fs.readFile(__dirname+'/good.txt','utf8',(err,data)=>{

    let array  = data.replace(/\r\n/g,',').split(',');
    
   array.map((v)=>{
       v = `'${v}',`
       console.log(v); 
   })

    // const array02 = array.map((v,i)=>{

    //         v = `insert into bigSellerImage values('${v}','EV')\n`;
    //     try {
    //         fs.appendFileSync('./storagefolder/test.txt', v);
    //        if(array.length-1 === i){
    //            console.log('파일 생성이 완료되었습니다.'); 
    //        }
    //       } catch (err) {
    //         /* Handle the error */
    //       }
    // })
     
}); 

