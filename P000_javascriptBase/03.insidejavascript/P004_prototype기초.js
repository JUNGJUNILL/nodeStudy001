//자바스크립트의 모든 객체는 자신의 부모 역할을 하는 객체와 연결되어 있다. 
//이러한 부모 객체를 프로토타입(객체) 라고 부른다.

var foo = {
    name:'정준일',
    age : 31
}

console.log(foo.toString()); 

//자바스크립트의 모든 객체는 자신의 프로토타입을 가리키는 [[Prototype]]라는 숨겨진 프로퍼티를 가진다. 
//_proto_가 바로 숨겨진 [[Prototype]] 프로퍼티를 의미한다. 
//즉 foo 객체는 자신의 부모 객체를 _proto_라는 내부 프로퍼티로 연결하고 있는 것이다.

//객체 리터럴 방식으로 생성된 객체의 경우 Object.prototype 객체가 프로토타입 객체가 된다. 
//foo 객체의 __proto__ 프로퍼티가 가리키는 객체가 Object.prototype이며, 
//toString(), valueOf() 등과 같은 모든 객체에서 호출 가능한 자바스크립트 기본 내장 메서드가 포함되어 있다. 
//그 결과 foo 객체는 foo.toString()과 같이 자신의 프로토타입인 Object.prototype 객체에 포함된 다양한 
//메서드를 마치 자신의 프로퍼티인 것처럼 상속받아 사용할 수 있다. 


//배열 객체인 경우 Array.prototype 객체가 프로토타입 객체가 된다. 
//Array.prototype 객체는 배열에서 사용할 push(), pop() 같은 표준 메서드를 표함하고 있다. 
//Array.prototype 객체의 프로토타입은 Object.prototype 객체가 된다. 




//------------프로토타입 체이닝------------

function Person(name) {

    this.name = name; 

}

var foo001 = new Person('foo001'); 
console.dir(Person); 
console.dir(foo001);

//p.122 ~ p.123
//foo001 객체는 Person() 함수의 prototype 객체를 [[Prototype]] (_proto_) 링크로 연결한다.
//결국, prototype 프로퍼티나 [[Prototype]] 링크는 같은 프로토타입 객체를 가리키고 있다. 

//결국 자바스크립트에서 객체를 생성하는 건 생성자 함수의 역할이지만, 생성된 객체의 실제 부모 역할을 하는 건 
//생성자 자신이 아닌 생성자의 prototype 프로퍼티가 가리키는 프로토타입 객체다. 

//Person() 생성자 함수의 prototype 객체의 _proto_ 프로퍼티가 같은 프로토타입 객체를 가리키고 있다는 것을 알 수 있다. 



//객체 리터럴 방식 
var myObject = {
    name : 'foo',
    sayName : function(){
        console.log('My name is ' + this.name); 
    }
}
//객체 리터럴 방식으로 객체 생성시 생성한 객체는 Object()라는 내장 생성자 함수로 생성된 것이다. 
//Object() 생성자 함수도 함수 객체이므로 prototpe이라는 프로퍼티 속성이 있다. 
//myObject는 Object() 함수의 prototype 프로퍼티가 가리키는 Object.protytpe 객체를 자신의 프로토타입 객체로 연결한다. 




//생성자 함수 방식 
function myObject01(name, age, hobby){

    this.name= name; 
    this.age = age; 
    this.hobby = hobby; 

} 

var foo002 = new myObject01('foo002' , 30 , 'sex'); 
console.log(foo002.hasOwnProperty('name')) //true 
console.dir(myObject01.prototype);        
//foo002 객체의 생성자는 myObject01() 함수이다. 
//foo002 객체의 프로토타입 객체는 자신을 생성한 myObject01() 생성자 함수 객체의 prototype 프로퍼티가 가리키는 객체(myObject01.prototype)가 된다. 
//즉, 이를 정리하면 foo002 객체의 프로토타입 객체는 myObject01.prototype이 된다. 

//하지만 myObject01.prototype에는 hasOwnProperty메서드가 없다. 
//그럼에도 출력이 hasOwnProperty함수가 잘 실행되는 이유는 
//myObject01.prototype 역시 자바스크립트 객체이므로 Object.prototype을 프로토타입 객체로 가진다. 
//따라서 프로토타입 체이닝은 Object.prototype 객체로 계속 이어진다. 
//그리고, Object.prototype 객체의 hasOwnProperty 메서드가 있으므로 잘 실행이 되는 것이다. 

//자바스크립트에서 Object.prototype 객체는 프로토타입 체이닝의 종점이다. 앞에서 살펴봤듯이 객체 리터럴 방식이나 생성자 함수를
//이용한 방식이나 결국엔 Object.prototype에서 프로토타입 체이닝이 끝나는 것을 알 수 있다. 










//기본 데이터 타입 확장 
//Number.prototype , String.prototype , Array.prototype 
//이러한 프로토 타입 또한 자신의 프로토타입이 있으며, 그것이 바로 Object.prototype이다. 따라서 hasOwnPrototype() 같은 Object.prototype 메서드를 호출 할 수 있다. 





//프로토타입도 자바스크립트 객체다.
function Person003(name){

    this.name = name; 
}


var foo003 = new Person003('정준일'); 


//foo003.sex() //foo003.sex is not a function

Person003.prototype.sex = function(){
    console.log('끼잉끼잉...'); 
}

foo003.sex() //끼잉끼잉






//프로토타입 메서드와 this 바인딩
//메서드 호출 패턴에서의 this는 그 메서드를 호출한 객체에 바인딩된다는 것을 기억하자. 
function Person004(name){

    this.name = name; 
}

Person004.prototype.getName = function(){

    return this.name ; 
}

var foo004 = Person004('주닐정'); 

console.log(foo004.getName()); //주닐정 

Person004.prototype.name = '펄쓴~'; 
console.log(Person004.prototype.getName()); //펄쓴~
//바로 Person004.prototype.getName() 메서드를 호출하면 어떻게 될까? 
//이때는 getName() 메서드를 호출한 객체가 Person004.prototype이므로 this도 여기에 바인딩 된다. 
//Person004.prototype 객체가 name 프로퍼티를 동적으로 추가하고, '펄쓴~'을 저장했으므로 this.name은 '펄쓴~' 이 출력된다. 









//디폴트 프로토타입은 다른 객체로 변경이 가능하다. 
function Person005(name){
    this.name = name; 
}


//console.log(Person005.prototype.constructor)

var foo005 = new Person005('foo005'); 
//console.log(foo005.country); 

//디폴트 프로토타입 객체 변경 
Person005.prototype = {
    country :'korean', 
}

var foo005_1 = new Person005('foo005_1'); 
console.log(foo005.country); 
console.log(foo005_1.country); 
console.log(foo005.constructor); 
console.log(foo005_1.constructor)














//갹체의 프로퍼티 읽거나 메서드를 실행할 때만 프로토타입 체이닝이 동작한다. 
function Person006(name){
    this.name = name; 
}

Person006.prototype.country = 'KOREA';

var foo006 = new Person006('foo006'); 
var foo006_1 =new Person006('foo006_1'); 

console.log(foo006.country);        //KOREA
console.log(foo006_1.country);      //KOREA

foo006.country='USA';  

console.log(foo006.country);        //USA 
console.log(foo006_1.country);      //KOREA


