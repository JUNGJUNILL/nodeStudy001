  
const fruit = 'fruit1=사과;fruit2=바나나;fruit3=배'
const resultSplit = fruit.split(';'); 
console.log(resultSplit); 
  
const resultMap = resultSplit.map((v)=>{

  return v.split('='); 

}); 


const resultReduce = resultMap.reduce((acc,[k,v])=>{

  acc[k.trim()] = v;
  //객체 '키' 가 동일 하면 가장 마지막 '키' : '값' 만 나온다.  

  return acc; 

},{}); 

console.log('resultReduce-->  ',resultReduce); 

console.log('--------------------------------------------------------------------------'); 


//   const parseCookies = (cookie = '') =>{
    
//     cookie
//       .split(';')
//       .map(v => v.split('='))
//       .reduce((acc, [k, v]) => {
//         acc[k.trim()] = decodeURIComponent(v);
//         return acc;
//       }, {});
  
//   }


  //req.headers.cookie : 요청해더 
  const parameter = 'connect.sid=s%3A4Zsdua_nwUG5UCObFCEOsY5_rjJkeThm.xvaXHDQimpu43mA9tbXSJwCs%2FMc9evILr%2BSrXret708; io=wtwgGYWRiH9ZcXJBAAAI; name=testNodeBird; mycookie=test; hollyShut=sex';


  //split의 반환값은 배열... 
  const resultSplit01  = parameter.split(';'); 
  const resultMap01 = resultSplit01.map((v)=>{
    
    return v.split('='); 

  })



  //초기값이 있으니 0번째 부터 순회 
  const resultReduce01= resultMap01.reduce((acc,[k,v])=>{
      
    acc[k.trim()] =  v;
    return acc; 

  },{})

  console.log(resultReduce01); 

