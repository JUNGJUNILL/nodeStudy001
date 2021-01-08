
const array = [2,4,3,1]


function selection_sort(array){

    let indexMin , temp; 
    
    for(let i=0; i<array.length-1; i++){
        indexMin = i; 
        for(let j=i+1; j<array.length; j++){
            if(array[j]<array[indexMin]){
                indexMin=j; 
            }
        }

        temp=array[indexMin]; 
        array[indexMin]=array[i]; 
        array[i] = temp; 

    }

    array.map((v)=>{
        console.log(v); 
    })


}

selection_sort(array); 



/*

const array = [2,4,3,1]


(let i=0; i<array.length-1; i++)
0~3까지 돈다. 

0 =i
	indexMin = 0
	(let j=i+1; j<array.length; j++)
	1<4
		1=j
			array[1]<array[0]
				(4)    <   (2) false 
		2=j
			array[2]<array[0]
				(3)    <   (2)  false 
		3=j
			array[3] < array[0]
				(1)    <   (2)   true 
		
		indexMin = 3
		
		temp = array[3]
						(1) 
		=>[2,4,3,ㅁ]
		
		array[3] = array[0]
							(2)
		=>[ㅁ,4,3,2]
		
		array[0] = temp 
		
		=>[1,4,3,2]

1=i
	indexMin = 1
	(let j=2; j<array.length; j++)
	2<4
	
	2=j
		array[2] < array[1]
			(3)      <   (4)  true 
			
		indexMin = 2 
	
	3=j 
		array[3] < array[2]
			(2)  <   (3)    true 
			
		indexMin = 3 
		
		temp = array[3]
						(2)
		=>[1,4,3,ㅁ]
		
		array[3] = array[1]
		=>[1,ㅁ,3,4]
		
		array[1] = temp 
		=>[1,2,3,4]
	
2=i
	indexMin = 2 
	(let j=3; j<array.length; j++)
	
	3<4
	
	3=j 
		array[3]<array[2]
			(4)  <  (3) false 
			
			temp = array[2]
							(3) 
			=>[1,2,ㅁ,4]
			array[2] =array[2]
			=>[1,2,ㅁ,4]
			array[2] = temp 
			=>[1,2,3,4]
			
			
=>최종 결과값 
1
2
3
4

*/


















