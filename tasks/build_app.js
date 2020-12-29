const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const jetpack = require('fs-jetpack');
const bundle = require('./bundle');
const utils = require('./utils');

const projectDir = jetpack;
const srcDir = jetpack.cwd('./src');
const destDir = jetpack.cwd('./app');

gulp.task('bundle', () => {
  return Promise.all([
    bundle(srcDir.path('background.js'), destDir.path('background.js')),
    bundle(srcDir.path('app.js'), destDir.path('app.js')),
  ]);
});

gulp.task('sass', function () {
  return gulp.src(srcDir.path('stylesheets/*'))
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest(destDir.path('stylesheets')));
});

gulp.task('environment', (done) => {
  const configFile = `config/env_${utils.getEnvName()}.json`;
  projectDir.copy(configFile, destDir.path('env.json'), { overwrite: true });
  done();
});

gulp.task('build', gulp.series('bundle', 'sass', 'environment'));
