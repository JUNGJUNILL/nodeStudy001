var fs = require('fs');
const result = `'총액','총부과세','회사명','대표이사','등록번호','주소','업태','종목','유통회사명','유통대표이사','유통등록번호','유통주소','유통업태','유통종목','도장명','전화번호','전일미수금','당일미수금','입금액','한글합계','유통-전화번호','유통-팩스','유통-법인번호','유통-계좌번호','유통-예금주','유통-이메일','유통-공지사항','총수량','품목건수','여신금액','타전산거래처코드','기사이름','기사전화번호','차량번호','당월누계(금액)','당월누계(부가세)','당월누계(총액)','파일명','차량번호2','주소2','코스','알림사항','입고일자'`


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


