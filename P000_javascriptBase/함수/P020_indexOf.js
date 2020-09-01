//해당 문자가 없을 경우 -1을 반환한다. 
//있는 경우 그 문자열의 index값을 반환한다. 
const text='22'; 
console.log(text.indexOf('')); 
            //''는 0을 반환하게 되어 있다. 

if(text.indexOf(".") !== -1){
    console.log('존재하지 않는 문자열입니다.'); 

}