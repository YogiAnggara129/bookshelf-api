const { saveBook, showAllBooks } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: saveBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: showAllBooks,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: () => {},
  },
];

module.exports = routes;
