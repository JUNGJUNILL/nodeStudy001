
//일반 함수를 promise 화
//시키는 모듈이구나.
const util = require('util');


const test01 = (parapms)=>{

    console.log(parapms+'normal function01');

}

const makePromise = util.promisify(test01); 

const asyncFunction = async()=>{
    await makePromise('정준일-->'); 
}


asyncFunction();




console.log('------------------------------------------------------------------promise.all'); 


const p1 = Promise.resolve(3); 
const p2 = 1337; 
const p3 =new Promise((resolve,reject)=>{

        resolve('foo'); 

});


Promise.all([p1,p2,p3]).then(message=>{
    console.log('Give me a message-> :    ' , message); 
})


