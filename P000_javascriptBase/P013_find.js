
//find() 메서드는 주어진 판별 함수를 만족하는 "첫 번째 요소의 값"을 반환합니다. 그런 요소가 없다면 undefined를 반환합니다.
const array = [10,20,30,40,41,100,80,90,50]; 
console.log(array.find(v=>v>41));


const inventory = [

    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}

]

const findCherries = (f)=>{

    return f.name === 'cherries'; 


}

console.log(inventory.find(findCherries)); 

