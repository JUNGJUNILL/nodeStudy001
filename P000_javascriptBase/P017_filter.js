//filter 
//return Array(배열)

//배열 요소중 글자 길이가 6글자보다 긴 것들만 리턴해라... 
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6); 
console.log(result);

result.map((v)=>console.log(v.length)); 


console.log("-------------------------------------------"); 

//배열 요소중 글자 길이가 6글자보다 긴 것들만 리턴해라... 
function isbigEnough(value){

    return value >=10; 
}

const filtered = [12,5,8,130,44];
console.log(filtered.filter(isbigEnough)); 
console.log(filtered.filter(value=> {return value>10}))
console.log(filtered.filter(value=> (value>10)))
