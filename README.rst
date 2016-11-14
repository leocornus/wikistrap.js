|travis|_ |npm-version|_ |npm-license|_

wikistrap.js
============

Comprehensive JavaScript client to explore MediaWiki APIs, 
using jQuery, Bootstrap, Font-Awesome.

Quick Start
-----------

:install:
  $ npm install
:all tests:
  $ npm test
:unit test:
  $ npm run unit-test
:e2e test:
  $ npm run e2e-test
:demo app:
  $ npm run express-app

  visit http://localhost:8900/demo

Releases
--------

We use `Semantic Versioning`_ guidelines as much as possible.

- 0.0.6 funtions to pull pages and images from any category.
- 0.0.5 getArticle will get any wiki article and present the 
  content in bootstrap row with left and right column.
- 0.0.4 Set up to use express.js as the local testing server
  and demo server.
- 0.0.3 We have both unit and e2e testing set up properly now.
  We use Protractor for end to end testing.
- 0.0.2 started the empty JavaScript class and set Karma runner
  for unit testing.
- 0.0.1 initial commit to build the npm package.

Documentation
-------------

Check the `document folder <docs/README.rst>`_.

|nodei|_

.. |travis| image:: https://api.travis-ci.org/leocornus/wikistrap.js.png
.. _travis: https://travis-ci.org/leocornus/wikistrap.js
.. |npm-version| image:: https://img.shields.io/npm/v/wikistrap.js.svg
.. _npm-version: https://www.npmjs.com/package/wikistrap.js
.. |npm-license| image:: https://img.shields.io/npm/l/wikistrap.js.svg
.. _npm-license: https://www.npmjs.com/package/wikistrap.js
.. |nodei| image:: https://nodei.co/npm/wikistrap.js.png?downloads=true&downloadRank=true&stars=true
.. _nodei: https://nodei.co/npm/wikistrap.js/
.. _Semantic Versioning: http://semver.org/
