describe('Basic specs to testing class loading', function() {

    beforeEach(function() {
        // load the home page.
        // relative to the baseUrl in protractor.conf.js.
        browser.get('demo/basic-load.html');
    });

    it('should load the html file', function() {

        var sumDiv = element(by.id('sum'));
        expect(sumDiv.getText()).toEqual('nothing');
    });

    it('should load the WikiStrap class', function() {

        var sumDiv = element(by.id('sum'));
        var plusButton = element(by.id('plus'));
        plusButton.click();
        expect(sumDiv.getText()).toEqual('//en.wikipedia.org/w/api.php');
    });
});
