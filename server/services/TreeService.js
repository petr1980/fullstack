import Tree from "../model/Tree.js";

class TreeService {
  getAll() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Tree);
      }, 1000);
    });
  }
}

export default new TreeService();
