import api from "../index";

class TranslateApi {
  getTranslate(params) {
    return api.get(`${process.env.VUE_APP_URL}/translate`, { params });
  }

  registrationLingvolive() {
    return api.get(`${process.env.VUE_APP_URL}/lingvolive/api/key`);
  }

  getTranslateLingvolive({ request }) {
    return api.post(
      `${process.env.VUE_APP_URL}/lingvolive/api/translate`,
      request
    );
  }
}

export default new TranslateApi();
