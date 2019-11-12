const url = require('url');
 const qs = require('querystring'); 
// var parsedObject = url.parse('https://www.naver.com');
 
// console.log(parsedObject); // url 객체 정보 출력
// console.log(url.format(parsedObject)); // url 객체를 문자열로 출력
// console.log(url.parse(parsedObject));  // url정보 객체로 밙환 
/*
{ protocol: 'http:',
  slashes: true,
  auth: 'user:pass',
  host: 'host.com:8080',
  port: '8080',
  hostname: 'host.com',
  hash: '#hash',
  search: '?query=string',
  query: 'query=string',
  pathname: '/p/a/t/h',
  path: '/p/a/t/h?query=string',
  href: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash' }
*/

const object01 = {query : '/login?name=123'}; 

const {query} =object01;

const {name} =   qs.parse(query);
console.log(name)
