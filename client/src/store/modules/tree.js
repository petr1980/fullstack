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
    async getTree({ commit }) {
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
