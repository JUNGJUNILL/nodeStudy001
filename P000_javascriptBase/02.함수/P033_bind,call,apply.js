
//bind 함수 
//call은 바로 실행 bind는 함수 반환한다는 차이점이 있다.
function sum(num) {

    return num + this.num1 + this.num2; 

}

var myObj = {num1:100,num2:100}; 

var custumSum  = sum.bind(myObj); 
console.log(custumSum(5)); 

console.log('----------------------------------'); 


//call 
var obj = {string:'hello',yell:function(){console.log(this.string)}}
var obj2={string:'빠락스 비어'}; 

obj.yell(); 
obj.yell.call(obj2); 
console.log('----------------------------------'); 


//apply 
function foo1(a, b, c) {
    try{

    let result =Array.prototype.slice.apply(arguments);
    result.map((v)=>{
        console.log(v); 
    })

    }catch(e){
        console.error(e);
    }
    
  }
  
  foo1(1, 2, 3); // 1,2,3

  console.log('----------------------------------'); 

  function foo2(a,b,c){
      try{
        


      }catch(e){
          console.error(e); 
      }
  }




