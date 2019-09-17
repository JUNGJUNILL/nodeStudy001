

//yield* 표현식은 다른 생성기 또는 이터러블 객체에 yield를 위임할 때 사용 
//이터러블한 객체로 변환(?)
function* func1(){

  yield* "42"; 
}

function* func2(){

yield* func1(); 

}

const iter = func2(); 


console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log('-----------------------------------------------------------')


function* g3() {
  yield* [1, 2];
  yield* "34";
  yield* Array.from(arguments);
}

var iterator = g3(5, 6);

console.log(iterator.next().value); // { value: 1, done: false }
console.log(iterator.next().value); // { value: 2, done: false }
console.log(iterator.next().value); // { value: "3", done: false }
console.log(iterator.next().value); // { value: "4", done: false }
console.log(iterator.next().value); // { value: 5, done: false }
console.log(iterator.next().value); // { value: 6, done: false }
console.log(iterator.next().value); // { value: undefined, done: true }


console.log('-----------------------------------------------------------')

//yield* 는 구문이 아닌 표현이다. 따라서 값으로 평가됩니다. 
function* g4(){

  yield* [1,2,3];
  return "foo"; 

}
var result; 

function* g5(){
  result = yield* g4(); 
}

var iter02 = g5(); 

console.log('-----------------------------------------------------------')


console.log(iter02.next().value); 
console.log(iter02.next().value); 
console.log(iter02.next().value); 
console.log(iter02.next().value);
console.log(result);
//yield는 iterator의 표현이므로 iterator의 값으로 평가된다. 
