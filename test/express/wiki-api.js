// testing the nodemw direct api.
var bot = require('nodemw');
var client = new bot({
    server: 'en.wikipedia.org',
    path: '/w',
    debug: true
});

var api = function(req, res) {

    //console.log(req.query);

    client.api.call(req.query, function(err, info, next, data) {
        //console.log(data);
        res.send(data);
    });
};

module.exports = api;
