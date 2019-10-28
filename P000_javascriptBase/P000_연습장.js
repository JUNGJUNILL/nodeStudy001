var path = require('path');

console.log(path); 

console.log(path.join(__dirname,'view'));

var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

var p = Promise.all(resolvedPromisesArray);
// 실행 즉시 p의 값을 기록
console.log(p);