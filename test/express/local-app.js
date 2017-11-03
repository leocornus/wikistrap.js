/**
 * local express app server for tesint purpose.
 */

var express = require('express');
// serve-index provide directory indexing.
var serveIndex = require('serve-index');
// local settings.
var settings = require('./local/moments.js');

var app = express();

// set the homepage.
app.get('/', function(req, res) {
    res.sendFile('moments.html', {root: __dirname + '/../../demo'});
});

// set the favicon.ico.
app.get('/favicon.ico', function(req, res) {
    res.sendFile('bit-circle.ico', {root: __dirname});
});

//load static files.
app.use('/demo', express.static('demo'));
app.use('/demo', serveIndex('demo'));
app.use('/src', express.static('src'));
app.use('/src', serveIndex('src'));
app.use('/bower_components', express.static('bower_components'));
app.use('/bower_components', serveIndex('bower_components'));

// hello world simple get.
app.get('/hello', function(req, res) {
    res.send('<h1>Hello Express World</h1>');
});

// direct mediaWiki API call.
var wikiApi = require('./wiki-api.js');
app.get('/wiki/api.php', wikiApi);

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
var server = app.listen(18900, function() {
});
