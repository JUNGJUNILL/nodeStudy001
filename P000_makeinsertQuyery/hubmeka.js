var fs = require('fs');
const result = `'일자','계정','품목명','규격','비고','수량','단가','매출_출금','매입_입금','구분','잔액'`;

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


