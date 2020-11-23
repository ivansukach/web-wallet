import Vue from "vue";
import App from "./App.vue";
import init, { bootError } from "./initializeApp";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

init()
  .then(({ apolloProvider }) => {
    new Vue({
      router,
      store,
      apolloProvider,
      render: h => h(App)
    }).$mount("#app");
  })
  .catch(error => {
    bootError(error);
  });
