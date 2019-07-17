const http = require('http'); 


const parseCookies = (cookie='')=>{

    cookie.split(';')
    .map(v=>v.split('='))
    .map((k,...vs)=>[k,vs.join('=')])
    .reduce((acc,[k,v])=>{
        acc[k.trim()] = decodeURIComponent(v); 
        return acc;   
    },{})


}


