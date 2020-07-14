//배열을 특정 문자로 묶어서 string으로 반환한다. 
//반환값 String

const array01 = ['1','2','3']
console.log(typeof array01.join(),'->',array01.join())    //콤마 그대로 생김 
console.log(typeof array01.join(),'->',array01.join(''))  //콤마 사라짐 
console.log(typeof array01.join(),'->',array01.join('-')) 
console.log(typeof array01.join(),'->',array01.join('★')) 

