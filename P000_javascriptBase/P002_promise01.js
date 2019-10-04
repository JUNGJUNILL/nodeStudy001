
const condition =true; 
const promise = new Promise((resolve,reject)=>{
    if(condition){ //더 이상 처리할 코드가 없을 때 resolve를 실행한다.
                   //즉, resolve는 가장 마지막에 실행된다. 
      resolve('성공'); 
      console.log('오반아 휘파람을 불어라')
      console.log('오반아 휘파람을 불어라')
      console.log('오반아 휘파람을 불어라')
      console.log('오반아 휘파람을 불어라')
      console.log('오반아 휘파람을 불어라')
      console.log('오반아 휘파람을 불어라')
      console.log('오반아 휘파람을 불어라')

    }else{
      reject('실패'); 
    }
}); 

//resolve가 실행되면 then절 실행, 
//reject가 실행되면 catch절 실행 



promise.then((message01)=>{

    console.log(message01); 

    return new Promise((resolve,reject)=>{

        resolve(message01 +  ' 정 준 일 '); 
        //reject('test'); 
    });

}).then((message02)=>{

    console.log(message02); 

    return new Promise((resolve,reject)=>{

        const array = ['정준일','정준이']; 
        //json, 배열, 객체 등 다 받을 수 있구나... 
        
       resolve(array); 
   

    });
}).then((param)=>{
    param.map(function(v,i,arr){
        console.log(v); 
    })
}).catch((error)=>{  
    console.log(error); 
})


console.log('------------------------------------------------------------------promise.all'); 


const p1 = Promise.resolve(3); 
const p2 = 1337; 
const p3 =new Promise((resolve,reject)=>{

        resolve('foo'); 

});


Promise.all([p1,p2,p3]).then(message=>{
    console.log(message); 
})




var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1);
var test = fruits.slice(1,3); 
console.log('test->' + test); 

console.log(citrus);