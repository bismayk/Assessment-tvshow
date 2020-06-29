import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './services/config'

import vuetify from './plugins/vuetify'

import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);

Vue.config.productionTip = false;


new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
