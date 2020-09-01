
//return array 
const animals  =['ant', 'bison', 'camel', 'duck', 'elephant']; 
console.log(animals.slice(0,2)); 
console.log(animals.slice(1)); 
console.log(animals.slice(2));
console.log(animals.slice(2,4));// 2 index 부터 4-2개의 요소를 빼겠다. 
console.log(animals.slice(2,3));


const pageNumers = [1,2,3,4,5]; 
const newArray = pageNumers.slice(); 
//인자가 없는 경우 이 메서드를 호출한 배열을 복사한 새로운 배열을 생성한다. 

console.log('newArray' , newArray); 
console.log(   pageNumers.slice(0,3) )