const axios = require('axios'); 
const fetch =require('node-fetch');
//axios.defaults.baseURL =  'http://www.kobis.or.kr';
const param1 = '/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=0629834ae89dc98668de1dd8f46c9b34&targetDt=20120101';
const param2 = 'https://www.hubpass.co.kr/asp/standard/DealerInfo03.jsp?region=Incheon'; 
const param3 ='http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=0629834ae89dc98668de1dd8f46c9b34&targetDt=20120101'; 
//방법1
// axios.get('https://www.hubpass.co.kr/asp/standard/DealerInfo03.jsp?region=Seoul')
//   .then((response)=>{
//      console.log(JSON.stringify(response.data));
  

//     console.log(response.status);
//     console.log(response.statusText);
//    console.log(JSON.stringify(response.headers));

//   })

console.log('==========================================================================');


//방법2
  // function* test(){
    
  //   const abc = yield axios.get(param2); 
    
  //   return abc; 
    
   
  // }

  // const iter = test(); 
  // const request =iter.next().value;
  // request.then(res=>{
  //   console.log(JSON.stringify(iter.next(res.data))); 
  // })

  console.log('=========================================================================='); 

  //방법4 
  // function* func(){

  // const result = yield axios.get(param2);
  //   return result;

  // }

  // const gen =func(); 
  // gen.next().value.then((res)=>{
  //   console.log(JSON.stringify(res.data))

  // }).catch(e=>{
  //   console.error(e); 
  // })
  


//   async function dealerInfoListAPI(){
//     //return axios.post('/dealerInfo/select',{data}); 
//     const result =await axios.get('https://www.hubpass.co.kr/asp/standard/DealerInfo03.jsp');
//     const result22 =result.json(); 
//       return result22;
    
// }

// const tes = axios.get(param2);

// tes.then(res=>{

//     res.data.map((v)=>{
//       console.log(v.dealerCode);
//     })
// }).catch(e=>{
//   console.error(e); 
// })



// async function test(){
//   const abc = await axios.get('https://www.hubpass.co.kr/asp/standard/DealerInfo03.jsp'); 
//   console.log(abc.data); 
// }

// test(); 


// async function test(){

//   const result = await fetch('https://api.hnpwa.com/v0')
//   const json = await result.json(); 
  
//   return  json; 
// }


// const abc = test(); 

// abc.then((res)=>{
//   console.log(JSON.stringify(res))
// })


const fetchData = async () =>{

  try{
    const response = await fetch('https://www.hubpass.co.kr/asp/standard/DealerInfo03.jsp?region=Seoul');
    const data = await response.json(); 
    
    return JSON.stringify(data); 

  }catch(e){
    console.log('에러발생=>', JSON.stringify(e)); 
  }

}

const result  = fetchData(); 
result.then((res)=>{
  console.log(JSON.stringify(res)); 
})