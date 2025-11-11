import {
  createRouter,
  createWebHashHistory,
} from "vue-router";

const routes = [
  {
    path: "/:pathMatch(.*)*",
    redirect: "/music.html",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;