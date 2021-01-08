
const array  =[1,2,3,4,5]; 

//순차검색
const findMax = (data,begin,end)=>{

    //base case 
    if(begin == end){
        return data[begin]; 
    }else{
        return Math.max(data[begin],findMax(data,begin+1,end)); 
    }

}
const result = findMax(array,0,array.length-1); 
console.log('result=>  ', result); 

/*

(array,0,4)  최종 return : 5 
0 == 4 false 
Math.max(array[0] , findMax(array,1,4)) Math.max(1,5) 
                    (array,1,4)
                    1 == 4
                    Math.max(array[1] , findMax(array,2,4)) Math.max(2,5) 
                                        (array,2,4)
                                        2 == 4 false 
                                        Math.max(array[2],findMax(3,4)) Math.max(3,5) 
                                                          (array,3,4)
                                                          3 == 4 false 
                                                          Math.max(array[3],findMax(4,4))  Math.max(4,5) 
                                                                            return array[4] == 5
                                                                           
                                                          


*/