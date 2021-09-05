import axios from "axios";

class LingvoliveTranslateService {
  #apiKey =
    "ZGU4NmNhYWUtZjFjOC00NWQxLWFiODQtZmRjNDBmNzNkOTJiOmRkYzUzMmYyOGZjMTRhN2M5MWM0YzEwMjM4ZjcwYjBh";

  #rootUrl = "https://developers.lingvolive.com/api";
  #authURL = `${this.#rootUrl}/v1.1/authenticate`;
  #minicardUrl = `${this.#rootUrl}/v1/Minicard`;

  async registration() {
    return await axios.post(
      this.#authURL,
      {},
      {
        headers: {
          Authorization: `Basic ${this.#apiKey}`,
        },
      }
    );
  }

  async translate(request) {
    const { text, srcLang, dstLang, token } = request.body;
    return await axios.get(`${this.#minicardUrl}`, {
      params: { text, srcLang, dstLang },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default new LingvoliveTranslateService();
