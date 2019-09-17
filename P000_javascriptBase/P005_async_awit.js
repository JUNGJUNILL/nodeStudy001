function* test(string){

  yield* string; 
}


let good = test('정준일'); 

for(const e of good){
  console.log(e); 
}

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
for(const e of delGen){
  console.log(e); 
}
