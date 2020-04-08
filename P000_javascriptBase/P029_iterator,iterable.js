/*

3. Iterator이면서 Iterable
(1)위에서 말했듯, Iterator의 조건은 next method가 구현되어있어야 할 것.
(2)위에서 말했듯, Iterable의 조건은 [Symbol.iterator] 라는 이름의 iterator가 구현되어 있어야 할 것.

https://github.com/nujabes403/functional-js-study/blob/master/README.md
*/

/*
1. Iterator 
- iterator는 어떤 자료구조를 순회(traverse)하는데 쓰이는 pointer라고 생각하면 된다. 
- (ex: database에서의 cursor 역할)
- next method가 구현되어 있으면 Iterator
*/

//String의 기본 iterator는 String의 문자를 하나씩 반환합니다. 
const sumString = "정준일"; 
console.log(typeof sumString[Symbol.iterator]); 
const iterator = sumString[Symbol.iterator](); 
// console.log(iterator.next()); 
// console.log(iterator.next()); 
// console.log(iterator.next()); 
// console.log(iterator.next().done); 

console.log('----------------------------------------------')

/*
2. Iterable
- [Symbol.iterator] 라는 특정한(specific)이름의 iterator가 있으면 Iterable
- [Symbol.iterator]는 iterator이므로 위에서 봤듯이 당연히 next method가 구현되어 있어야 함.
- for of 구문으로 순회(traverse) 가능
*/
const iterableObj = {
    [Symbol.iterator]() {  
      let step = 0;
      return {
        next() {
          step++;
          if (step === 1) {
            return { value: 'This', done: false};
          } else if (step === 2) {
            return { value: 'is', done: false};
          } else if (step === 3) {
            return { value: 'iterable.', done: false};
          }
          return { value: '', done: true };
        }
      }
    },
  }

  for (const val of iterableObj) {
    console.log(val);
  }


//제너레이터->  비동기를 동기처럼!
//yield는 해당 함수의 중단점  
//next()-> value, done 값을 가진 Object 반환 
function* generator01(){

  console.log(1)
  console.log(2)
  yield; //중단점.. 
  console.log(3)
  yield* '정준일'; // * 붙이면 뒤 값은 iterable로 처리 (반복 가능한 값) 
}
const gen01 = generator01(); 
gen01.next(); 
/*
function* generator01(){
  yield 1;
  yield 2;
  yield 3;
}
const gen01 = generator01();

gen01.next()

---------------------------두 코드는 동일하다. 

function* generator02(){

  yield* [1,2,3];

}

const gen02 = generator02();

gen02.next()

*/



//제너레이터
function* generator01(){

  console.log('핡');
  yield 'generator This';
  yield 'generator is';
  yield 'generator iterable.'
  console.log('핡핡'); 
}

const gen03 = generator01(); 


for(const val of gen03){
  console.log(val); 
}


function* generator04(){

  let i=0; 
  while(true){
   yield i++; 
  }

}

//제너레이터
function* generator04(){

  let i=0; 
  while(true){
   yield i++; 
  }

}

const gen04 = generator04(); 
//0부터 .... 무한대로 뽑힘 
gen04.next(); 

//이렇게 하면 무한루프 돔
for(const val of gen04){
  console.log(val); 
}



const gen04 = generator04(); 
gen04.next(); 






// function makeRangeIterator(start = 0, end = Infinity, step = 1) {
//     var nextIndex = start;
//     var n = 0;
   
//     var rangeIterator = {
//        next: function() {
//            var result;
//            if (nextIndex < end) {
//                //1 < 4 true , nextIndex = 1 , n = 1 
//                //
//                result = { value: nextIndex, done: false }
//            } else if (nextIndex == end) {
//                result = { value: n, done: true }
//            } else {
//                result = { done: true };
//            }
//            nextIndex += step;
//            // 0 =  0+1 =1 

//            n++;
//            //0=0+1     =1 
//            console.log('start = ',start , 'end = ' , end, 'step = ' , step); 
//            return result;
//        }
//     };
//     return rangeIterator;
// }

// var it = makeRangeIterator(1, 4);

// var result = it.next();
// while (!result.done) {
//  console.log(result.value); // 1 2 3
//  result = it.next();
// }

// console.log("Iterated over sequence of size: ", result.value);