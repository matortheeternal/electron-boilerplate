const childProcess = require('child_process');
const electron = require('electron');
const gulp = require('gulp');

gulp.task('start', gulp.series('build', () => {
  childProcess.spawn(electron, ['.'], { stdio: 'inherit' })
  .on('close', () => {
    // User closed the app. Kill the host process.
    process.exit();
  });
}));
