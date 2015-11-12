// karma config for using jasmine framework.
module.exports = function(config) {
  config.set({

    // this folder will become /base on karma server
    basePath : '../',

    files : [
      'bower_components/jquery/dist/jquery.min.js',
      // HAVE to load the jquery plugin specifically
      'src/wikistrap.js',
      // load the html fixtures.
      //'test/unit/fixtures/*.html',
      // load unit test cases.
      'test/unit/**/*.js'
    ],

    autoWatch : true,
    singleRun : true,

    frameworks: ['jasmine-jquery', 'jasmine'],

    browsers : ['Firefox'],

    plugins : [
            'karma-firefox-launcher',
            'karma-mocha-reporter',
            'karma-jasmine',
            'karma-jasmine-jquery'
            ],

    colors : true,

    reporters: ['mocha']
  });
};
