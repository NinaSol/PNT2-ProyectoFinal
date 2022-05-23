import Vue from 'vue'
import App from './App.vue'
import router from '@/router';
import { createPinia, PiniaVuePlugin } from "pinia";

Vue.config.productionTip = false

const pinia = createPinia();
Vue.use(PiniaVuePlugin);

import "bootstrap/dist/css/bootstrap.css";

new Vue({
  router,
  pinia,
  render: h => h(App),
}).$mount('#app')
