import { createStore } from 'vuex';

import authModule from './modules/auth/index';
import editorModule from './modules/editor/index';

const store = createStore({
  modules: {
    auth: authModule,
    editor: editorModule
  }
});

export default store;
