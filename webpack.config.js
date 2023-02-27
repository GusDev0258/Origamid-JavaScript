const path = require("path");

module.exports = {
  entry: "/projeto-javascript/script/script.js",
  output: {
    path: path.resolve(__dirname, "./otimizado"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
