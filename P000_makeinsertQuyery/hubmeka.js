var fs = require('fs');
const result = `'유통사코드','입고일자','거래처코드','거래처명','품목코드','품목명','규격','단위','발주수량','반품수량','실수량','지점단가','지점금액','지점과세여부','지점부가세','본사단가','본사금액','본사과세여부','본사부가세','순번','매입처코드','창고출고여부','매입부가세여부','매입단가','매입금액','매입부가세','발주규제일','비고','품목사용여부','대기업품목코드','최초입력자','최초입력일시','최종입력자','최종입력일시','단가군명','비고2','상세매출처','축산이력번호','호차'`


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


