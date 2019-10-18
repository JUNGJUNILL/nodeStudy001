var url = require('url');
var parsedObject = url.parse('http://localhost:8003');
 
console.log(parsedObject); // url 객체 정보 출력
console.log(url.format(parsedObject)); // url 객체를 문자열로 출력
console.log(url.parse(parsedObject)); 