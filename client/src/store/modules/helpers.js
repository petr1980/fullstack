export default {
  namespaced: true,
  state() {
    return {
      spiner: "I am spiner",
    };
  },
  getters: {
    getSpin(state) {
      return state.spiner;
    },
  },
  actions: {},
  mutations: {},
};
