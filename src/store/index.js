import { createStore } from 'vuex';

import appModule from './modules/app/index'
import authModule from './modules/auth/index';
import editorModule from './modules/editor/index';
import entryListModule from './modules/entrylist/index'
import resultsModule from './modules/results/index'

const store = createStore({
  modules: {
    app: appModule,
    auth: authModule,
    editor: editorModule,
    entryList: entryListModule,
    results: resultsModule
  }
});

export default store;
