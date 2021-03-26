const fetch = require('node-fetch'); 


//
async function  hello(){

    //const request = await fetch("https://ipinfo.io/211.46.131.61?token=ad6b444b39c31e")
    const request = await fetch("http://localhost/asp/study/HubmekaAPIServer.jsp")
    
    const json = await request.json(); 
    console.log(JSON.stringify(json)); 
}

hello(); 