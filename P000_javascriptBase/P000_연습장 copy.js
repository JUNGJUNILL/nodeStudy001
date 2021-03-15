
let i=0; 
function* test01(){
    while(true){
    yield console.log(i++)
}
}

test01().next(); 