import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/details/:id",
    name: "Details",
    component: () =>
      import("../views/Details.vue")
  },
  {
    path: "/genre",
    name: "Genre",
    component: () =>
      import("../views/Genre.vue")
  }
];

const router = new VueRouter({
  mode: "history",  //to avoid # in URl
  base: process.env.BASE_URL,
  routes
});

export default router;