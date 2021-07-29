

try{
    console.log('rrr'); 
    throw new Error('hello'); 
}catch(e){
    console.log(e.message)
}