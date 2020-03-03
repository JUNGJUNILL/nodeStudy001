//this는 실행문맥이다. 

function Foo01(name,color) {


  this.name = name; 
  this.color = color; 
  this.isWindow  = function(){
    //return this ===window; 
  }

}
//new 키워드로 새로운 객체를 생성했을 경우 생성자 함수 내의 this는
//new를 통해 만들어진 새로운 변수가 됩니다. 
const newObj = new Foo01('nana','blue'); 
console.log(newObj.name); 
console.log(newObj.color); 
//console.log(newObj.isWindow());  false 




const testObj = {
  name : 'john', 
  age  : 1500,
  nickName : 'man from earth', 
  getName : function(){
    return this.name; 
  }
}

const testobj01 = testObj; 
testobj01.name = 'chris'; 
console.log('testObj  ==> ',testObj.getName());   //chris 
console.log('testobj01==> ',testobj01.getName()); //chris 
//testObj01은 testObj의 레퍼런스 변수이므로 testObj01을 변경하면
//testObj도 변경된다. 
//원시 타입이 아닌 값(Array, Function, Obect)이 할달된 변수들은 그 값으로 
//향하는 참조(reference)를 갖게 됩니다. 참조(reference)는 메모리에서의 
//객체의 위치를 가리키고 있습니다. 변수는 실제로 값을 가지고 있지 않습니다.

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
console.log(array01==array02);
console.log(array01===array02);


var array01Str = JSON.stringify(array01); 
var array02Str = JSON.stringify(array02);
console.log(array01Str == array02Str);
console.log(array01Str === array02Str);



//부장님 질문사항
var  changeAgeAndReference  = function(person){
  person.age = 25;
  person = {
      name: 'John',
      age: 50
  };
  console.log(person.name, " : " , person.age); 
  return person;
}




var personObj1 = {
  name: 'Alex',
  age: 30
};


const personObj2 = changeAgeAndReference(personObj1);
                        //함수의 파라메터로 할당되는 것들은 = 연산자로 할당하는 것과 같다. 
                        //함수속 person은 personObj1로 향하는 참조를 갖고 있어서 처음에 전달 받은 
                        //객체에 직접 변화를 가합니다. 
                        //person을 새로운 객체로 재할당 한 뒤에는 원복 객체에 더 이상 //영향을 미치지 않습니다. 
                        //재할당은 바깥 스코프에 있는 personObj1


console.log('personObj1=> ',personObj1);  


console.log('-----------------------start-apply(this,array)-----------------------'); 
var Person = {

  fullName : function(a,b,c){
    console.log(a,b,c); 
    return this.firstName + " : " + this.lastName + " : " + a+b+c; 
  }

}
var applyArray = ['1','2','3']; 
var Person1 = {
  firstName:"준", 
  lastName :"일"
}

console.log(Person.fullName.apply(Person1,applyArray)); 

let o = {x:15}; 
function f(a,b){

    console.log(a + (this.x * this.x) +b); 
}

function fff(obj,func){

  let args = []; 
  for(let i=2; i<arguments.length; i++){
      args.push(arguments[i]); 
      console.log("arguments[i] ==>" , arguments[i] , i); 
  }

  func.apply(obj,args); 

}



fff(o, f, "The value of x squared = ", ". Wow!");

console.log('-----------------------end-apply(this,array)-------------------------'); 
















console.log('-----------------------start-call(this,param1,param2...)-----------------------'); 

function thisTest(args){

  console.log(args,this); 

}

let customThis = {message:'내 이름은 옵티머스 프라임입니다.'}; 

thisTest.call(customThis,'test'); 



console.log('-----------------------end-call(this,param1,param2...)-------------------------'); 

//https://velog.io/@jakeseo_me/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%8C%81-This-%EC%A0%95%EB%A6%AC-x4k5upn6i6
let myObj = {

    name : 'jun', 
    callMyName : function(){
      console.log(this.name); 
    }
}