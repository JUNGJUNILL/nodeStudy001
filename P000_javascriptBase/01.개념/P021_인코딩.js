var iconv = require('iconv-lite');
//api 서버의 인코딩이 euc-kr 인 경우 
//한글 파라메터 넘길 때 
//즉, 한글을 euc-kr 인코딩 하는 방법
const strUtf8Query = '갈비명가궁'; 

const buf = iconv.encode(strUtf8Query, "euc-kr");
let encodeStr = '';
buf.map((v,i,array)=>{
    encodeStr += '%' + array[i].toString('16');
})

encodeStr = encodeStr.toUpperCase();
console.log(encodeStr)

