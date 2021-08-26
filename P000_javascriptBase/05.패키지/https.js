const https = require('https')
let url = "https://upload.wikimedia.org/wikipedia/ko/6/60/%EA%B8%B0%EC%83%9D%EC%B6%A9_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"

https.get(url, (res) => {
       console.log(res.statusCode,JSON.stringify(res.headers),res.body); 
      // res.end(res.statusCode,res.headers); 

       res.on('data',(d)=>{
           process.stdout.write(d); 
       })
  }).on('error', (e) => {
  
  })