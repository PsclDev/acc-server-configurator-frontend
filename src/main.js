import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';

import BaseCard from './components/UI/BaseCard';

import '@/assets/styles/main.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faKey, faUserTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUser);
library.add(faKey);
library.add(faUserTag);

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(store);
app.use(router);
app.mount('#app');
