import { createRouter, createWebHistory } from 'vue-router';
import store from '../store/index';
import Editor from '../views/Editor.vue';
import Resultslist from '../views/Resultslist.vue';
import Entrylist from '../views/Entrylist.vue'

const routes = [
  {
    path: '/settings', component: Editor
  },
  {
    path: '/results', component: Resultslist
  },
  {
    path: '/entrylist', component: Entrylist
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(function (to, __, next) {
  store.dispatch('app/setActiveTab', {
    activeTab: to.path,
  });
  next();
})

export default router;
