function* anotherGenerator(i) {
    yield i + 1; //11
    yield i + 2; //12
    yield i + 3; //13
  }
  
  function* generator(i){
    yield i;//10
    yield* anotherGenerator(i);
    yield i + 10; //20
  }

  var gen = generator(10);
  for(const i of gen){
    console.log(i)
  }

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
console.log(gen.next().value +" : " + gen.next().done); // 20

function* stringCutter(string){
  yield* string; //이터러블한 객체로 반환하는 표현식 
}

for(const i of stringCutter('helloWorld')){
  console.log(i)
}


//yield 속성에는 
//value, done이 있다. 
//done이 true면 해당 제너레이터는 종료된다. 

console.log('-----------------------------------------------------------')

function* idMaker(){
    var index = 0;
    while(index < 3)
      yield index++;
  }

  console.log(gen.next().value); // 0
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 2
  console.log(gen.next().value + ' : ' + gen.next().done); // undefined

  console.log('-----------------------------------------------------------')

  //Symbol.iterator 
  const iterable1 = new Object(); 
  iterable1[Symbol.iterator] = function* (){

    yield 1;
    yield 2;
    yield 3;

  }
  console.log([...iterable1])

  console.log('-----------------------------------------------------------')

  var iterable = {
    [Symbol.iterator]() {
      return {
        i: 0,
        next() {
          if (this.i < 3) {
            return { value: this.i++, done: false };
          }
          return { value: undefined, done: true };
        }
      };
    }
  };
  
  for( var value of iterable){
    console.log(value);
  }


  console.log('-----------------------------------------------------------')
  let factorial = {
    [Symbol.iterator]() {
      let count = 1;
      let cur = 1;
      return {
        next() {
          [count, cur] = [count + 1, cur * count];
          //                 2  ,  1* 1 =1
          //                 3  ,  1* 2 =2
          //                 4  ,  2* 3 =6
          //                 5  ,  6* 4 =24
          //                 6  ,  24*5 =120    
          //                 이러한 규칙으로...

          return { done: false, value: cur };
          //무한히 반복된다....
        }
      }
    }
  };
  for (let n of factorial) {
    if (n > 121) {
        //그러니 무한하게 반복이 안되려고
        //제어를 해 둔 것이다. 
      break;
    }
    console.log(n);
  }

  console.log('-----------------------------------------------------------')

  //이터레이터를 활용한 피보나치 수열 
  const fibonacci = {

    [Symbol.iterator]() {

        let prev=1; 
        let curr=1; 
        return {
            next() {
            [prev,curr] =[curr, prev+curr];
            //1 , 2 
            //2 , 3
            //3 , 5
            //5 , 8 ...... 피보나치 수열... 
                return {value: curr , done:false};
            }
        }
    }
  }

  for(const e of fibonacci){
      console.log(e); 

      if(e > 100){
          break; //100보다 크면 반복문을 나가라... 
      }
  }


//제너레이터를 활용한 피보나치 수열 
 /* 
function* fibonacci() { // 생성기 함수
    let [prev, curr] = [1, 1];
    while (true) {
      [prev, curr] = [curr, prev + curr];
      yield curr;
    }
  }
  
  for (let n of fibonacci()) {
    console.log(n);
    // 1000에서 수열을 자름
    if (n >= 100) {
      break;
    }
  }
  */