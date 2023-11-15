const ImageminPlugin = require("imagemin-webpack-plugin").default;

module.exports = {
  webpack: {
    plugins: [
      // Add the ImageminPlugin to compress images during the build
      new ImageminPlugin({
        test: /\.(jpe?g|png|gif|svg)$/i,
        disable: process.env.NODE_ENV !== "production", // Disable during development
      }),
    ],
  },
};
