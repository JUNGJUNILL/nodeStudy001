const array = [4,5,1,3,2]; 

const maxValue =(array,length)=>{

    let max; 

    //가장 첫 번째 배열을 빼서 해당 변수에 저장한다. 
    max = array[0]; 

    for(let j=1; j<length; j++){
        if(max < array[j]){
            max = array[j]; 
        }
    }
    return max; 

}

console.log(maxValue(array,array.length)); 

/*

max = array[0]

4

4(max) < 5 (array[1]) true 
max = 5 

5(max) < 1 (array[2]) false
max = 5 

5(max) < 1 (array[3]) false 
max =5 

5(max) < 2 (array[4]) false 
max =5 


최종값 return max5 



*/