import { createStore } from "vuex";

import helpers from "./modules/helpers";
import tree from "./modules/tree";
import translate from "./modules/translate";

const store = createStore({
  state: {
    test: "test is ready",
  },
  getters: {},
  actions: {},
  mutations: {},
  modules: { helpers, tree, translate },
});

export default store;
