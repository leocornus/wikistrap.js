// the very simple express static server.

var express = require('express');
// serve-index provide directory indexing.
var serveIndex = require('serve-index');
var app = express();

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

// start the express server.
var server = app.listen(8900, function() {
});
