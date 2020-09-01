var cbExample = function(number,cb){
        
    
    setTimeout(function(){

        var sum = 0; 
        for(var i= number; i > 0; i--){
                sum= sum+i; 
        }
        cb(sum); 
        
    },0);
}; 

//setTimeot(param1,param2)
//param2초 뒤에 param1이 실행된다.


cbExample(84654654654654654,function(result){

    console.log('result ==>' , result); 
}); 
console.log('first'); 




//cbExample함수가 실행되는 동안 다른 것들은 아무것도 실행이 안되
//동기 

//cbExample함수가 실행되는 동안 다른것들이 먼저 실행됨
//비동기 

//언어적으로 말하자면... 
//해당 동작이 완료될 때까지 직접 기다릴 필요 없이,
//그냥 하라고만 말해두고 나중에 완료되었을 때 보고받으면 된다. 