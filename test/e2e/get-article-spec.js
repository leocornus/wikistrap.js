describe('Basic specs for getArticle', function() {

    // page title input nad load page button.
    var pageTitle;
    var loadPage;

    beforeEach(function() {
        // load the demo page.
        // relative to the baseUrl in protractor.conf.js.
        browser.get('demo/get-article.html');

        loadPage = element(by.id('load-page'));
        pageTitle = element(by.id('page-title'));

        // we need the content container to verify some results.
        content = element(by.id('content-container'));
    });

    it('should load the get article demo page', function() {

        // verify the title.
        var title = element(by.id('demo-title'));
        expect(title.getText()).toEqual('Demonstrate Get Article');

        // verify the load page button.
        expect(loadPage.getText()).toEqual('Load Page');

        // title input field should exist.
        expect(pageTitle).not.toBe(null);

        // make sure the content container is empty string
        var content = element(by.id('content-container'));
        // text should be empty string.
        expect(content.getText()).toBe('');
        // inner html will include newline.
        expect(content.getInnerHtml()).toBe('\n');
    });

    it('should load Main Page of wikipedia', function() {
        
        pageTitle.sendKeys('Main Page');
        loadPage.click();

        // need sleep a couple seconds to make sure the 
        // response are back.
        //browser.sleep(1000);
        browser.wait(function() {
            return content.isElementPresent(by.css('.panel-heading'));
        });

        // find some content on the wikipedia main page to verify the 

        // page is loaded properly.
        // find the today's featureed article.
        var tfa = element(by.id('mp-tfa-h2'));
        expect(tfa.getText()).
            toEqual("From today's featured article");
    });

    it('should have class affix when scroll to bottom', function() {

        pageTitle.sendKeys('Blank pad rule');
        loadPage.click();
        //browser.sleep(1500);
        browser.wait(function() {
            return content.isElementPresent(by.css('.panel-heading'));
        });

        // find the navigation column
        var navClass = element(by.id('navpanel')).
                       getAttribute('class');
        //expect(navClass).not.toMatch(' affix');
        expect(navClass).toMatch('affix-top');

        // scroll down to bottom of the page.
        browser.executeScript('window.scrollTo(0, 1000000)').
            then(function() {

            // need refresh the nav class by locate it again.
            navClass = element(by.id('navpanel')).
                       getAttribute('class');
            expect(navClass).toMatch('affix');
            expect(navClass).not.toMatch('affix-top');
        });

        // scroll back to top of the page.
        browser.executeScript('window.scrollTo(0, 0)').
            then(function() {

            // need refresh the nav class.
            navClass = element(by.id('navpanel')).
                       getAttribute('class');
            //expect(navClass).toMatch('affix');
            expect(navClass).toMatch('affix-top');
        });
    });

    it('should have article title as the nav panel heading', 
        function() {

        pageTitle.sendKeys('China');
        loadPage.click();

        // sleep in miniseconds
        //browser.sleep(2000);
        // wait until the element with panel-heading class 
        // present, no timeout.
        browser.wait(function() {
            return content.isElementPresent(by.css('.panel-heading'));
        });

        // find the heading by class name.
        var heading = element(by.className('panel-heading'));
        expect(heading.getText()).toBe('China');
    });
});
