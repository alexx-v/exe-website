module.exports = function () {
	$.gulp.task(
		'build',
		$.gulp.series(
			'clean',
			'copy',
			'sass',
			'scripts',
			'images',
			'svg'
			// 'createDocs'
		)
		// $.gulp.series('clean', 'copy', 'sass', 'scripts', 'images', 'webp', 'svg')
	);
};
