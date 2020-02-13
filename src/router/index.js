import Vue from "vue";
import VueRouter from "vue-router";
import Welcome from "../views/Welcome.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "welcome",
    component: Welcome
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: {
      auth: true
    }
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      guest: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      guest: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  //console.log("middleware");
  if (!store.getters.user.loggedIn && to.meta.auth) {
    next({
      name: "login",
      query: {
        redirect: to.fullPath
      }
    });
  }

  if (store.getters.user.loggedIn && to.meta.guest) {
    next({
      name: "welcome"
    });
  }

  next();
});

export default router;
