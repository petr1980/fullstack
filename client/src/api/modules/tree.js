import api from "../index";

class TreeApi {
  getTree() {
    return api.get(`${process.env.VUE_APP_URL}/tree`);
  }
}

export default new TreeApi();
