
const slow = () =>{

    console.log('slow'); 

    return new Promise((resolve,reject)=>{

      setTimeout(()=>{

          resolve(3000); 
          console.log('오반아 휘파람을 불어라'); 
      },3000);

    }); 
  
}

const fast = ()=>{

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            resolve(20); 
            console.log('오반!!'); 
        },1000); 
    }); 

}


let times = ()=>{

  setTimeout(() => {

    console.log('5초'); 
  }, 5000);
}


let times02 = () =>{


  setTimeout(() => {

    console.log('1초'); 
  }, 1000);

}


const test001 = ()=>{

  times(); 
  times02(); 

}

test001(); 






let timespromise = ()=>{

  return new Promise((resolve,reject)=>{
    setTimeout(() => {
         
      resolve('5')
      //console.log('5초')
    }, 5000);
  

  }); 
}


let times02promise = () =>{

  return new Promise((resolve,reject)=>{
    setTimeout(() => {
         
    resolve('1'); 
    //console.log('1초')
    }, 3000);
  

  }); 
  
}

const test002 = async ()=>{

 const five =  await timespromise(); 
 const one= await times02promise(); 
 console.log(five); 
 console.log(one); 

}

//test002(); 








const test = async () =>{

  const aa = await slow();
  const bb = await fast(); 

  console.log(aa); 
  console.log(bb); 

  console.log(aa," : " , bb);
}

//test(); 