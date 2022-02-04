import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import User from './modules/User.store.js';

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user: User
  },
  plugins: [createPersistedState()],
})
