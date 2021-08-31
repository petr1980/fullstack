import TreeService from "../services/TreeService.js";

class TreeController {
  async getAll(req, res) {
    try {
      const data = await TreeService.getAll();
      res.json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new TreeController();
