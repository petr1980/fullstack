const path = require("path");
const resolve = (param) => path.resolve(__dirname, `${param}`);

module.exports = {
  resolve: {
    alias: {
      "@": resolve("src"),
      "@components": resolve("src/components"),
      "@assets": resolve("src/assets"),
      "@pages": resolve("src/pages"),
      "@store": resolve("src/store"),
      "@styles": resolve("src/styles"),
      "@router": resolve("src/router"),
    },
  },
};
