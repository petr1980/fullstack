import TranslateService from "../services/TranslateService.js";

class TranslateController {
  async getTranslate(req, res) {
    try {
      const { text, from, to } = req.query;
      const data = await TranslateService.getTranslate(text, from, to);
      res.json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new TranslateController();
