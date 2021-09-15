import translateApi from "@/api/modules/translate";

export default {
  namespaced: true,

  state() {
    return {
      translated: "",
      lingvoliveToken: "",
      lingvolive: "",
    };
  },
  getters: {},
  actions: {
    async getTranslate({ commit }) {
      try {
        const { data } = await translateApi.getTranslate({
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
      if (localStorage.getItem("lingvoliveToken")) {
        commit("setLingvoliveToken", localStorage.getItem("lingvoliveToken"));
        return;
      }

      try {
        const { data } = await translateApi.registrationLingvolive();
        commit("setLingvoliveToken", data);
        localStorage.setItem("lingvoliveToken", data);
      } catch (err) {
        console.log(err);
      }
    },

    async getTranslateLingvolive({ state, commit, dispatch }) {
      const request = {
        text: "hazard",
        srcLang: "1033",
        dstLang: "1049",
        token: state.lingvoliveToken,
      };

      try {
        const data = await translateApi.getTranslateLingvolive({ request });
        commit("setLingvolive", data);
      } catch (error) {
        if (error.response.status === 401) {
          localStorage.removeItem("lingvoliveToken");
          dispatch("getLingvoliveToken");
        }
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
    setLingvolive(state, value) {
      state.lingvolive = value;
    },
  },
};
