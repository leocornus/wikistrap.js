/**
 * local express app server for tesint purpose.
 */

var express = require('express');
// serve-index provide directory indexing.
// this is for development purpose.
var serveIndex = require('serve-index');
// local settings.
var settings = require('./local/uts.js');

var app = express();

//load static files web resources.
app.use('/demo', express.static('demo'));
app.use('/demo', serveIndex('demo'));
app.use('/src', express.static('src'));
app.use('/src', serveIndex('src'));
app.use('/bower_components', express.static('bower_components'));
app.use('/bower_components', serveIndex('bower_components'));

// set the favicon.ico.
app.get('/favicon.ico', function(req, res) {
    res.sendFile('uts.ico', {root: __dirname});
});

// set the homepage.
app.get('/', function(req, res) {
    res.sendFile('uts.html', {root: __dirname + '/../../demo'});
});

// direct mediawiki api call to commons.wikimedia.org
var commonsApi = require('./commons-api.js');
// set options.
commonsApi.setOptions({
    "server": settings.config.server,
    "path": settings.config.path,
    "remoteUrl": settings.config.remoteUrl,
    "localUrl" : settings.config.localUrl
});
app.get('/commons/api.php', commonsApi.api);

// direct images
var imagesApi = require('./images-api.js');
// set options.
imagesApi.setOptions({
    "remoteUrl": settings.config.remoteUrl,
    "localUrl" : settings.config.localUrl
});
app.get(/^\/images/, imagesApi.api);

// start the express server.
var server = app.listen(settings.config.expressPort, function() {
});
