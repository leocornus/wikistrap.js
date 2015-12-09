describe('Testing Initialization', function() {

    var simpleDiv = 
        '<div id="simple" class="sandbox">Some thing</div>';
    var $element, element;

    beforeEach(function() {
        $element = $(simpleDiv);
        element = $element[0];
    });

    it("simple jquery object", function() {

        // this will make sure jQuery is loaded properly.
        expect($element.html()).toBe("Some thing");
        // attr method to get the elemet attribute.
        expect($element.attr('id')).toBe('simple');
        expect($element.attr('class')).toBe('sandbox');
    });

    it('initialize the WikiStrap class', function() {

        var client = new WikiStrap();
        // successfully created an instance of WikiStrap class.
        expect(client).not.toBe(null);
        expect(typeof client).toBe('object');

        var apiUrl = client.getApiUrl();
        // this will be default api url, wikipedia site api.php
        expect(apiUrl).toBe('//en.wikipedia.org/w/api.php');
    });
});
