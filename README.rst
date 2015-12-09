|travis|_ |npm-version|_ |npm-license|_

|nodei|_

wikistrap.js
============

Comprehensive JavaScript client to explore MediaWiki APIs, 
using jQuery, Bootstrap, Font-Awesome.

Releases
--------

We use `Semantic Versioning`_ guidelines as much as possible.

- 0.0.4 Set up to use express.js as the local testing server
  and demo server.
- 0.0.3 We have both unit and e2e testing set up properly now.
  We use Protractor for end to end testing.
- 0.0.2 started the empty JavaScript class and set Karma runner
  for unit testing.
- 0.0.1 initial commit to build the npm package.

Quick Start
-----------

:install:
  $ npm install

  $ bower install
:unit test:
  $ npm run gulp unit-test
:e2e test:
  $ npm run gulp e2e-test
:demo app:
  $ npm run gulp express-app

Documentation
-------------

Check the `document folder <docs\README.rst>`_.

.. |travis| image:: https://api.travis-ci.org/leocornus/wikistrap.js.png
.. _travis: https://travis-ci.org/leocornus/wikistrap.js
.. |npm-version| image:: https://img.shields.io/npm/v/wikistrap.js.svg
.. _npm-version: https://www.npmjs.com/package/wikistrap.js
.. |npm-license| image:: https://img.shields.io/npm/l/wikistrap.js.svg
.. _npm-license: https://www.npmjs.com/package/wikistrap.js
.. |nodei| image:: https://nodei.co/npm/wikistrap.js.png?downloads=true&downloadRank=true&stars=true
.. _nodei: https://nodei.co/npm/wikistrap.js/
.. _Semantic Versioning: http://semver.org/
