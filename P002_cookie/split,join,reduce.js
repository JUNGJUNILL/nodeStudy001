


const splitTest = 'a:b:c:d'; 
const array = splitTest.split(':'); 
array.map((v,index)=>{
    console.log(v + " : " + typeof v); 
})

console.log("----------------------------") //split의 반환값은 object(array)이다.. 


const testArray = ['a','b','c']; 
const value01 = testArray.join('-'); 
console.log(value01 + " : " + typeof value01); 


console.log("----------------------------") //join의 반환값은 string이다. 



//reduce 초기값이 있는 경우 
//초기값 10이 acc가 되고 배열의 갯수만큼 반복한다. 
const numberArray = [1,2,3]; 
const value02 = numberArray.reduce((acc,value,index)=>{
            console.log(acc,": ",value,": ",index); 
            return acc+value;
     },10)

console.log(value02)

console.log("----------------------------") 
//초기값이 없는 경우 
//배열의 1번째 index부터 돌기 때문에 배열의 갯수-1번 만큼 반복하게 되고.. 
//acc는 배열의 0번째 index값이 된다. 

const numberArray01 = [1,2,3]; 
const value03 = numberArray01.reduce((acc,value,index)=>{
            console.log(acc,": ",value,": ",index); 
            return acc+value;
     })

     /*
        1 2 1
        3 3 2
        6
     
     */
console.log(value03)



console.log("----------------------------") 