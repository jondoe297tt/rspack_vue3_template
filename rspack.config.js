// @ts-check
const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");
const EslintPlugin = require("eslint-webpack-plugin");
const rspack = require("@rspack/core");
const { RsdoctorRspackPlugin } = require("@rsdoctor/rspack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const Dotenv = require("dotenv-webpack");
const isProduction = process.env.NODE_ENV == "production";
/** @type {import('@rspack/cli').Configuration} */
module.exports = {
  context: __dirname,
  devtool: "inline-source-map",
  output: {
    path:path.resolve(__dirname,"dist")
  },
  plugins: [
    isProduction && new RsdoctorRspackPlugin({}),
    isProduction && new BundleAnalyzerPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, `.env.${process.env.NODE_ENV || "development"}`),
    }),
    new rspack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      "process.env.DEBUG": JSON.stringify(process.env.DEBUG),
    }),
    new EslintPlugin({
      files: path.resolve(__dirname, "src"),
      rulePaths: [__dirname],
    }),
    new VueLoaderPlugin(),
    new rspack.HtmlRspackPlugin({
      template: "./index.html",
    }),
  ],
  optimization: {
    realContentHash: true,
    minimize: isProduction,
    minimizer: [
      new rspack.SwcJsMinimizerRspackPlugin({
        format: {
          comments: false,
        },
        compress:{
          drop_console:true,
          drop_debugger:true,

        }
      }),
      new rspack.SwcCssMinimizerRspackPlugin(),
    ],
  },
  entry: {
    main: path.resolve(__dirname, "src", "main.ts"),
  },
  resolve: {
    extensions: ["...", ".ts", ".vue"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
            options: {
              // 注意，为了绝大多数功能的可用性，请确保该选项为 `true`
              experimentalInlineMatchResource: true,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: ["postcss-loader", "less-loader"],
        type: "css",
      },
      {
        test: /\.css$/,
        use: ["postcss-loader"],
        type: "css",
      },
      {
        test: /\.(ts|js)$/,
        exclude: [/node_modules/],
        loader: "builtin:swc-loader",
        options: {
          jsc: {
            parser: {
              syntax: "typescript",
              topLevelAwait: true,
            },
          },
          minify: true,
        },
        type: "javascript/auto",
      },
    ],
  },
  devServer: {
    port: "3030",
    open: true,
  },
};
