import translate from "@vitalets/google-translate-api";

class TranslateSetvice {
  async getTranslate(text, { from, to }) {
    return await translate(text, { from, to });
  }
}

export default new TranslateSetvice();
