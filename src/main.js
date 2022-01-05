import { createApp } from 'vue';
import router from '@/router';

const app = createApp({});

app.mount('#app');

app.use(router);