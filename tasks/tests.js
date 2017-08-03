const gulp = require('gulp');
const jetpack = require('fs-jetpack');
const bundle = require('./bundle');

gulp.task('build-background', ['environment'], () => {
	const srcDir = jetpack.cwd('src');
	const destDir = jetpack.cwd('app');
	
	return bundle(srcDir.path('background.js'), destDir.path('background.js'));
});