// direct call to WikiMedia Commons, which have lot of medias.
var bot = require('nodemw');
var client = new bot({
    server: 'commons.wikimedia.org',
    path: '/w',
    //path: '/wiki',
    debug: true 
});

var api = function(req, res) {

    //console.log(req.query);

    client.api.call(req.query, function(err, info, next, data) {
        console.log(data);
        var baseUrlPattern = new RegExp("https://upload.wikimedia.org/wikipedia/commons", "g");
        var processed = JSON.stringify(data).replace(baseUrlPattern, "/images");
        console.log("=========================processed=========");
        console.log(processed);
        res.send(JSON.parse(processed));
    });
};

module.exports = api;
