import { createRouter, createWebHistory } from "vue-router";
import routes from './routes'

const router = new createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
