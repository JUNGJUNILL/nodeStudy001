// import imagemin from 'imagemin';
// import imageminWebp from 'imagemin-webp';

// (async () => {
// 	await imagemin(['P027_convertWebp/image/*.{jpg,png}'], {
// 		destination: 'P027_convertWebp/convertedImage',
// 		plugins: [
// 			imageminWebp({quality: 100})
// 		]
// 	});

// 	console.log('Images optimized');
// })();


const produceWebp =async()=>{
	const imagemin = (await import("imagemin")).default;
    const webp = (await import("imagemin-webp")).default;

	const abc= await imagemin(['P027_convertWebp/image/*.{jpg,png}'], {

		plugins: [
			webp({quality: 100})
		]
    });
	
	console.log(JSON.stringify(abc)); 
}

produceWebp(); 