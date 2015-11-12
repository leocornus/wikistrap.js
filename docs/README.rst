wikistrap.js Documentation
==========================


Get started
-----------

start actions:

- decide the folder sturcture.
- setup npm and its family
- simple unit test cases.
- simple e2e test cases.

wikistrap.js will be delivered as a JavaScript library.
We will follow the best practice of JavaScript development.
Node.js will be used to management the whole development process.

Folder structure::

  README.rst
  package.json
  bower.json
  gulpfile.js
  src\
    |- wikistrap.js
    |- default-template.js
  test\
    |- karma.conf.js
    |- protractor.config.js
    |- unit\
         |- specs\
         |- fixtures\
    |- e2e\
         |- view-page.js
         |- view-category.js
  demo\
  dist\

initial setup
-------------

need initial the npm project and install basic modules::

  $ npm init
  $ npm install gulp gulp-karma karma --save-dev
