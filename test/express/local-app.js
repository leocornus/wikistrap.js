/**
 * local express app server for tesint purpose.
 */

var express = require('express');
// serve-index provide directory indexing.
var serveIndex = require('serve-index');
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
app.get('/commons/api.php', commonsApi);

// direct images
var imagesApi = require('./images-api.js');
app.get('/images/', imagesApi);

// start the express server.
var server = app.listen(18900, function() {
});
