const {
  saveBookHandler, showAllBooksHandler, showBookByIdHandler, changeBookHandler, deleteBookHandler,
} = require('./handler');

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
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: changeBookHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookHandler,
  },
];

module.exports = routes;
