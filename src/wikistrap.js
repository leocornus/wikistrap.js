/**
 * started with an empty class.
 */
;(function() {

    /**
     * set default wiki site to wikipedia.
     */
    var defaultSite = {
        'baseUrl' : 'en.wikipedia.org',
        'origin' : null,
        'apiPath' : '/w/api.php',

        /** 
         * the maximum number of items to return,
         * default wiki api number is 10, 500 is the max.
         */
        'limit' : 50,

        /**
         * default data-offset-top for the left nav panel in pixel.
         * This is for the bootstrap affix class.
         */
        'affixOffsetTop' : 300
    }

    /**
     * define the main WikiStrap class.
     */
    function WikiStrap(siteOptions) {

        this.siteOptions = 
               jQuery.extend({}, defaultSite, siteOptions);
        // save the default values.
        this._defaultSite = defaultSite;
    }

    /**
     * create the protocol here.
     */
    jQuery.extend(WikiStrap.prototype, {

        /**
         * the direct api call with wiki site.
         * 
         * @param {object} action the wiki api query action.
         * @param {function} callback call back function
         */
        apiGet: function(action, callback) {
            var self = this;

            // decide the origin for cross domain access.
            if(self.siteOptions.origin != null) {
                // origis is set, append to tha action.
                action = jQuery.extend(
                  {'origin': self.siteOptions.origin},
                  action
                );
            }

            jQuery.get(self.getApiUrl(), action).
                done(function(data) {
                    // self.log(data);
                    callback(null, data);
                }).
                fail(function(data) {
                    // self.log(Error);
                    callback('Error', data);
                });
        },

        /**
         * return the full url to api.php.
         */
        getApiUrl: function() {

            var url = "//" +
                      this.siteOptions.baseUrl + 
                      this.siteOptions.apiPath;
            return url;
        },
    });

    // export to window
    window.WikiStrap = WikiStrap;
}());
