const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./index.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    library: {
      name: "BattisJsxApiUi",
      type: "umd",
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: { configFile: "tsconfig.dist.json" },
        },
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { importLoaders: 2 },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["postcss-preset-env"],
              },
            },
          },
          {
            loader: "sass-loader",
            options: { implementation: require("sass") },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: "raw-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [new CleanWebpackPlugin()],
  devtool: "inline-source-map",
  externals: [
    "@battis/jsx-api-components",
    "@battis/jsx-components",
    "@battis/jsx-factory",
    "@battis/jsx-lib",
    "@battis/jsx-ui",
    "@battis/monkey-patches",
    "@battis/typescript-tricks",
  ],
};
