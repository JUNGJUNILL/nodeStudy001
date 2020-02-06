//this는 현재 실행 문맥이다. 
/*
alert(this === window) // true, 호출자는 window

const caller = {
  f: function() {
    alert(this === window)
  },
}
caller.f() // false, 호출자는 caller 객체
*/
function Person(name,gender){
    this.name = name; 
    this.gender = gender; 
    this.sayHello = function() {
        console.log(this.name + ' said Hello! '); 
    }
}

var zero = new Person('zero','m'); 
var hero = new Person('hero','f');

zero.sayHello(); 
hero.sayHello(); 


console.log('-----------------------------'); 

function Person01(name, gender){
    this.name = name; 
    this.gender = gender; 
}
Person01.prototype.sayHello = function(){
    console.log(this.name + "said HELLO"); 
}

var zero1 = new Person01('zero','m'); 
var hero1 = new Person01('hero','f');

zero1.sayHello(); 
hero1.sayHello();


//같은 생성자로부터 만들어진 객체들은 이 원형 객체를 공유합니다. 
//따라서 Person01의 prototype 객체에 sayHello라는 메소드를 넣으면 
//Person 생성자로 만든 모든 객체는 이 메소드 사용이 가능하다. 

//그런데 this.sayHello 보다 prototype에 Person.prototype.sayHello로 넣는게 더 효율적이다.
//prototype은 모든 객체가 공유하고 있어서 한 번만 만들지만, this에 넣은 것은 객체 하나를 만들 때마다
//메소드도 하나씩 만들어지기 때문에 불필요한 메모리 낭비가 발생한다. 





console.log('-----------------------------'); 
// 아래와 같은 6가지 값은 자바스크립트에서 falsy 값으로 통용됩니다.
// false
// 0
// ""
// null
// undefined
// NaN

//null, undefined 
//null == undefined       true
//null == null            true
//undefined == undefined  true

//NaN은 어떠한 값과도 동일하지 않다. 
//NaN == NaN false




function outerFunction () {
  const outer = `I see the outer variable!`;

  return function innerFunction () {
      console.log(outer);
  }
}
outerFunction()() // I see the outer variable!


function makeCake(){

  setTimeout(_=>console.log('make'),1000); 
}



//this 
//this는 실행문맥이다. 
function a(p1,p2){

  console.log(this === window); //true
  return p1+ p2; 
}
//함수의 실행은 전역에서 실행되는 함수이기 때문에 Window객체의 메소드로써 사용되는것과 동일하다. 
//따라서 함수의 실행 타입에서의 this는 Window입니다. 

function b(p1,p2){

  'use strict' //엄격모드, 함수 내부 최상단에 use strict 라는 예약어를 사용한 함수에서 this는 undefined이다.  
  console.log(this === undefined) //true 
  return p1+p2; 
}

var calc = {
  num :0, 
  increment : function(){
    //calc객체의 메소드입니다. 
    //따라서 increment함수의 this는 메소드가 정의되 있는 객체(calc)
    console.log(this === calc) //true; 
    this.num+=1;
    return this.num; 
  }
}
console.log(calc.increment()); 



//생성자 함수 
//생성자를 실행할 때의 this는 새롭게 만들어질 객체를 의미한다. 
function Foo(){

  console.log(this instanceof Foo); 
  this.property="default value"; 


}

var obj01 = new Foo(); 
console.log(obj01.property); 

function Foo01(name,color){

    this.name= name; 
    this.color = color; 
    this.isWindow = function(){
      //return this === window; 
    }
    

}
const newObj = new Foo01('nana', 'yellow')
console.log(newObj.name) // nana
console.log(newObj.color) // yellow
console.log(newObj.isWindow()) // false
//new 키워드로 새로운 객체를 생성했을 경우 생성자 함수 내의 this는
//new를 통해 만들어진 새로운 변수가 됩니다. 


const testObj = {
  name : 'john', 
  age  : 1500,
  nickName : 'man from earth', 
  getName : function(){
    return this.name; 
  }
}

console.log('testObj==> ',testObj.getName());     //john 
const testobj01 = testObj; 
testobj01.name='chris'; 
console.log('testObj  ==> ',testObj.getName());   //chris 
console.log('testobj01==> ',testobj01.getName()); //chris 
//testObj01은 testObj의 레퍼런스 변수이므로 testObj01을 변경하면
//testObj도 변경된다. 
//원시 타입이 아닌 값(Arrau, Function, Obect)이 할달된 변수들은 그 값으로 
//향하는 참조(reference)를 갖게 됩니다. 참조(reference)는 메모리에서의 
//객체의 위치를 가리키고 있습니다. 변수는 실제로 값을 가지고 있지 않습니다.

//변수 testObj   값 : '#001'   주소 '#001' Object {...}
//변수 testObj01 값 : '#001'   주소        Object

var obj = { first: 'reference' };
var obj = { second: 'ref2' }
//변수 obj   값 : '#321'   주소 '#123'  { first: 'reference' }
//                         주소 '#321'  { second: 'ref2' }
console.log('obj==> ',obj.first) //undefined 인 이유 
                       //남아있는 객체를 가리키는 참조가 남아 있지 않을 때 
                       //주소값이 #123이 보이는 것처럼, 자바스크립트 엔진은 
                       //가비지 컬렉션을 동작시킬 수 있습니다. 
                       //이것은 프로그래머가 모든 참조를 날리고 객체를 더 이상
                       //사용할 수 없게 된 뒤 자바스크립트 엔진은 그 주소가 
                       //사용되지 않는 객체를 메모리로부터 안전하게 지워버리는 것을 
                       //의미한다. 이 경우에는 객체 { first: 'reference' }가 
                       //더 이상 접근 불가능하고 가비지 콜렉션 될 수 있습니다. 


var array01 = {test:123}; 
var array02 = {test:123}; 
console.log(array01 == array02);
console.log(array01 === array02);

var array01Str = JSON.stringify(array01); 
var array02Str = JSON.stringify(array02);
console.log(array01Str == array02Str);
console.log(array01Str === array02Str);


function changeAgeImpure(person) {
  person.age = 25;
  return person;
}

var alex = {
  name: 'Alex',
  age: 30
};

var changedAlex = changeAgeImpure(alex);
console.log(alex);        // -> {name: 'Alex', age: 25}
console.log(changedAlex); // -> {name: 'Alex', age: 25}
                          //객체를 받는 함수는 주변 스코프들의 상태를 변화시킬 수 있다.
                          //비순수함수는 객체를 받아서 age 프로퍼티를 25라는 값으로 바꾼다.
                          //객체로 받아온 값에 그대로 명령을 실행하기 때문에 이 함수는 alex 객체를
                          //직접적으로 변화시킨다. 

function changeAgePure(person) {
var newPerson = JSON.parse(JSON.stringify(person));
newPerson.age = 25;
return newPerson;
};

var alex01 = {
  name: 'Alex',
  age: 30
};

var alexChanged = changeAgePure(alex01);

console.log(alex01);      // -> {name: 'Alex', age: 30}
console.log(alexChanged); // -> {name: 'Alex', age: 25}
                      
//부장님 질문사항
const  changeAgeAndReference = (person) =>{
  person.age = 25;
  person = {
      name: 'John',
      age: 50
  };
  return person;
}

const personObj1 = {
  name: 'Alex',
  age: 30
};

const personObj2 = changeAgeAndReference(personObj1);
console.log('personObj1=> ',personObj1);  
                        //함수의 파라메터로 할당되는 것들은 = 연산자로 할당하는 것과 같다. 
                        //함수속 person은 personObj1로 향하는 참조를 갖고 있어서 처음에 전달 받은 
                        //객체에 직접 변화를 가합니다. person을 새로운 객체로 재할당 한 뒤에는 원복 객체에 더 이상 
                        //영향을 미치지 않습니다. 
                        //재할당은 바깥 스코프에 있는 personObj1



console.log('personObj2=> ',personObj2);

console.log('-----------------------------'); 


//apply
//함수.apply(this,array); 
var Person = {

  fullName : function(){
      return this.firstName + " : " + this.lastName; 
  }

}

var Person1 = {

  firstName:"준", 
  lastName :"일"

}
console.log(Person.fullName.apply(Person1)); 

let o = {x:15}; 
function f(a,b){

    console.log(a + (this.x * this.x) +b); 
}

function fff(obj,func){

  let args = []; 
  for(let i=2; i<arguments.length; i++){
      args.push(arguments[i]); 
      console.log("arguments[i] ==>" , arguments[i]); 
  }

  func.apply(obj,args); 

}


fff(o, f, "The value of x squared = ", ". Wow!");





console.log('-----------------------------'); 

function vehicle(name,speed){

  this.name = name; 
  this.speed = speed; 

}

vehicle.prototype.drive = function(){
  console.log(this.name + ' runs at ' + this.speed); 
}

var tico = new vehicle('TICO',50); 
tico.drive(); 

function sedan(name,speed,maxSpeed){
  vehicle.apply(this,arguments); 
  this.maxSpeed = maxSpeed; 
}

