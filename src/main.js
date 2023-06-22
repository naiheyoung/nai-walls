import './assets/css/base.css';
import '@/assets/css/tailwind.css';
import '@/assets/css/myself.css';

import { createApp } from 'vue';
import WallHome from './WallHome.vue';
import router from './router';

const app = createApp(WallHome);
app.use(router);
app.mount('#app');
