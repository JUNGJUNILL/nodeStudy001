


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



console.log("----------------------------")  //reduce의 return 값은 


const twoArray = [["정준일","새우깡","새우"],["김근식","감자깡","감자"]]; 

const test01 = twoArray.map(items=>{

    const [k,...vs] = items; 

    return [k,vs.join("=")]
            //이 꺽쇄의 의미는 return 값이 object(array)라는 의미이다. 


})

test01.map(v=>console.log(v)); 


const reduceResult = test01.reduce((acc,[k,v])=>{
                        console.log(k," ",typeof k); 
                    acc[k.trim()] = v;
                    return acc; 
},{})

console.log(reduceResult); 

//음.. 이렇게도 객체
const test = "헬로우"; 
const objectTest = {}; 
objectTest[test] = "Hello"; 
console.log(objectTest);
console.log(typeof objectTest[test]); 
//출력값 :  {헬로우: "Hello"}