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

API calls for images manual
---------------------------

list categorymembers with type file::

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

query imageinfo with url and mime type::

  action = {
      'format' : 'json',
      'action' : 'query',
      'titles' : 'File:one.jpg|File:two.png',
      'prop' : 'imageinfo',
      'iiprop' : 'url|mime'
  }

get article for the file
