// return 배열
// https://im-developer.tistory.com/101 다시 공부 하쟈
const candidate = [1,2,3,4,5,6,7,8,9]; 
const array = []; 
for(let i=0; i<4; i++){
    const chosen = candidate.splice(Math.floor(Math.random()*(9-1)),1)[0]; 
    array.push(chosen); 
    
}
console.log(array);


// const candidate = [1,2,3,4,5,6,7,8,9]; 
// console.log(Math.floor(Math.random()*(9-1))); 


// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 1);

// console.log(months);