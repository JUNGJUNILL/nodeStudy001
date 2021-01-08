var a=100; 
var objA = {value:100}; 

function changeArgs(num, obj){
    num =200; 
    obj.value = 200; 

    console.log(num); 
    console.log(obj);
}

changeArgs(a,objA); 

console.log('--------------------------------'); 
console.log('a',a); 
console.log('objA',objA)
//자바스크립트 객체는 call by reference로 작동한다. 
//즉, 함수를 호출할 때 인자로 참조 타입인 객체를 전달할 경우,
//객체의 프로퍼티 값이 함수의 매개변수로 복사되지 않고, 인자로 넘긴 객체의 참조값이
//그대로 함수 내부로 전달된다. 때문에 함수 내부에서 참조값을 이용해서 인자로 넘긴
//실제 객체의 값을 변경할 수 있는 것이다. 