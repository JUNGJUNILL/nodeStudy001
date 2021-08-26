// http모듈을 추출합니다.
const http = require('http')

// 웹 서버를 생성합니다.
const server = http.createServer()

require('http').createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html' });
  response.end('<h1>Hello Web Server with Node.js !!! </h1>');
}).listen(52273, function() {
  console.log('52273 port is using...');
});


