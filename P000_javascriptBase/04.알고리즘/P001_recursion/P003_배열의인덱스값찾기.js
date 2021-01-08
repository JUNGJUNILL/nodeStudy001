
const target = "정준일"; 


//indexOf 함수를 구현해보자. 
const search = (array,target) =>{

    for(let i=0; i<array.length; i++){
        if(array[i] === target){
            return i; 
        }else{
            return -1; 
        }
    }
}


const result = search(target,"정"); 
console.log('result=>' , result); 