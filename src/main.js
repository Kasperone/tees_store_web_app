import { createApp } from 'vue';
// import { i18n } from './i18n/i18n';
import { createI18n } from 'vue-i18n';
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
  .mount('#app');
