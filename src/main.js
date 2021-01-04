import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
/* 引入移动端通用样式 */
import "./assets/css/main.css";
/* 引入axios */
import axios from "axios";
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
