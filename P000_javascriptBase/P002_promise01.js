
const condition =true; 
const promise = new Promise((resolve,reject)=>{
    if(condition){
      resolve('성공'); 
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