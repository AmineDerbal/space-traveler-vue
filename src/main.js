import { createApp } from 'vue'; // Import createApp from Vue
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/styles/main.css'; // Import main.css file

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
