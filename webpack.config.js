const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
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
          MiniCssExtractPlugin.loader,
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
    fallback: {
      path: require.resolve("path-browserify"),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "./css/[name].css" }),
  ],
  externals: [
    "@battis/jsx-api-components",
    "@battis/jsx-components",
    "@battis/jsx-factory",
    "@battis/jsx-ui",
    "@battis/typescript-tricks",
    "vanilla-router",
  ],
};
