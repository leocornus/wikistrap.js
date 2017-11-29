// direct call to WikiMedia Commons, which have lot of medias.
var bot = require('nodemw');

// some options.
var options = {
  server: 'commons.wikimedia.org',
  path: '/w',
  // the default base urls.
  remoteUrl: 'https://upload.wikimedia.org/wikipedia/commons',
  localUrl: '/images'
};

module.exports.setOptions = function(opts) {
  options = opts
};

var client = null;

/**
 * the express callback funtion.
*/
module.exports.api = function(req, res) {

    if(client == null) {

        client = new bot({
            //protocol: "http",
            //port: 80,
            server: options.server,
            path: options.path,
            //path: '/wiki',
            // set the user agent to
            userAgent: "WikiStrap.js",
            debug: true 
        });
    }

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
