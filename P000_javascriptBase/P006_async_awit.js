
//async 함수에는 await식이 포함될 수 있다. 
//이 식은 async 함수의 실행을 일시 중지하고,
//Promise의 해결을 기다린 다음 async 함수의 실행을 다시 시작하고
//완료 후 값을 반환한다. 
//즉, await은 promise의 resolve된 데이터를 받는다. 

//async / await 함수의 목적은 사용하느느 여러 promise의 동작을 동기스럽게 
//사용할 수 있게 하고, 어떤 동작을 여러 promise의 그룹에서 간단하게 동작하게 하는 것이다. 



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

const sequentialStart = async() =>{

  console.log('==SEQUENTIAL START==');
  const slow = await resolveAfter2Seconds();

  const fast = await resolveAfter1Seconds();
  console.log(slow);
  console.log(fast);
}


sequentialStart(); 