import { createRouter, createWebHistory } from 'vue-router';
import Editor from '../views/Editor.vue';
import Results from '../views/Results.vue';

const routes = [
  {
    path: '/settings', component: Editor
  }, {
    path: '/results', component: Results
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
