
//외부 이미지 url을 가져와서 버퍼로 바꾼 후 
//해당 버퍼를 sharp 같은 image rezie 메소드에 넣어서 구성이 가능하다. 
//https://www.npmjs.com/package/got
const got = require('got');

(async () => {
	try {
		const urlBuffer = await got('https://upload.wikimedia.org/wikipedia/ko/6/60/%EA%B8%B0%EC%83%9D%EC%B6%A9_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg')
                               .buffer();
		console.log('urlBuufer^_^',urlBuffer);
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response);
		//=> 'Internal server error ...'
	}
})();