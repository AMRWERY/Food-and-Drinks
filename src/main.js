import { createApp } from 'vue';

import router from './router.js';
import store from './store/index.js';
import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

import "bootstrap"

import "bootstrap/dist/css/bootstrap.min.css"

const app = createApp(App)

app.use(router);
app.use(store);
app.use(vuetify);

app.component('base-badge', BaseBadge)

app.mount('#app');
