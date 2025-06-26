// main.ts
import { createApp } from 'vue'
import App from './src/App.vue'
import { i18n } from './src/i18n'

createApp(App)
  .use(i18n)
  .mount('#app')
