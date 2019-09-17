
const os = require('os'); 

console.log('운영체제 정보------------------'); 
console.log('os.arch() : ' + os.arch()); 
console.log('os.platform() : ' + os.platform());
console.log('os.type() : ' , os.type());
console.log('os.uptime() : ' , os.uptime());
console.log('os.hostname() : ' , os.hostname()); 
console.log('os.release() : ' , os.release()); 