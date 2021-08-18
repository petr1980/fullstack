module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",

  css: {
    requireModuleExtension: false,
    sourceMap: true,
    loaderOptions: {
      scss: {
        prependData: `
        @import "@/styles/helpers/_colors.scss";
        @import "@/styles/helpers/_mixins.scss";
                `,
      },
    },
  },
};
