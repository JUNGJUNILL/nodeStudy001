
function first(){
    second();
    console.log('첫번째')

}

function second(){
    third();
    console.log('두번째')

}

function third(){
    console.log('세번째')

}

first();



// function longTime(){

//    // setTimeout(console.log('longTime'),3000); 
//     console.log('작업 끝'); 
// }

// console.log('시작'); 
// setTimeout(longTime,0);
// console.log('다음 작업'); 


function main() {
    console.log('A'); 
    setTimeout(function display(){console.log('B'),0}); 
    runWhile(3); 
    console.log('C'); 
}
main();
function runWhile(sec){

    let start = Date.now(), now =start; 
    console.log('start : ',start, ' now : ',now); 
    console.log('now - start',now - start); 
    while(now - start <(sec*1000)){
      
        now = Date.now(); 
       
    }
}