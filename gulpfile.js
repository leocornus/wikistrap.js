var gulp = require('gulp');

// set the default task.
gulp.task('default', ['unit-test', 'e2e-test']);

// the unit test tasks.
gulp.task('unit-test', ['karma']);
// the e2e test tasks.
gulp.task('e2e-test', ['protractor', 'express-app-stop']);

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

// using the express to serve static files.
var gls = require('gulp-live-server');
// the simplest express static server.
var liveServer = gls.static('.', 8900);
// using a simple javascript file for express server.
//var liveServer = gls.new('test/express/simple.js');
gulp.task('express-app', function() {

    liveServer.start();
});

// stop live server after e2e testing are finished.
gulp.task('express-app-stop', ['protractor'], function() {

    liveServer.stop();
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
gulp.task('protractor', 
          ['express-app', 'webdriver_update', 'webdriver'], 
          function() {

    return gulp.src(['test/e2e/*.js']).pipe(protractor({
        configFile: 'test/protractor.conf.js'
    })).on('error', function(e) {
        console.log(e.toString());
        // proper way to stop the task when error happen.
        this.emit("end");
    });
});
