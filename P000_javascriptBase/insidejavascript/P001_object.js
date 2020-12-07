//Object 생성자 함수로 객체 생성 하는 방식 
var foo =new Object(); 

foo.name = '정준일'; 
foo.age  =31; 
console.log(foo); 


//Person() 생성자 함수 
var Person = function(name) {

    this.name = name; 

}
var test001 =new Person('정준일'); 
//--생성자 함수라는 것을 알려주기 위해 생성자 함수 생성 시 첫 글자는 대문자로 해 주는것이 상도덕이다. 

//--new로 호출하면 Person()은 생성자 함수로 동작한다. 

//--생성자 함수로 호출되면 함수코드가 실행되기전에 빈 객체가 생성된다. 여기서 생성된 빈 객체는 Person() 생성자 함수의 prototype 프로퍼티가 가리키는 객체(Person.prototype)를 [[Prototype]]링크로 연결해서 
//자신의 프로토타입으로 설정한다. 그리고 이렇게 생성된 객체는 생성자 함수 코드에서 사용되는 this로 바인딩된다. 


var qux = Person('주닐정'); 
console.log('qux==>', qux); //undefined 
console.log('this.name==>' , this.name);     //주닐정 
//--생성자 함수를 호출(new) 할 시 this는 새로 생성자 함수가 실핼될 때 생성되는 빈 객체에 this바인딩되고 
//생성자 함수를 그냥 호출하면 this가 전역객체 window에 바인딩 된다. 



var Person01 = function(name,age,gender){

    this.name = name; 
    this.age = age; 
    this.gender = gender; 

    return {name : 'bar' , age: 20, gender:'woman'}
}
var xyz =new Person01('foo',30,'man'); 
//생성자 함수의 리턴값을 생성한 객체가 아니라, 객체 리터럴 방식의 특정 객체로 지정한 경우 new 연산자로
//Person01() 생성자 함수를 호출해서 새로운 객체를 생성하더라도, 리턴값에서 명시적으로 넘긴 객체나 배열이 리턴된다. 

console.log('xyz==>', xyz); 


var Person02 = function(name,age,gender){
    this.name = name; 
    this.age = age; 
    this.gender = gender; 

    return 100; 
}

var qwer =new Person02('준준일', 31, 'man'); 
console.log('qwer ==>' , qwer); 
//불린, 숫자, 문자열의 경우에는 이러한 리턴값을 무시하고 this로 바인딩된 객체가 리턴된다. 






//객체 리터럴 방식으로 객체 생성 하는 방식
var foo01 = {
    name: '정준일', 
    age :  31, 
}





//프로퍼티 갱신
foo01['name'] = '주닐정'; 
console.log(foo01); 

for(var prop in foo01){
    console.log(prop ," : ", foo01[prop]); 
}

//객체 프로퍼티 삭제 
//객체의 프로퍼티만 삭제되고 객체 자체는 삭제못함
delete foo01['name']; 
console.log('delete name=>' , foo01); 