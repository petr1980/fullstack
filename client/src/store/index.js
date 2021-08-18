import { createStore } from "vuex";

import helpers from "./modules/helpers";

const store = createStore({
  state: {
    test: "test is ready",
  },
  getters: {},
  actions: {},
  mutations: {},
  modules: { helpers },
});

export default store;
