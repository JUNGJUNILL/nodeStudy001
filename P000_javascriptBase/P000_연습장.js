/*
const condition =true; 
const promise = new Promise((resolve,reject)=>{

    if(condition){
        resolve('헬로우 월드');
    }



}); 


promise.then((message)=>{

    console.log(message)
    
    return new Promise((resolve,reject)=>{

        resolve(message+"|world|");
    });

}).then((message01)=>{

    console.log(message01);

}).catch((error)=>{

}); 
*/

const util = require('util');
const fs = require('fs');

const stat = util.promisify(fs.stat);

async function callStat() {
  const stats = await stat('.');
  console.log(`This directory is owned by ${stats.uid}`);
}

callStat()






console.log('--------------------------------------'); 



const sec01 = () =>{

    return new Promise((resolve,reject)=>{

        
            setTimeout(() => {
                resolve('1초'); 
        
            }, 1000);
    }); 

}

const sec02 = () =>{

    return new Promise((resolve,reject)=>{

        
            setTimeout(() => {
                resolve('5초'); 
        
            }, 5000);
    }); 

}



 const asyncCall= async ()=>{

    console.log('calling'); 
    const result01 = await sec01(); 
    const result02 = await sec02();
    
   
    console.log(result01);
    console.log(result02);
   
   
    

  
  }
  asyncCall();

  console.log('--------------------------------------'); 