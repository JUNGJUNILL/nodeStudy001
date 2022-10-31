var fs = require('fs');

const result = `'지점코드','지점명','품목코드','품목명','규격','단위','수량','단가','금액','세액','매입처코드','매입처명','비고','수정자','수정시간'`;

const resultLength = result.split(',').length; 
let str ='\n'; 
console.log(resultLength); 
result.split(',').map((v,i)=>{

    
// fs.writeFile(__dirname+'/test.txt', v, 'utf8', function(error){ console.log('write end') });

if(result.length-1==i){
    v=v.replace(/\'|\"/gi, ""); 
}else{
    v=v.replace(/\'|\"/gi, "")+'\n'; 
}

try{

    fs.appendFileSync(__dirname+'/hubmke_array.txt', v);
    console.log(i); 


}catch(error){
console.error(error); 
}


});


