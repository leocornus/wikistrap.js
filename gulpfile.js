var gulp = require('gulp');

// set the default task.
gulp.task('default', ['karma']);

// a quick test task.
gulp.task('hello', function() {
  // place code for your default task here
  console.log('Hello Gulp World!');
});

// load karma server.
var Karma = require('karma').server;
gulp.task('karma', function(done) {

    return new Karma.start({
        configFile: __dirname + '/test/karma.conf.js'
    }, done);
});
