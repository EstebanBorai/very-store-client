import Books from './views/Books.vue';
import Book from './views/Book.vue';

const routes = [
  {
    path: '/books',
    component: Books,
  },
  {
    path: '/books/:slug',
    component: Book,
  }
];

export default routes;
