import { createRouter, createWebHistory } from 'vue-router';
import SettingsList from '../components/Settings/SettingsList.vue';
import ResultsList from '../components/Results/ResultsList.vue';

const routes = [
  {
    path: '/settings', component: SettingsList
  }, {
    path: '/results', component: ResultsList
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
