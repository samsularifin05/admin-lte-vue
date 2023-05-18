import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { About, Dasboard, Login, PageNotFound } from "../../pages";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/dashboard",
    name: "Home",
    component: Dasboard
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  { path: "/:pathMatch(.*)*", component: PageNotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
