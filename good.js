﻿
const iconv = require('iconv-lite');
let str="정준일"; 
const buf = iconv.encode(str, "euc-kr");
console.log(buf);
let encodeStr = '';

buf.map((v,i,array)=>{
    encodeStr += '%' + array[i].toString('16');
})

encodeStr = encodeStr.toUpperCase();
console.log("hello", encodeStr); 