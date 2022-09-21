// const sassResourcesLoader = require("craco-sass-resources-loader");
const path = require("path");
const pathResolve = (pathUrl) => path.join(__dirname, pathUrl);
module.exports = {
  webpack: {
    alias: {
      "@@": pathResolve("."),
      "@": pathResolve("src"),
      "@common": pathResolve("src/common"),
      "@components": pathResolve("src/components"),
      "@pages": pathResolve("src/pages"),
      "@store": pathResolve("src/store"),
      "@utils": pathResolve("src/utils"),
      "@router": pathResolve("src/router"),
    },
  },

  // plugins: [
  //   {
  //     plugin: sassResourcesLoader,
  //     options: {},
  //   },
  // ],
};
