import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import urql from '@urql/vue';

import App from './App.vue';
import homeRoutes from './modules/home/routes';
import bookRoutes from './modules/books/routes';

const app = createApp(App);

const routes = new Array().concat(homeRoutes).concat(bookRoutes);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);

app.use(urql, {
  url: 'http://localhost:8000/graphql',
});

app.mount('#app');
