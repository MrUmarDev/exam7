type localeType = null | string;

import { createI18n } from 'vue-i18n';
const locale: localeType = localStorage.getItem('lang') || 'uz';

const i18n = createI18n({
  locale,
  fallbackLocale: 'uz',
  legacy: false
});

export default i18n;
