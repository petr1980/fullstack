import {
  getTranslate,
  registrationLingvolive,
  getTranslateLingvolive,
} from "@/api";

export default {
  namespaced: true,

  state() {
    return {
      translated: "",
      lingvoliveToken: "",
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

    async getLingvoliveToken({ state, commit }) {
      if (state.lingvoliveToken) return;
      if (localStorage.getItem("token")) {
        commit("setLingvoliveToken", localStorage.getItem("token"));
        return;
      }

      try {
        const { data } = await registrationLingvolive();
        commit("setLingvoliveToken", data);
        localStorage.setItem({ token: data });
      } catch (err) {
        console.log(err);
      }
    },

    async getTranslateLingvolive({ state }) {
      const request = {
        text: "hazard",
        srcLang: "1033",
        dstLang: "1049",
        token: state.lingvoliveToken,
      };

      try {
        const data = await getTranslateLingvolive({ request });
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  },
  mutations: {
    setTranslate(state, value) {
      state.translated = value;
    },
    setLingvoliveToken(state, value) {
      state.lingvoliveToken = value;
    },
  },
};
