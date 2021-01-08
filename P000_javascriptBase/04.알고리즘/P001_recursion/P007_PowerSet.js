
const array = ['a','b']; 
const n     = array.length; 
let booleanArray = [false,false]; 

const powerSet = (k)=>{


    if(k === n){
        let result = ' '; 
        for(let i=0; i<n; i++)
            if(booleanArray[i]){
                result = result + array[i]; 
            }
           console.log(result); 
            return; 
    }

    //이 로직을 도대체 어떻게 생각했을까?
    booleanArray[k]=false; 
    powerSet(k+1);

    booleanArray[k]=true; 
    powerSet(k+1);
}

powerSet(0); 




/*
powerSet(0) 

array = [ㅁ,ㅁ]; 

0 == 2 false 
			★----------------
			array[0] = false; 
			powerSet(1)
			----------------
				1 == 2 false 
					array[1] = false 
					powerSet(2)
							array[0] =>false 
							array[1] =>false 
								공집합
							
					array[1] = true 
					powerSet(2)
							array[0] =>false 
							array[1] =>true  
									b 
			★----------------
			array[0] = true; 
			powerSet(1)
			----------------
				1 == 2 false 
					array[1] = false 
					powerSet(2)
							array[0] =>true 
							array[1] =>false 
								  a
						
					array[1] = true 
					powerSet(2)		
							array[0] =>true 
							array[1] =>true 
								a b 
						
					
			
 */