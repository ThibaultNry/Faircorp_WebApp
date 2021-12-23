import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/windows",
    name: "Windows",
    component: () =>
      import(/* webpackChunkName: "get" */ "../views/Windows.vue"),
  },
  {
    path: "/rooms",
    name: "Rooms",
    component: () =>
      import(/* webpackChunkName: "get" */ "../views/Rooms.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
