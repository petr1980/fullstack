import { getTranslate } from "@/api";

export default {
  namespaced: true,

  state() {
    return {
      translated: "",
    };
  },
  getters: {},
  actions: {
    async getTranslate({ commit }) {
      try {
        const { data } = await getTranslate({
          text: "Привет мир",
          from: "ru",
          to: "en",
        });
        commit("setTranslate", data.text);
      } catch (err) {
        console.log(err);
      }
    },
  },
  mutations: {
    setTranslate(state, value) {
      state.translated = value;
    },
  },
};
