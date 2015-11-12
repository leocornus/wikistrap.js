var gulp = require('gulp');

// set the default task.
gulp.task('default', ['hello']);

gulp.task('hello', function() {
  // place code for your default task here
  console.log('Hello Gulp World!');
});
