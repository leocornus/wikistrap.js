Get Images in Category
======================

Present all images in a wiki category in one single page.

- get started with a demo page.
- bootstrap media list.

There are two major functionalities:

- list images as manual
- list images as photo album

images manual
-------------

The idea of using images in a wiki category to generate a one-page
manual for any thing.
Here are the simple steps:

- catch the screenshot,
- upload to wiki, set proper category.
- prepare the instructions for each screenshot,
  on wiki page for the image.
- wikistrap.js will load all images in the catetory and 
  present them as a manual.

Workflow thinking...
--------------------

- batch get all title for files in a category
- query all imageinfo at one api call

API calls for images manual
---------------------------

Return all images by query list categorymembers with type file::

  action = {
      'format' : 'json',
      'action' : 'query',
      'list' : 'categorymembers',
      // return only file type.
      'cmtype' : 'file',
      'cmprop' : 'ids|title|type',
      'cmtitle' : 'CATEGORY TITLE',
      'cmlimit' : 10
  }

default sort order?

query imageinfo with url and mime type::

  action = {
      'format' : 'json',
      'action' : 'query',
      'titles' : 'File:one.jpg|File:two.png',
      'prop' : 'imageinfo',
      'iiprop' : 'url|mime'
  }

Here is the return format for the imageinfo::

  "query": {
      "pages": {
          "925243": {
              "pageid": 925243,
              "ns": 6,
              "title": "File:Albert Einstein Head.jpg",
              "imagerepository": "local",
              "imageinfo": [
                  {
                      "url": "https://uploadnstein_Head.jpg",
                      "descriptionurl": "https://co.jpg",
                      "mime": "image/jpeg"
                  }
              ]
          },
          "3643108": {
              "pageid": 3643108,
              "ns": 6,
              "title": "File:Mendel rosenblum.jpg",
              "imagerepository": "local",
              "imageinfo": [
                  {
                      "url": "https://upload.wikimem.jpg",
                      "descriptionurl": "https://coenblum.jpg",
                      "mime": "image/jpeg"
                  }
              ]
          }
      }
  }

get article for the file::

  wikistrap.getArticle(pageTitle, function(err, $content) {
      // content html could be access
      $content.find('#content').html();
  });
