//return 값 array 

var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];


console.log(myFish.splice(3,2)); //3번 index부터 2개 빼서 할당하겠다.  
                                 //splice(startIndex,deleteCount) 
console.log(myFish);            

console.log('-------------------------------'); 


const months = ['Jan', 'March', 'April', 'June'];
console.log(months.splice(3, 1, 'May'));
console.log(months); 


console.log('-------------------------------'); 


const candidate = [1,2,3,4,5,6,7,8,9];
console.log(candidate.splice(7,1))
console.log(candidate.splice(7,1))
console.log(candidate.splice(1,1))
console.log(candidate.splice(5,1))

const array = []; 
    for(let i=0; i<4; i++){
        const chosen = candidate.splice(Math.floor(Math.random()*(9-i)),1)[0]; 
                                                //예) 
												// i=0	- 0부터 8까지의 랜덤 정수  : 7 : 8 
												// i=1	- 0부터 7까지의 랜덤 정수  : 7 : 9
												// i=2	- 0부터 6까지의 랜덤 정수  : 1 : 2
												// i=3 -  0부터 5까지의 랜덤 정수  : 5 : 7 
													
													
        array.push(chosen); 
        
    }
console.log(array); 