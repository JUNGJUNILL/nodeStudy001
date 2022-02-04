var fs = require('fs');
const result = `'입고일자','매출합계','매출면세','매출과세','매출부가세'`;


result.split(',').map((v,i)=>{

    
// fs.writeFile(__dirname+'/test.txt', v, 'utf8', function(error){ console.log('write end') });

try{
    
    fs.appendFileSync(__dirname+'/hubmke_array.txt', v.replace(/\'/gi, "")+'\n');
   if(result.length-1 === i){
       console.log('파일 생성이 완료되었습니다.'); 
   }

}catch(error){
console.error(error); 
}


});


