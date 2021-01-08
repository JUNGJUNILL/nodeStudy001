/*
함수 선언문 방식 
function abc(){}
    --호이스팅 가능

함수 표현식 방식 
var abc = function (){};
    --abc 변수는 함수 리터럴로 생성한 함수를 참조하는 변수이지 함수 이름이 아니다. (함수 변수)
    --function (){}은 이름이 없으므로 익명함수라고 부른다
    --세미콜론 사용 강력히 권고
    --호이스팅 불가능

기명 함수 표현식 방식 
var abc = function aaa(){}
abc() -- O 
      --자바스크립트 엔진이 var abc = function abc(){} 로 변경함 
      --함수 이름과 함수 변수의 이름이 abc로 같으므로, 함수 이름으로 함수가 호출되는 것처럼 보이지만, 
        실제로는 abc 함수 변수로 함수 외부에서 호출이 가능하게 된 것이다. 
      --재귀적으로 함수 호출이 가능하다. 

aaa() -- X --함수 표현식에서 사용된 함수 이름이 외부 코드에서 접근이 불가능함 



------------------------------------------------------------------------------------------------------------------------------------------------



함수도 객체다. 

function add(a,b){
    return a+b; 
}

add.result = add(3,2)
add.status = 'OK'
add.hello  = 'KOREAN'

console.log(add.result) //  5
console.log(add.status) //  OK 
console.log(add.hello) //   KOREAN

함수를 생성할 때 함수 코드는 함수 객체의 [[Code]] 내부 프로퍼티에 자동으로 저장된다. 





변수나 프로퍼티의 값으로 할당 가능
var foo001 = 100; 
var bar    = function () {return 100;}; 

var obj = {}; 
obj.baz = bar; 
console.log(obj.baz()) // 100 


함수를 인자로 전달 가능 
var foo = function(func){
    func(); 
}

foo(function(){
    console.log('abc'); 
}).


함수의 프로토타입(__proto__)은 Function.prototype 이라고 한다
Function.prototype 객체가 가지는 프로퍼티 
    constructor 
    toString()
    apply()
    call()
    bind()

prototype 프로퍼티 
   -- 모든 함수는 객체로서 prototype 프로퍼티를 가지고 있다. 
   -- __proto__ 와는 다른 것이다. 
    모든 객체에 있는 내부 프로퍼티인 __proto__는 객체 입장에서 자신의 부모 역할을 하는 프로토타입 객체를
    가리키는 반면, 함수 객체가 가지는 prototype 프로퍼티는 이 함수가 생성자로 사용될 떄, 이 함수를 통해 생성된
    객체의 부모 역할을 하는 프로토타입 객체를 가리킨다. 

*/


//내부 함수 : 함수를 호출하면 해당 함수 내부에서 사용된 this는 전역 객체에 바인딩 된다.  
            //EX) 
            // var values001 = 9999; 
            // var sayFoo = function (){
            //     console.log(this.values001); 
            // }

function parent(){

    var a = 100; 
    var b = 200; 

    //내부 함수에서는 자신을 둘러썬 부모 함수의 변수에 접근이 가능하다.(스코프 체이닝)
    function child(){
        var b = 300; 

        console.log(a);
        console.log(b); 
    }

    //내부 함수는 일반적으로 자신이 정의된 부모 함수 내부에서만 호출이 가능하다. 
    child(); 

}

parent(); 
// child() --에러 발생, 함수 스코핑, 함수 내부에 선언된 변수는 함수 외부에서 접근이 불가능 하다. 
//         --이 규칙은 내부함수도 그대로 적용된다. 때문에 부모 함수 외부에서 내부 함수를 호출하는 것이 불가능하다. 

console.log('-------------------------------------------------------------------------------');

//함수 외부에서도 특정 함수 스코프안에 선언된 내부 함수를 호출 할 수 있다. 
function parent01() {


    var aa =100; 

    var child01 = function (){
        console.log('칠드런==>',aa); 
    }

    return child01; 

}

var innerFnc = parent01(); 
innerFnc(); 


console.log('-------------------------------------------------------------------------------');


//this 바인딩
//객체의 프로퍼티가 함수 인 경우, 이 함수를 메서드라고 부른다. 
//이러한 메서드를 호출 할 때 메서드 내부 코드에서 사용된 this는 해당 메서드를 호출한 객체로 바인딩된다. 
var myObject = {
    name: 'foo',
    sayName : function(){
        console.log(this.name); 
    }
}

var otherObject = {
    name : 'bar',
}; 

otherObject.sayName = myObject.sayName;

myObject.sayName(); 
otherObject.sayName(); 


console.log('-------------------------------------------------------------------------------');


//자바스크립트에서는 함수를 호출하면, 함수 내부 코드에서 사용된 this는 전역 객체에 바인딩된다. 
//브라우저에서 자바스크립트를 실행하는 경우 전역 객체는 window 객체가 된다. 
//이러한 특성은 내부 함수를 호출 했을 경우에도 동일하게 적용된다. 

//(메소드와 내부함수는 다른 것이다. 내부함수는 함수내의 또 다른 함수 이다.)
var value = 100; 

var myObject001 = {
    
    value:1, 

    //func1은 메서드
    func1 : function() {
        var that = this;
        this.value+=1;
        console.log('func1() called this.value : ' + that.value);

        //내부함수 : 함수이기 때문에 this는 전역객체로 바인딩 된다. 그래서 객체의 this를 that에 할당한 것이다. 
        func2 = function(){
            that.value+=1;
            console.log('func2() called this.value : ' + that.value);

            //내부함수 : 함수이기 때문에 this는 전역객체로 바인딩 된다. 그래서 객체의 this를 that에 할당한 것이다. 
            func3 = function(){
                that.value+=1;
                console.log('func3() called this.value : ' + that.value);
    
                
            }
            func3(); 

        }
        func2(); 

    }


}; 


myObject001.func1(); 


console.log('-------------------------------------------------------------------------------');

