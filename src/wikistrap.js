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

            /**
             * direct HTTP get method.
             */
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

        /**
         * get a wiki article.
         *
         * @param {string} title the page title, which should 
         *        be unique in a wiki site.
         */
        getArticle: function(title, callback) {

            // save the original this.
            var self = this;

            // get ready the data send to wiki api.php.
            var action = {
                'format' : 'json',
                'action' : 'parse',
                'page' : title,
                'prop' : 'text'
            };

            // call wiki api
            self.apiGet(action, function(err, data) {

                if(err) {
                    // got error.
                    callback(err);
                    return;
                }

                // get the page content html from response.
                var content = data.parse.text['*'];
                // process the content to match bootstrap.
                content = self.createArticleRow(title, content);
                callback(null, content);
            });
        },

        /**
         * create bootstrap row for wiki article content.
         */
        createArticleRow: function(title, content) {

            var self = this;

            var processed = this.processArticleContent(title, content);
            var contentHtml = processed['content'];
            var tocHtml = processed['toc'];
            var rowHtml = '<div class="row">' +
                '  <div class="col-md-9" id="content">' + 
                contentHtml + 
                '  </div>' + 
                '  <div class="col-md-3" id="navcol">' + 
                tocHtml +
                '  </div>' + 
                '</div>';

            // hook the resize event.
            jQuery(window).on('resize', function() {

                self.syncSidenavWidth();
            });

            var $row = jQuery(rowHtml);
            return $row;
        },

        /**
         * utility method to process the wiki article HTML
         */
        processArticleContent: function(title, content) {

            // parse the content html to a jQuery object.
            var $content = jQuery('<div>').html(content);
            // find the TOC div.
            var $toc = $content.find('div#toc>ul');
            //$toc.find('a').attr('data-toggle', 'pill');
            var liHtml = $toc.html();

            var navPanel = '<div class="panel panel-info' +
                '                sidebar-nav-fixed affix-top"' +
                '                id="navpanel"' + 
                '                style="margin-left: -15px">' + 
                '  <div class="panel-heading">' +
                '    <strong>' + title + '</strong>' + 
                '  </div>' +
                '  <div id="sidenav">' + 
                '    <ul class="nav nav-pills nav-stacked"' +
                '        style="max-height: 450px; ' + 
                '               overflow-y: auto">' +
                liHtml + 
                '    </ul>' +
                '  </div>' + 
                '</div>';

            //$toc.find('div#toctitle').replaceWith('');
            //alert(tocHtml);
            // convert the toc to bootstrap scroll spy.
            var $nav = jQuery('<nav class="affix" id="sidenav">').
                       html($toc.html());
            // add 
            $nav.find('ul').addClass('nav');
            // add class for the first ul.
            $nav.children('ul').addClass('nav-pills nav-stacked')
                .attr('data-spy', 'affix').attr('id', 'thenav');
            //$nav.find('a').attr('data-toggle', 'pill');
            // remove all class for li
            $nav.find('li').attr('class', '');
            var $toc = jQuery('<div>').html($nav);

            // adding the scroll styp for body:
            //var $body = jQuery('body');
            //$body.attr('data-spy', 'scroll').attr('data-target', '#sidenav');

            // remove TOC from content.
            $content.find('div#toc').replaceWith('');
            // remove the edit seciton for each heading.
            $content.find('span.mw-editsection').replaceWith('');
            var contentHtml = $content.html();
            // replace globaly! all occurrence!
            contentHtml = contentHtml.replace(/"\/wiki\//g, 
               '"//' + this.siteOptions.baseUrl + '/wiki/');

            var ret = {'toc' : navPanel, 
                       'content' : contentHtml};
            return ret; 
        },

        /**
         * utility method to set the outer width of target object to 
         * be the same with the source object.
         */
        syncSidenavWidth: function() {

            var $source = jQuery('#navcol');
            var $target = jQuery('#navpanel');
            $target.outerWidth($source.outerWidth());
            this.setAffixSpy();
        },

        /**
         * set the affix spy for nave panel.
         */
        setAffixSpy: function() {
            var $panel = jQuery('#navpanel');
            $panel.affix({
                offset: {
                    // in pixel.
                    top: this.siteOptions.affixOffsetTop
                }
            });
        },
    });

    // export to window
    window.WikiStrap = WikiStrap;
}());
