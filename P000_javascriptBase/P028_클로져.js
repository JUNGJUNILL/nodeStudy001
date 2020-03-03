var global_name = '홍길동'; 

//자바스크립트는 일급 합수를 지원하므로 함수를 변수에 저장하고, 
//파라메터로 함수를 넘기고, 함수를 반환하는 것이 가능하다. 
function makePrinter(){


    var outer_name='김철수'; 

    function printName(){

        var inner_name = '김영희'; 

        console.log(global_name);
        console.log(outer_name);
        console.log(inner_name);

    }

    return printName; 

}

var print =makePrinter(); //이것이 클로져이다. 

//지역변수의 수명은 짧다. 함수가 호출될 때 함수 안에서 생성되고, 
//함수가 종료될 때 지워진다. 
//클로져 같은 경우, makePrint() 함수 내에서 정의된 지역 변수인 outer_name 이
//자신의 수명이 끝나는 makePrinter() 호출 후에 print() 호출에도 살아 있음(김철수) 
//클로저는 자신을 포함하고 있는 외부 함수의 인자, 지역변수 등을 외부 함수가 종료된 후에도 사용할 수 있따. 
//이러한 변수를 자유 변수 라고 부릅니다. 
//클로저에 생성될 때 범위내의 지역 변수들을 자유 변수로 만드는 것을 capture라고 합니다. 
//이 자유 변수는 외부에서는 직접 접근할 수 없고, 항상 클로져를 통해서만 사용할 수 있다. 
//이 처럼 자유 변수를 가지는 코드를 클로져라고 합니다. 

print(); 


var counter = (function(param){


    var privateCounter = 0; 

    function changeCounter(param){
        privateCounter+=param; 
    }


    return { // 증가 기능을 가지는 public 함수 입니다. 
        
        inc: function() { changeCounter(1); }, // 감소 기능을 가지는 public 함수 입니다.
        dec: function() { changeCounter(-1); }, // public 함수 입니다.(현재값 조회) 
        val: function() { return privateCounter; } };




})(); 


counter.inc(); 

console.log("after increment : " + counter.val());
console.log(counter.val());


function makeGreeting(name) {
    var greeting =name+1;

    return function() {
        console.log(greeting + name);
    };
}

var g1 = makeGreeting(1);
var g2 = makeGreeting(2);


g2();





function a(){

    var b = 0; 
    var plus = 1; 
    var preParam =""; 

    return function closure(param){
        b= b+plus; 
        if(param !== preParam){
            console.log('ddd'); 
            b=0; 
        }else{
            console.log('ssss'); 
        }

        console.log(b); 
        
	     	if(b % 2 === 0){
                console.log("짝수"); 
        }else{
            console.log("홀수"); 
        }
        preParam = param; 
        return this; 


    };


}

var func = a(); 
func('a'); 
func('b');
 func('b'); 
 func('b'); 