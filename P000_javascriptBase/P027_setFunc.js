//setTimeout, setInterval 

function test01(p1,p2){

    console.log(p1, " : ",p2); 

}
setTimeout(test01,3000,'정준일','너도 할 수 있어'); //IE9미만에서는 지원 안되는 문법 

setTimeout(()=>console.log('함수를 넣어라'),1000); 


let timeId = setTimeout(()=>console.log('never happen'),1000); 
console.log(timeId); 
clearTimeout(timeId); 
console.log(timeId); 