import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';

// Plugins
import { persistentStorage } from './pinia/plugins/persistentStorage';

// Custom styles
import './assets/styles/index.scss';

const app = createApp(App);
const pinia = createPinia();

// Pinia config
pinia.use(persistentStorage);

// App config
app.use(pinia);

app.mount('#app');
