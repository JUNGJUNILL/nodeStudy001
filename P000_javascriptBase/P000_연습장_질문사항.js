var Iconv  = require('iconv').Iconv;

var euckr2utf8 = new Iconv('EUC-KR', 'UTF-8');
var utf82euckr = new Iconv('UTF-8', 'EUC-KR');

// utf8 안녕하세요
var buff_utf8 = new Buffer(15); 
buff_utf8[0] = 0xec;
buff_utf8[1] = 0x95;
buff_utf8[2] = 0x88;
buff_utf8[3] = 0xeb;
buff_utf8[4] = 0x85;
buff_utf8[5] = 0x95;
buff_utf8[6] = 0xed;
buff_utf8[7] = 0x95;
buff_utf8[8] = 0x98;
buff_utf8[9] = 0xec;
buff_utf8[10] = 0x84;
buff_utf8[11] = 0xb8;
buff_utf8[12] = 0xec;
buff_utf8[13] = 0x9a;
buff_utf8[14] = 0x94;

// euc-kr 안녕하세요
var buff_euckr = new Buffer(10);
buff_euckr[0] = 0xbe;
buff_euckr[1] = 0xc8;
buff_euckr[2] = 0xb3;
buff_euckr[3] = 0xe7;
buff_euckr[4] = 0xc7;
buff_euckr[5] = 0xcf;
buff_euckr[6] = 0xbc;
buff_euckr[7] = 0xbc;
buff_euckr[8] = 0xbf;
buff_euckr[9] = 0xe4;

console.log("---------------------------------------");
console.log("euckr : "+buff_euckr.toString());
console.log("euckr2uf8 : "+euckr2utf8.convert(buff_euckr));

console.log("\n---------------------------------------");
console.log("utf8 : "+buff_utf8.toString());
console.log("utf82euckr : "+utf82euckr.convert(buff_utf8));