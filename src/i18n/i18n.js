import Vue from 'vue';
import VueI18n from 'vue-i18n';
import pl from './pl.json';

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: 'pl',
  fallbackLocale: 'pl',
  messages: pl,
});
