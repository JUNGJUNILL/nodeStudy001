
// for(let i=0; i<4; i++){

//     console.log(Math.floor(Math.random()*i))

// }

// console.log('-------------------------------'); 

// console.log(Math.floor(1.2));  //버림
// console.log(Math.ceil(1.2));   //올림
// console.log(Math.round(1.5));  //반올림 



// // return 배열
// // https://im-developer.tistory.com/101 다시 공부 하쟈

// //Math.random() 0 보다 크고 1보다 작은 난수 생성하므로 곱하기 9를 할 경우
// //0 ~ 8 까지의 랜덤한 숫자가 나온다. 

// // console.log(Math.floor(1.2));  //버림
// // console.log(Math.ceil(1.2));   //올림
// // console.log(Math.round(1.5));  //반올림 

// const candidate = [1,2,3,4,5,6,7,8,9]; 
// const array = []; 
// for(let i=0; i<4; i++){
//     console.log(Math.floor(Math.random()*(9-i))); 
//     const chosen = candidate.splice(Math.floor(Math.random()*(9-i)),1); 
//     array.push(chosen); 
    
// }
// console.log(array);


// // const candidate = [1,2,3,4,5,6,7,8,9]; 
// // console.log(Math.floor(Math.random()*(9-1))); 


// // const months = ['Jan', 'March', 'April', 'June'];
// // months.splice(1, 1);

// // console.log(months);



// //10부터 30까지의 난수를 생성해보자.
// /*
// const randomNum = (lower,upper)=>{
//     let array = [];
//         for(let i=0; i<10; i++){
//         let myRandom = Math.floor((Math.random()*(upper - lower))+10)
//         array.push(myRandom);
        
//     }
   
//     for(let j=0; j<array.length; j++){
//         console.log(array[j]);
//     }



// }
// randomNum(10,31); 
// */

// const months = ['1','2','3','4']; 
// months.splice(5,1,'5'); 
// console.log('months-->',months); 




// console.log('-------------------------------'); 

// const lottoNum = ()=>{

//     for(let i=0; i <6; i++){
//         console.log(Math.floor(Math.random()*45+1));
//     }


// }
// lottoNum()



// console.log('중복제거01-------------------------------'); 


// const lotteNum01 = ()=>{

//     let lotto = []; 
//     let i=0; 

    
//     const sameNum  = (n) =>{
//         for(let i=0; i<lotto.length; i++){
//             if(n === lotto[i]){
//                 return true;
//             }
//         }
//         return false;
//     }


//     while(i<6){

//             let n = Math.floor(Math.random()*45+1); 

//             if(!sameNum(n)){
//             lotto.push(n); 
//             i++;

//         }
//     }


//     return lotto; 

// }

// lotteNum01().map((v)=>{
//     console.log(v);
// }) 




// console.log('중복제거02-------------------------------'); 

// const lotteNum02 = () =>{

//     let lotto = []; 
//     let i=0; 

//     const sameName = (n)=>{
//         return lotto.find((e)=>{e===n}); 
//     }

//     while(i<6){
//         let n = Math.floor(Math.random()*45+1); 
//         //45
//         //45
//         //12
//         //12
//         //6
//         //7
//         if(!sameName(n)){

//             lotto.push(n);
//             i++; 
//         }
//     }
    
//     return lotto; 

// }


//컴파일러가 { } 가 블록인지, 객체인지 헷갈려하지말라고 앞뒤로 ( ) 를 붙여야 한다. 
const number01 = [1,2,3,4]; 

const array02 = number01.map((v)=>(v)); 
console.log(array02); 

const array03 =  number01.map((v)=>{return v}); 
console.log(array03); 


const funcTest01 = (v) => v ; 
const funcTest02 = (v) =>{v}  ; 
const funcTest03 = (v) =>{ return v}  ; 
const funcTest04 = (v) =>(v)  ; 
const funcTest05 = (v) =>({v})  ; 

const values  = {name:'test'}; 

console.log('funcTest01==> ' ,  funcTest01(values));
console.log('funcTest02==> ' ,  funcTest02(values));
console.log('funcTest03==> ' ,  funcTest03(values));
console.log('funcTest04==> ' ,  funcTest04(values));
console.log('funcTest05==> ' ,  funcTest05(values));
