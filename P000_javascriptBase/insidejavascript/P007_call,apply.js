// apply(thisArg,argArray)
//thisArg  : apply() 메서드를 호출한 함수 내부에서 사용한 this에 바인딩할 객체를 가리킨다. 
//           즉, 첫 번째 인자로 넘긴 객체가 this로 명시적으로 바인딩되는 것이다. 

//argArray : 함수를 호출 할 때, 넘길 인자들의 배열을 가리킨다. (call은 두 번 째 인자가 배열이 아님)

//결론     : 두 번째 인자 인 argArray 배열을 자신을 호출한 함수의 인자로 사용하되, 이 함수의 내부에서 사용된 this는 
//           첫 번째 인자인 thisArg 객체로 바인딩해서 함수를 호출하는 기능인 것이다. 
function Person01(name, age, gender){

    this.name = name;
    this.age  = age; 
    this.gender = gender; 

}

var foo01 = {}; 

Person01.apply(foo01, ['foo',30,'man']); 

console.log(foo01); 





console.log('------------------------------------------------------')

function myFunction(){
    console.dir(arguments); 
    var args = Array.prototype.slice.apply(arguments); 
                               //slice() - 인자가 없는 경우 이 메서드를 호출한 배열을 복사한 새로운 배열을 생성한다. 
    console.log(args); 
}

myFunction(1,2,3); 








console.log('------------------------------------------------------')

var aaa = function(a,b,c){
    console.log(arguments);

    var args = Array.prototype.slice.apply(arguments); 
    args.map(v=>{
        console.log(v); 
    })
    
}

aaa(1,2,3); 



console.log('------------------------------------------------------')


//유사배열 
var yoosa = {

    0:'a',
    1:'b',
    2:'c',
    length:3
    
    }; 
    
    var array = ['a','b','c']; 
    
    array.forEach(function(v){
        console.log(v); 
    });
    
    console.log('---------------------------'); 
    
    
    Array.prototype.forEach.call(yoosa,function(el){
        console.log(el); 
    });
    
    console.log('---------------------------'); 
    console.log(Array.isArray(yoosa)); 