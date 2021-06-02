import { createStore } from 'vuex';

import appModule from './modules/app/index'
import authModule from './modules/auth/index';
import editorModule from './modules/editor/index';

const store = createStore({
  modules: {
    app: appModule,
    auth: authModule,
    editor: editorModule
  }
});

export default store;
