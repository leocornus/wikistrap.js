var gulp = require('gulp');

// set the default task.
gulp.task('default', ['karma', 'protractor', 'exit']);

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

// set up the web server for e2e testing...
var webserver = require('gulp-webserver');
gulp.task('webserver', function() {

    return gulp.src('.').pipe(webserver({
      host: '0.0.0.0',
      port: 8900,
      livereload: true,
      directoryListing: true,
      open: true
    })).on('error', function(e) {throw e;});
});

// get ready for protractor.
var webdriver_update = require('gulp-protractor').webdriver_update;
var webdriver = require('gulp-protractor').webdriver;

// launch the webdriver.
gulp.task('webdriver_update', webdriver_update);
gulp.task('webdriver', webdriver);

var protractor = require('gulp-protractor').protractor;
// protractor e2e test will depend on webserver and 
// webdriver task.
gulp.task('protractor', ['webserver', 'webdriver_update', 'webdriver'], function() {

    return gulp.src(['test/e2e/*.js']).pipe(protractor({
        configFile: 'test/protractor.conf.js'
    })).on('error', function(e) {throw e});

});

// the exit task will stop web server at the end of testing.
var exit = require('gulp-exit');
gulp.task('exit', ['protractor'], function() {

    gulp.src("").pipe(exit());
});
