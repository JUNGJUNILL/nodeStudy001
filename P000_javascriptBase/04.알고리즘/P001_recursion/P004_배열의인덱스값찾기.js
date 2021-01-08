
//앞에서부터 순차 검색 
const array = "가나다라마바사아자차카타파하"; 


const frontSearch = (array,begin,end,target)=>{
    
    if(begin > end){
        return -1; 
    }else if(target === array[begin]){
        return begin; 
    }else{
        return frontSearch(array,begin+1,end, target); 
    }
}

const result001 = frontSearch(array,0,4,'다'); 
console.log('result001=>' , result001); 
/*
(array,0,4,'다')

0 > 4 false 
'다' === array[0] false 

(array,1,4,'다')
1 > 4 false 
'다' === array[1] false 

(array,2,4,'다')
2 > 4 false
'다' === array[2] true 
return 2  
*/

//뒤에서부터검색 
const backSearch=(array,begin,end,target)=>{

    if(begin>end){
        return -1; 
    }else if(target === array[begin]){
        return begin; 
    }else{
        return backSearch(array,begin,end-1); 
    }
}

/*
backSearch(array,0,4,'다')
0 > 4 false 

'다' === array[0] false 

backSearch(array,0,3,'다')
0> 3 false 
'다' === array[3] false 

backSearch(array,0,2,'다')
0 > 2 false 
'다' === array[2] true 
return 2 
*/





//중간에서부터검색 
const middleSearch = (array,begin,end,target)=>{

    if(begin>end){
        return -1; 
    
    }else{
        let middle = Math.floor((begin+end)/2); 
        if(array[middle]===target){
            return middle; 
        }

        let index = middleSearch(array,begin,middle-1,target); 

        if(index !== -1){
            return index; 
        }else{
            return middleSearch(array,middle+1,end,target); 
        }

    }

}
const result003 = middleSearch(array,0,6,'마'); 
console.log('result003=>' , result003); 

/*
(array,0,6,'마')
0 > 6 false 
middle = 3 
array[3] (라) === '마' false 
index = (array,0,2,'마')
        0 > 2 false 
        middle = 1 
        array[1] (나) === '마' false 
        index =  (array,0,0,'마')
                 0 > 0 false 
                 middle = 0 
                 array[0] (가) === '마' false 
                 index = (array,0,-1,'마') return -1

결론적으로는 (array,0,6,'마')의 index가  -1 로 수렴하므로 
(array,0,6,'마') 로 middleSearch(array,middle+1,end,target); 를 구현 해야한다. 

(array,4,6,'마'); 
    4 > 6 false 
    array[4] == '마' true return 4 끝 


*/