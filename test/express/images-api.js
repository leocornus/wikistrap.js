// direct call to WikiMedia Commons, which have lot of medias.
var request = require('request').defaults({encoding: null});

/**
 * module is a plain JavaScript object with an exports property. 
 * exports is a plain JavaScript variable that happens to be 
 * set to module.exports. 
 * At the end of your file, node.js will basically 
 * 'return' module.exports to the require function. ... 
 * At this time module.exports and exports pointing to the 
 * same reference.
 */

var options = {
  // the default base url.
  baseUrl: 'https://upload.wikimedia.org/wikipedia'
};

/**
 * set some default options.
 */
module.exports.setOptions = function(opts) {

    options = opts;
};

// the callback function for express.js
module.exports.api = function(req, res) {

    // get the file path:
    //var filePath = req.query.path;
    var filePath = req.path.replace('/images', '');
    console.log(filePath);

    // get the url to image.
    // sample file path:
    // /thumb/2/2a/Bit%27s_moments_022.jpg/750px-Bit%27s_moments_022.jpg
    var imageUrl = options.baseUrl + filePath;
    console.log(imageUrl);

    request.get(imageUrl, function(error, response, body) {

        if (!error && response.statusCode == 200) {
            //res.type(response.headers["content-type"]);
            res.writeHead(200, response.headers);
            res.end(body);
            //data = "data:" + response.headers["content-type"] + 
            //       ";base64," + new Buffer(body).toString('base64');
            //img = new Buffer(body).toString('base64');
            ////console.log(data);
            ////res.send(data);
            //res.writeHead(200, {
            //    'Content-Type': response.headers["content-type"]
            //});
            //res.end(body);
        } else {
            res.send('hello images! - ' + imageUrl);
        }
    });
};
