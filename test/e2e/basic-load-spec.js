describe('Empty for now', function() {

    beforeEach(function() {
        // load the home page.
        // relative to the baseUrl in protractor.conf.js.
        browser.get('demo/basic-load.html');
    });

    it('should load the html file', function() {

        var sumDiv = element(by.id('sum'));
        expect(sumDiv.getText()).toEqual('nothing');
    });
});
