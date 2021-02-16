import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router";
import { mixinTraducteur } from "./mixins/mixinTraducteur.js";

import "bootstrap";
// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  router,
  mixins: [mixinTraducteur],
  render: (h) => h(App),
}).$mount("#app");
