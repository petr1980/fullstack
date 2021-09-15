import LingvoliveTranslateService from "../services/LingvoliveTranslateService.js";

class LingvoliveTranslateController {
  async registrtion(req, res) {
    try {
      const { data } = await LingvoliveTranslateService.registration();
      res.json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async translate(req, res) {
    try {
      const { data } = await LingvoliveTranslateService.translate(req);
      res.json(data);
    } catch (error) {
      if (error.response.status === 401) {
        return res.status(401).json(error);
      }
      res.status(500).json(error);
    }
  }
}

export default new LingvoliveTranslateController();
