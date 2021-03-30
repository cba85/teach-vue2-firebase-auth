import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";
import Vuelidate from "vuelidate";

Vue.config.productionTip = false;
Vue.use(Vuelidate);

require("./assets/scss/app.scss");

var firebaseConfig = {};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  //console.log(user);
  store.dispatch("fetchUser", user);

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
});
