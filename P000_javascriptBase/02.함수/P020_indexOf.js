//해당 문자가 없을 경우 -1을 반환한다. 
//있는 경우 그 문자열의 index값을 반환한다. 
const text='2.2'; 
console.log(text.indexOf('')); 
            //''는 0을 반환하게 되어 있다. 

if(text.indexOf(".") === -1){
    console.log('존재하지 않는 문자열입니다.',text.indexOf(".")); 
}else{
    console.log(`해당문자는 ${text.indexOf(".")} 위치에 존재합니다`); 
}

//http://captainryan.gonetis.com:3095/1001/nick1111/31607324381382.png 요것만 빼보자!
const abc = `<p>감사합니다!</p><figure class="image"><img src="http://captainryan.gonetis.com:3095/1001/nick1111/31607324381382.png"></figure><figure class="image"><img src="http://captainryan.gonetis.com:3095/1001/nick1111/에이싯팔1607324381388.jpg"></figure><figure class="image"><img src="http://captainryan.gonetis.com:3095/1001/nick1111/1ME이상파일1607324381746.jpg"></figure><figure class="image"><img src="http://captainryan.gonetis.com:3095/1001/nick1111/pictureTest1607324381564.jpg"></figure>`


console.log(abc.indexOf(`<img src=`) !== -1 ? abc.substr(abc.indexOf(`<img src=`)+`<img src=`.length ,abc.substring(abc.indexOf(`<img src=`)+`<img src=`.length).indexOf('>')).split(`"`).join(''):`http://captainryan.gonetis.com:3095/noimages.gif`); 

