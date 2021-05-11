const { saveBookHandler, showAllBooksHandler, showBookByIdHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: saveBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: showAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: showBookByIdHandler,
  },
];

module.exports = routes;
