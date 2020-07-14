//axios 
const fetch = require('node-fetch'); 



const test =fetch("http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json").then(result=>result.json());
test.then((message)=>{
    const abc = JSON.stringify(message)
    const aaa = JSON.parse(abc.data); 
    console.log(aaa);
})


const obj = {

    "감자" : {
        kg:30, 
         },

    "호박" :{
        kg:31,

    },

    "수박" :{
        kg:32, 
    }
  
}
console.log(obj); 

// //어떤 짓거리를 해서 list화 해서 map으로 돌리고 싶다. 
// //이 어떤 짓거리를 어캐 해야 할까? 
// //obj[???]

// //출력결과...
// //감자
// //호박
// //수박  




// console.log(obj.list)

// obj.list.map((v,i)=>console.log('ㅇㅇ' + v[i])); 

// const objList = {
// data : [
//         {name:"정준일",age:30},
//         {name:"정준이",age:31},
//         {name:"정준심",age:32},
// ]

// }

