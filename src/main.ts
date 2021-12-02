import { createApp } from 'vue';
import urql from '@urql/vue';

import App from './App.vue';

const app = createApp(App);

app.use(urql, {
  url: 'http://localhost:8000/graphql',
});

app.mount('#app');
