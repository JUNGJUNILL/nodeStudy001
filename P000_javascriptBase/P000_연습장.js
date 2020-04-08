/*
function* generator(){

  console.log(1)
  console.log(2)
  yield; //중단점.. 
  console.log(3)
  yield* '정준일'; // * 붙이면 뒤 값은 iterable로 처리 (반복 가능한 값) 
}

const a = generator()
a.next(); 
*/

//제너레이터 비동기를 동기처럼... 
// yield는 해당 함수의 중단점 , 
// next(), value, done 값을 가진 Object 반환 

/*
function* gen(){
  let i= 0; 
  while(true){
    yield i++; 
  }

}

const abc = gen(); 
abc.next()
*/

function* gen(param){
  console.log('a')
  console.log('b')
  
  if(param ===2){
 
    yield ;

  }  
  console.log('c')
  
}

const abc = gen(2); 
abc.next()


if(abc.next().done){
  console.log('함수가 종료되었삼')
}