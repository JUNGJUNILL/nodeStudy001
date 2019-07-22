const http = require('http'); 
const fs = require('fs'); 

const users = {};


http.createServer((req,res)=>{

    if(req.method === 'GET'){
        
        if(req.url === '/'){
            console.log('req.url -->  ' , req.url); 
            return fs.readFile('./P004_RESTFull/restFront.html',(err,data)=>{

                if(err){
                    throw err; 
                }
                res.end(data); 
            });


        }else if(req.url ==='/about'){

            return fs.readFile('./P004_RESTFull/about.html',(err,data)=>{

                if(err){
                    throw err; 
                }
                res.end(data); 
            });
        
        }else if(req.url ==='/users'){

            return res.end(JSON.stringify(users)); 
        }

        //end of req.method === 'GET' 조건식의 return 값이다.(즉, 최종 return 값)
        return fs.readFile(`.${req.url}`,(err,data)=>{

            if(err){

                res.writeHead(404,'NOT FOUND'); 
                return res.end('NOT FOUND'); 
            }

            return res.end(data); 

        });

    } // end of req.method === 'GET'

    else if(req.method === 'POST'){

        if(req.url ==='/users'){
            let body=''; 
            req.on('data',(data)=>{
                body = body + data; 
            });

            return req.on('end',()=>{

                console.log('POST 본문(Body) : ' , body); 
                const {name} =JSON.parse(body); 
                const id = +new Date(); 
                users[id] = name; 

                res.writeHead(201); 
                res.end('등록 성공'); 
            }); 
        }

    }else if(req.method === 'PUT'){

        if(req.user.startsWith('/users/')){

            const key = req.url.split('/')[2]; 
            let body = ''; 
            req.on('data',(data)=>{

                body = body + data; 
            }); 
            return req.on('end',()=>{
                console.log('PUT 본문(Body) : ' , body); 
                users[key] = JSON.parse(body).name; 

                return res.end(JSON.stringify(users)); 
            })

        }

    }else if(req.method === 'DELETE'){

        if(req.url.startsWith('/users/')){

            const key = req.url.split('/')[2]; 
            delete users[key]; 
            return res.end(JSON.stringify(users)); 

        }

    }


    res.writeHead(404,'NOT FOUND'); 
    
    return res.end('NOT FOUND'); 


}).listen(9994,()=>{

    console.log('9994번 포트에서 버거 대기 중입니다.'); 
})