// direct call to WikiMedia Commons, which have lot of medias.

var api = function(req, res) {

    // get the file path:
    var filePath = req.query.path;
    console.log(filePath);

    // get the url to image:
    var imageUrl = 'https://upload.wikimedia.org/wikipedia/commons' + filePath;
    console.log(imageUrl);

    res.send('hello images! - ' + imageUrl);
};

module.exports = api;
