
const array =[1,2,3,4,5]; 

const findMax = (array,begin,end) =>{

    //base case
    if(begin === end){
        return array[begin];
    }else{
       
        //이 로직을 도대체 어떻게 생각을 한걸까?
        let middle = Math.floor((begin+end)/2);
        console.log('middle=>' , middle); 

        let max1   = findMax(array,begin,middle); 
        let max2   = findMax(array,middle+1,end); 
        
        return Math.max(max1,max2); 
    }
}

const result = findMax(array,0,array.length-1); 
console.log('result=>' , result); 

/*
(array,0,4)

0 === 4 
middle = 2 
max1 = findMax(array,0,2) return 3 
        0 === 2 false 
        middle =  1 
        max1 = findMax(array,0,1) return 2 
                0 === 1 false 
                middle = 0
                max1 = findMax(array,0,0) return 1 
                max2 = findMax(array,1,1) return 2 
        max2 = findMax(array,2,2) return 3


max2 = findMax(array,3,4) = 5 
       3 === 4 false 
       middle  = 3 
       max1 =  findMax(array,3,3)  return 4

       max2 =  findMax(array,4,4)  return 5

최종 Math.max(3,5)
return 5 

*/