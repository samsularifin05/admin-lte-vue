import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { About, Dasboard, PageNotFound } from "../../pages";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Dasboard
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
