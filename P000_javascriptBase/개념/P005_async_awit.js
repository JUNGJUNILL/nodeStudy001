/*
function* test(string){

  yield* string; 
}


let good = test('정준일'); 

for(const e of good){
  console.log(e); 
}


console.log('-----------------------------------------------------------')

//next()를 통해 생성기에 값을 전달해 줄 수 도 있다. 
//전달에 준 값은 yield가 받는다. 
//next로 나오는 값은 별개이다. 
//첫번째 값 전달은 무시된다. 

function* deliverGenerator(){
  console.log('generator called'); 

  let val = yield; 

  console.log('1st' , val);
  val  =yield 2; 
  console.log('2nd' , val); 
  val  =yield; 
  console.log('3rd',val); 
}
let delGen = deliverGenerator();
delGen.next(1); // 'generator called'
delGen.next(2); // '1st 2', next의 value는 2 
delGen.next(3); // '2nd 3'
delGen.next(4); // '3rd 4', next의 done은 true


*/
console.log('-----------------------------------------------------------')



const resolveAfter2Seconds = ()=>{

  return new Promise((resolve,reject)=>{

    setTimeout(()=>{

      resolve('resolve');         //resolve는 맨 마지막에 실행된다. 
      console.log('hello async'); 
      console.log('hello async');
      console.log('hello async');
      console.log('hello async');
      console.log('hello async');
      console.log('hello async');
      console.log('hello async');
      console.log('hello async');
      console.log('hello async');


    },2000);    //2초 뒤에 resolve가 실행된다. 

  }); 

}

/*
resolveAfter2Seconds().then((message)=>{

    console.log(message); 

}); 
*/

//ES5
async function asyncCall(){

  console.log('calling'); 
  const result = await resolveAfter2Seconds(); 

  console.log(result); 

}
asyncCall();




//async 함수에는 await식이 포함될 수 있다. 
//이 식은 async 함수의 실행을 일시 중지하고,
//Promise의 해결을 기다린 다음 async 함수의 실행을 다시 시작하고
//완료 후 값을 반환한다. 
//즉, await은 promise의 resolve된 데이터를 받는다. p

//async / await 함수의 목적은 사용하느느 여러 promise의 동작을 동기스럽게 
//사용할 수 있게 하고, 어떤 동작을 여러 promise의 그룹에서 간단하게 동작하게 하는 것이다. 

//ES6
/*
const asyncCall = async() =>{


  console.log('calling'); 
  const result = await resolveAfter2Seconds(); 
  console.log(result); 

  console.log('ggg'); 



}
asyncCall();
*/