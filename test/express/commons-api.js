// direct call to WikiMedia Commons, which have lot of medias.
var bot = require('nodemw');

// some options.
var options = {
  // the default base urls.
  remoteUrl: 'https://upload.wikimedia.org/wikipedia/commons',
  localUrl: '/images'
};

module.exports.setOptions = function(opts) {

  options = opts
};

var client = new bot({
    server: 'commons.wikimedia.org',
    path: '/w',
    //path: '/wiki',
    debug: true 
});

/**
 * the express callback funtion.
*/
module.exports.api = function(req, res) {

    //console.log(req.query);

    client.api.call(req.query, function(err, info, next, data) {
        //console.log(data);
        var baseUrlPattern = new RegExp(options.remoteUrl, "g");
        var processed = JSON.stringify(data).replace(baseUrlPattern, 
                                                     options.localUrl);
        //console.log("=========================processed=========");
        //console.log(processed);
        res.send(JSON.parse(processed));
    });
};
