describe('Basic specs for get images in category', function() {

    // page title input nad load page button.
    var category;
    var loadCategory;

    beforeEach(function() {
        // load the demo page.
        // relative to the baseUrl in protractor.conf.js.
        browser.get('demo/get-images-in-category.html');

        loadCategory = element(by.id('load-cat'));
        category = element(by.id('cat-title'));
        // we need the content container to verify some results.
        content = element(by.id('content-container'));
    });

    it('should load the get images in category demo page', 
        function() {

        // verify the title.
        var title = element(by.id('demo-title'));
        expect(title.getText()).toEqual('Get Images in Category');

        // verify the load page button.
        expect(loadCategory.getText()).toEqual('Load Category Images');

        // title input field should exist.
        expect(category).not.toBe(null);

        // make sure the content container is empty string
        var content = element(by.id('content-container'));
        // text should be empty string.
        expect(content.getText()).toBe('');
        // inner html will include newline.
        expect(content.getInnerHtml()).toBe('\n');
    });

    it('should load all images in Space Shuttle Atlantis', 
        function(){

        // send the key.
        category.sendKeys('Space_Shuttle_Atlantis');
        loadCategory.click();

        // sleep for response comming.
        //browser.sleep(3000);
        // wait until the div with class .row present.
        browser.wait(function() {
            return content.isElementPresent(by.css('.row'));
        }
        // we could set wait timeout here in ms.
        // if not set, the default timeout will be used.
        //, 3000
        // and set timeout message here:
        //, 'it should present in 3 seconds'
        );

        var row = element(by.css('.row'));
        //console.log(row.getTagName());
        expect(row.getTagName()).toBe('div');
        //expect(row).not.toBe(0);
        //expect(row).toEqual(20);

        // check all rows.
        var rows = element.all(by.css('.row'));
        expect(rows.count()).toBe(3);
    });
});
