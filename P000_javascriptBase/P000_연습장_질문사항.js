

function a(){

    var b = 0; 
    var plus = 1; 
    var preParam =""; 

    return function closure(param){
        b= b+plus; 
        if(param !== preParam){
            console.log('ddd'); 
            b=0; 
        }else{
            console.log('ssss'); 
        }

        console.log(b); 
        
	     	if(b % 2 === 0){
                console.log("짝수"); 
        }else{
            console.log("홀수"); 
        }
        preParam = param; 
        return this; 


    };


}

var func = a(); 
func('a'); 
func('b');
 func('b'); 
 func('b'); 