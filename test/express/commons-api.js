// direct call to WikiMedia Commons, which have lot of medias.
var bot = require('nodemw');
var client = new bot({
    server: 'commons.wikimedia.org',
    path: '/w',
    debug: false 
});

var api = function(req, res) {

    //console.log(req.query);

    client.api.call(req.query, function(err, info, next, data) {
        //console.log(data);
        res.send(data);
    });
};

module.exports = api;
