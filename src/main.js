import Vue from "vue";
import {Vuelidate} from "vuelidate";
import App from "./App.vue";
import init, { bootError } from "./initializeApp";
import Clipboard from "v-clipboard";
import router from "./router";
// import store from "./store";

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.config.errorHandler = function (err, vm, info){
    alert(info)
}
window.onerror = function(msg, url, line, column, error) {
    // ... обработка ошибки ...
    console.log(msg)
    console.log(url)
    console.log(line)
    console.log(column)
    console.log(error)
    alert(msg)
    return false;
}
Vue.use(Vuelidate)
Vue.use(Clipboard)

init()
  .then(({ apolloProvider, store }) => {
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
