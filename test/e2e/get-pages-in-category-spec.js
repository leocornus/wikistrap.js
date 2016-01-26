describe('Basic specs for get pages in category', function() {

    // page title input nad load page button.
    var category;
    var loadCategory;

    beforeEach(function() {
        // load the demo page.
        // relative to the baseUrl in protractor.conf.js.
        browser.get('demo/get-pages-in-category.html');

        loadCategory = element(by.id('load-cat'));
        category = element(by.id('cat-title'));
    });

    it('should load the get pages in category demo page', function() {

        // verify the title.
        var title = element(by.id('demo-title'));
        expect(title.getText()).toEqual('Demonstrate Get Pages in Category');

        // verify the load page button.
        expect(loadCategory.getText()).toEqual('Load Category');

        // title input field should exist.
        expect(category).not.toBe(null);

        // make sure the content container is empty string
        var content = element(by.id('content-container'));
        // text should be empty string.
        expect(content.getText()).toBe('');
        // inner html will include newline.
        expect(content.getInnerHtml()).toBe('\n');
    });
});
