import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from 'vue-query';

import App from './App.vue';
import router from '@/routes/routes';
import '@/assets/scss/globalStyle.scss'

const vueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  }
};
const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(VueQueryPlugin, vueQueryPluginOptions);
app.mount('#app');
