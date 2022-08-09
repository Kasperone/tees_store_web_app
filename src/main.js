import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import axios from 'axios';
import VueAxios from 'vue-axios';
import pl from './i18n/pl.json';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';

const i18n = createI18n({
  locale: 'pl',
  fallbackLocale: 'en',
  messages: {
    pl,
  },
});

createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .use(VueAxios, axios)
  .mount('#app');
