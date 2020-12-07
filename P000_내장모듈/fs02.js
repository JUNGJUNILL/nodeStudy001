const fs = require('fs'); 
const path   =require('path');

const abc = path.join(__dirname,"../P001_test01"); 
console.log(abc); 
// console.log(__dirname,"../P001_test01"); 



fs.readdir(__dirname,(error)=>{

    if(error){
        fs.mkdirSync('sex001'); 
    }else{
        console.log("???");
    }
})