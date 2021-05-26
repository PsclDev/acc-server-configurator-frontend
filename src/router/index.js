import { createRouter, createWebHistory } from 'vue-router';
import Settings from '../components/settings.vue';
import Results from '../components/results.vue';

const routes = [
  {
    path: '/settings', component: Settings
  }, {
    path: '/results', component: Results
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
