//폴더와 파일의 경로를쉽게 조작하도록 도와주는 모듈 

//window : c:\git Repository\nodeStudy001\P000_내장모듈\path.js
//POSIX  : /home/git Repository/nodeStudy001/P000_내장모듈/path.js

const path=require('path'); 
const string =__filename;
console.log('__dirname-->' , __dirname); //현재 이 파일의 root부터 폴더까지의 위치  
console.log(string);
console.log('----------------------------------------------------------------------------------')
console.log('path.sep', path.sep);
console.log('path.delimiter',path.delimiter);
console.log('path.dirname()',path.dirname(string));  //해당 파일이 어디 폴더에 들어있냐? 
console.log('path.extname()',path.extname(string));  //해당 파일의 확장자명 
console.log('path.basename()',path.basename(string));   //해당 파일의 이름+확장자명
console.log('path.basename()',path.basename(string,path.extname(string))); //해당 파일의 이름
console.log('----------------------------------------------------------------------------------')
console.log('path.parse()',path.parse(string)); 
console.log('path.format()',path.format({
    dir:'C:\\git Repository\\nodeStudy001\\P000_내장모듈',
    name:'path',
    ext:'.js',
}))
console.log('path.normalize()',path.normalize('C:\\\\\\git Repository\\nodeStudy001\\\\\P000_내장모듈\\\\path.js'))
console.log('path.isAbsolute()',path.isAbsolute('C:\\')); //절대경로
console.log('path.isAbsolute()',path.isAbsolute('..\\..\\..\\path.js')); //상대경로
//현재 path.js 에서 c:\\ 까지 가려면 총 3번을 거쳐야 한다. 

console.log('path.relative()',path.relative('C:\\git Repository\\nodeStudy001\\P000_내장모듈\\path.js','C:\\git Repository\\nodeStudy001'))
//A 경로에서 B경로로 가기 위해서는?
console.log('path.join()',path.join(__dirname,'path.js')); 
console.log('path.join()',path.join(__dirname,'P001_test01','jun.js')); 
//A경로 +B경로 +C경로... 