//return boolean 
//배열의모든 원소가 조건에 맞는지 검사하는 메서드. 
const func = (currentValue) => currentValue < 10; 

const array01 = [1, 30, 39, 29, 10, 39];

console.log(array01.every(func)); 