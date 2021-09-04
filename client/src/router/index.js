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
    component: () => import("../pages/PageDictionary"),
  },
  {
    path: "/dictionary/vocabulary/:id",
    name: "vocabulary",
    component: () => import("../pages/PageVocabulary.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
