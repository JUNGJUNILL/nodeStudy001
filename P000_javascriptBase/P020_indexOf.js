//해당 문자가 없을 경우 -1을 반환한다. 
//있는 경우 그 문자열의 index값을 반환한다. 
const text='12345'; 
console.log(text.indexOf('')); 

if(text.indexOf("9") === -1){
    console.log('존재하지 않는 문자열입니다.'); 

}