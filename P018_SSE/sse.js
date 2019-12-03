//서버센트 이벤트를 사용해서 서버의 시간을 받아올 것이다. 
//주기적으로 서버 시간을 조회하는데 양방향 통신이 필요하지 않기 때문이다. 

//서버센트 이벤트는 한 가지 단점이 있습니다. 
//IE나 엣지 브라우저에서 사용할 수 없다는 것입니다. 
//EventSource라는 객체를 지원하지 않아서 그렇다. 
//그러나 다행이 EventSource를 사용자가 직접 구현할 수 있다.   
//script(src='https://cdnjs.cloudflare.com/ajax/libs/event-source-polyfill/0.0.9/eventsource.min.js')


//안정적으로 서버 정보를 client에게 동일하게 전송 할 수 있다. 
const SSE = require('sse'); 

module.exports = (server)=>{


    const sse = new SSE(server); 
    sse.on('connection' , (client)=>{

        setInterval(()=>{
            client.send(new Date().valueOf().toString()); //문자열만 보낼 수 있어서 toString()
        },3000)
    });
};



