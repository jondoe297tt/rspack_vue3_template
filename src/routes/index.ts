import { createRouter, createWebHashHistory } from "vue-router";

import Layout from "@/pages/layout/Index.vue";

const routes = [{ path: "/", component: Layout }];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
