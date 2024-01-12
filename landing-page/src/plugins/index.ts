/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from '@/plugins/vuetify';
import pinia from 'src/stores';
import router from '@/router';
import i18n from '@/plugins/i18n';

export function registerPlugins(app: any) {
  app.use(vuetify).use(pinia).use(router).use(i18n);
}
