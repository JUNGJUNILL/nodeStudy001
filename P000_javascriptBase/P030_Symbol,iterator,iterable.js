//객채용 for in 
const obj001 = {

  props1 :1,
  props2 :2,
  props3 :3,
}

for(const val in obj001){
  console.log(obj001[val]); 
}
console.log('----------------------------------')
//for of [Symbol.iterator] 속성의 컬렉션 반복 
const sumString = "정준일"; 
for(const values of sumString){
  console.log(values); 
}



console.log('----------------------------------')
/*
심볼은 Unique하기 때문에, description이 같아도 충돌하지 않는다.
심볼은 객체의 속성을 순회하기 위한 for in, Object.keys(obj), Object.getOwnPropertyNames(obj)에 걸리지 않는다.
기본적으로 열거대상에서 제외된다. 
암묵적으로 형변환이 불가능하다. 
   ex) true  + 1 return 값은 2 이다 왜냐하면 true가 암묵적으로 1로 형변환 되기 떄문이다.
*/
const a = Symbol('a');
const b = Symbol('a');
console.log('a===b  ' , a===b); 


const x = () =>{
  const a = Symbol('a'); 
  return {
    [a] : 10, //심볼을 객체의 프로퍼티로 하기 위해서는 []를 해야 한다. 문법이자 약속 
    a: a,
     
  }
}
const y = x(); 

console.log('y------------->', y);  
console.log('y.a----------->',y.a); 
console.log('y[y.a]-------->',y[y.a]); 


console.log('----------------------------------')


const NAME = Symbol('이름'); 
const GENDER = Symbol('성별'); 
//아... Symbol은 열거 대상에서 제외되기 때문에 
//예를들면 조건식을 달아서 for문을 돌릴 필요가 없다... 이런 의미지 않을까? 


const iu = {

        [NAME] : '아이유',    //Symbol을 객체의 프로퍼티 키 로 하기 위해서는 반드시 []를 해줘여 한다.(문법이자 약속) 
        [GENDER] : 'female', 
        age :26, 
        hobby:'독서', 
}

const suzi = {

    [NAME] : '수지', 
    [GENDER] : 'female', 
    age :26,
    hobby:'tv시청'


}

const ji = {

    [NAME] : '정준일', 
    [GENDER] : 'male', 
    age :30,
    hobby:'게임하기'


}

//console.log(iu[NAME],suzi[NAME],ji[NAME])
//console.log(iu,suzi,ji)



console.log('----------------------------------')

//Symbol은 열거 대상에서 제외이다. 
for(const i in iu){
  //console.log(iu[i]); 
}

//일반 prop만 접근 가능 
// Object.getOwnPropertyNames(iu).forEach(v=>{
//  // console.log(v, '  : ' , iu[v]);
// })

//이 메소드를 Symbol prop만 접근 가능 
// Object.getOwnPropertySymbols(iu).forEach(v=>{
//   console.log(v, " : " , iu[v]); 
// })

//Symbol prop  + 일반 prop 하려면.. 
// Reflect.ownKeys(iu).forEach(v=>{
//   console.log(v, " : " , iu[v]); 
// })



console.log('----------------------------------')

const obj002 = {
  [Symbol('a')] : 1


}
console.log('obj002 ==>' , obj002); 
const obj003 =Reflect.ownKeys(obj002); 

console.log('obj003[0] ==>' , obj003[0]); 
console.log('obj002[obj003[0]] ==> ',obj002[obj003[0]])