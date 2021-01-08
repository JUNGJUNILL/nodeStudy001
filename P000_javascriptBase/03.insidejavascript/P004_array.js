//배열 객체인 경우 Array.prototype 객체가 프로토타입 객체가 된다. 
//Array.prototype 객체는 배열에서 사용할 push(), pop() 같은 표준 메서드를 표함하고 있다. 
//Array.prototype 객체의 프로토타입은 Object.prototype 객체가 된다. 


//배열의 프로퍼티 동적 생성 
var arr = ['zero','one','two']; 
arr.color = 'blue'; 
arr.name  = '정준일'; 
arr[3] = 'red'; 
//배열의 length 프로퍼티는 배열 원소의 가장 큰 인덱스가 변했을 경우만 반환된다.

for(let i=0; i<arr.length; i++){
    console.log(arr[i]); 
}

console.log('------------------------------------'); 

for(var props in arr){
    console.log(arr[props]); 
}

console.log('------------------------------------'); 

//delete 연산 시 length 값 변화 없음 , undefined 할당 
//splice 함수로 요소 완전 삭제 가능,
var arr02 = ['a','b','c','d']; 
delete arr02[0]; 

for(let i=0; i<arr02.length; i++){
    console.log(arr02[i]); 
}

console.log('------------------------------------'); 


//유사배열 객체 : length 프로퍼티를 가진 객체를 유사배열 객체라고 부른다.
//유사 배열 객체도 배열 메서드를 사용가능하다. apply 메서드 활용
var obj01 = {name:'foo' ,length : 1}; 
Array.prototype.push.apply(obj01,['baz']); 
console.log(obj01); 
