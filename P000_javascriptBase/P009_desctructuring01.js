var colors = ['red','white']; 
var colors1= colors[0]; 
var colors2= colors[1];
console.log(colors1 , colors2);

console.log('----------------------------------------------------');


var colors01 = ['red','white']; 
var [col1,col2] = colors01
console.log(col1,col2);

console.log('----------------------------------------------------');

var colors02 = ['red','white']; 
var [,col03] = colors02; 
console.log(col03); 

console.log('----------------------------------------------------');

const colors03 = ['red','blue','gray']; 
const[,col04,col05,col06] =colors03; 
console.log(col04,col05,col06);



console.log('----------------------------------------------------');

const arr01 = [1,2,3,4,5]; 
const [a,...b] =arr01; 
console.log(a,b);
const [,,...c] =arr01; 
console.log(c);

console.log('----------------------------------------------------');


const [a1=10, b1=20] = [undefined, 5]; 
console.log(a1,b1); 

console.log('----------------------------------------------------');

let a4 = 10 ; 
let b4 = 20; 

[a4,b4] = [b4,a4];

console.log(a4,b4); 


