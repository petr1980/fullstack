import { getTree } from "@/api";

export default {
  namespaced: true,

  state() {
    return {
      tree: [],
    };
  },
  getters: {},
  actions: {
    async getTree({ state, commit }) {
      if (state.tree.length) return;
      try {
        const { data } = await getTree();
        commit("setTree", data);
      } catch (err) {
        console.log(err);
      }
    },
  },
  mutations: {
    setTree(state, value) {
      state.tree = value;
    },
  },
};
