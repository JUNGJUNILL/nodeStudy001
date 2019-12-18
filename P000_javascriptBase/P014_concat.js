
//concat(array) 
//return array 
//기존 배열을 변경하지 않습니다.
//추가된 새로운 배열을 반환합니다. 


const array01 = ['a','b','c']; 
const array02 = ['d','e','f']; 

console.log(array01.concat(array02)); 
console.log('-------------------'); 


array01.concat(array02).map((v)=>{
    console.log(v); 
})


console.log('-------------------'); 
console.log(array01.concat(1, [2, 3]));


console.log('-------------------'); 


//enhancedObject 
const state = {
    information: [
        {
          id: 0,
          name: '김민준',
          phone: '010-0000-0000'
        },
        {
          id: 1,
          name: '홍길동',
          phone: '010-0000-0001'
        }
      ]
}

const {information} = state
information : information.concat({id:3,name:"정준일",phone:"010"});

information.map((v)=>console.log(v)); 

console.log('-------------------'); 


const arr = [1,2,3,4,5]; 
console.log(arr.slice(0,2).concat(arr.slice(3,5))); 


//배열 전개 연산자. 
const spreadArray = [...arr.slice(0,2),...arr.slice(3,5)]; 
console.log('spreadArray' , spreadArray)