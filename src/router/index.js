import { createRouter, createWebHistory } from 'vue-router';
import vHome from '../views/Home.view.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: vHome,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
