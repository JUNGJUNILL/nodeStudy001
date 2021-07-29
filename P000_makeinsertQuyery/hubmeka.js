var fs = require('fs');
const result = `'입고일자','품목코드','품목명','규격','원산지','수량','단위','과세여부','매출단가','매출금액','매출부가세','고유번호','비고','매입처','식자재여부'`


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


