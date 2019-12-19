const array = [
    { id: 0, text: 'hello', tag: 'a' },
    { id: 1, text: 'world' , tag: 'b' },
    { id: 2, text: 'bye', tag: 'c' }
  ];


const promise = new Promise((resolve,reject)=>{

  const updateData = {id:0,text:'good',tag:'b',sex:'fe'}
  const updateResult = array.map(v=>v.id===updateData.id? {...v,...updateData}: v); 
  resolve(updateResult);

})

promise.then((message)=>{

  message.map((v)=>{
    console.log(v); 
  })

      return new Promise((resolve,reject)=>{
        
        const modifiedArray = message.map((v)=>v.id===1?({...v,text:'KOREAN'}):v)
        console.log('-----------------------------')
        resolve(modifiedArray)
      }); 


}).then((message)=>{

      message.map((v)=>{
        console.log(v); 
      })

}

).catch(error=>{

      console.log(error); 

})



/*
Object {id: 0, text: "good", tag: "b"}
Object {id: 1, text: "world", tag: "b"}
Object {id: 2, text: "bye", tag: "c"}
*/


const obj1 = {foo:'bar', x:42}; 
const obj2 = {foo:'foo', y:13}; 

const cloneObj = {...obj1,...obj2}
