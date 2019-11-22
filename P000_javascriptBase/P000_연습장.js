
let className = 'class'; 
let obj = {}; 
obj = {
        'ab cd' : 'AB CD',

}

console.log(obj)
console.log(obj['ab cd']);



const obj03 = {

        ['A'+className] : 'A급', 
}


console.log(obj03)
console.log(obj03['Aclass']); 
console.log(obj03['A'+className]); 

console.log('-----------------------------------------------------------------------------------------------------'); 

const x = () =>{

    const a = Symbol('a'); 
    

    return {
        [a] :10, //Symbol을 객체의 프로퍼티 키 로 하기 위해서는 반드시 []를 붙여야 한다. 
        a:a,
    }
}

const y = x(); 
console.log(y);
console.log(y.a); 
console.log(y[y.a]); 

const obj001 = 
{
    '/chat#6fGzi7SD-XoqWc0NAAAA':   { sockets: { '/chat#6fGzi7SD-XoqWc0NAAAA': true }, length: 1 },
    '5dd6513d8b19f520dc9dea62': { sockets: { '/chat#6fGzi7SD-XoqWc0NAAAA': true }, length: 1 } 
}

console.log(obj001['5dd6513d8b19f520dc9dea62'].length);
