

const resolveAfter2Seconds = ()=>{

  console.log('starting slow promise'); 

  return new Promise((resolve,reject)=>{

      setTimeout(()=>{

        resolve(20);  //resolve는 맨 마지막에 실행된다. 
        console.log('slow promise is done'); 

      },2000);  


  });

};


const resolveAfter1Seconds = ()=>{

  console.log('starting fast promise'); 

  return new Promise((resolve,reject)=>{

      setTimeout(()=>{

        resolve(10);  
        console.log('fast promise is done'); 

      },1000);  
  });

};



const stillConcurrent = () =>{

  console.log('==CONCURRENT START with Promise.all==');

  //이런식으로 프로미스를 순서대로 할 수 도 있다. 
  Promise.all([resolveAfter2Seconds(),resolveAfter1Seconds()]).then((message)=>{
    console.log(message[0]);
    console.log(message[1]);
  })

}

stillConcurrent(); 


console.log('------------------------------------------'); 

//Promise.all의 return 값은 배열 그 자체이고 
//then 절에서 message[0], message[1], ... 처럼 각 배열의 요소를 선택 할 수 있다. 
const testFunc = async ()=>{

  const list=['a','b','c','d']; 

  const  returnValue=  Promise.all(list.map((v)=>v)); 
   
      return returnValue;

}
const ttt = testFunc(); 
ttt.then((message)=>console.log(message[0]))
.catch((err)=>{
  console.log(err); 
}) 