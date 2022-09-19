import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

(async () => {
	await imagemin(['P027_convertWebp/image/*.{jpg,png}'], {
		destination: 'P027_convertWebp/convertedImage',
		plugins: [
			imageminWebp({quality: 100})
		]
	});

	console.log('Images optimized');
})();