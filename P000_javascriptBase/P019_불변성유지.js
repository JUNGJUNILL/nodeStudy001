
//배열을 직접 건드려서 수정했을 경우 
const array = [1,2,3,4]; 
const sameArray = array; 
sameArray.push(5); 

console.log('array === sameArray',array === sameArray); 
//두 배열은 같다. 
//기존에 있던 배열이 복사되는 것이 아니라 
//똑같은 배열을 가리키고 있는 레퍼런스가 하나 만들어진 것이기 때문에, 
// 둘은 다르지 않다. 




//불변성을 유지 했을 경우 
const array01 = [1,2,3,4]; 
const sameArray01 = [...array01,5]; 
console.log('array01 === sameArray01',array01 === sameArray01); //false 


console.log('---------------------------------------------------------------------------------------------')


//객체도 마찬가지다.. 
// NO
const object = {
              foo: 'hello',
              bar: 'world'
};
const sameObject = object;
sameObject.baz = 'bye';
console.log(object,':',sameObject)
console.log(sameObject !== object); // false


const object01 = {
  foo: 'hello',
  bar: 'world'
}

const sameObject01 = {...object01,baz:'byz'}
console.log(object01,":",sameObject01)
console.log(object01 !== sameObject01); // true


console.log('---------------------------------------------------------------------------------------------')






const todos =  [
  {id:0, text: '  리액트 소개', checked: false},
  {id:1, text: '  리액트 소개', checked: true},
  {id:2, text: '  리액트 소개', checked: false},
] ;


const array001 = todos[1]; 
const array002 = [...todos]; 

array002[1] = {
  ...array001,
  checked:  !array001.checked,
}


array002.map(v=>
  console.log(v)); 

console.log('---------------------------------------------------------------------------------------------')
