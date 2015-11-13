/**
 * started with an empty class.
 */
;(function() {

    function WikiStrap() {
    }

    jQuery.extend(WikiStrap.prototype, {

        helloWorld: function() {

            return 'Hello WikiStrap!';
        },
    });

    // export to window
    window.WikiStrap = WikiStrap;
}());
