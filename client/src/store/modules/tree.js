import treeApi from "@/api/modules/tree";

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
        const { data } = await treeApi.getTree();
        commit("setTree", data);
      } catch (err) {
        console.log(err.message);
        return { error: err.message };
      }
    },
  },
  mutations: {
    setTree(state, value) {
      state.tree = value;
    },
  },
};
