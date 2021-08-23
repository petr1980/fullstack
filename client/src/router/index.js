import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/PageHome"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../pages/PageLogin"),
  },
  {
    path: "/dictionary",
    name: "Dictionary",
    component: () => import("../pages/PegeDictionary"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
