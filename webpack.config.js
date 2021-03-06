"use strict";
const path = require("path");
const { transform } = require("@formatjs/ts-transformer");

module.exports = {
  entry: "./src/main.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              getCustomTransformers: {
                before: [
                  transform({
                    overrideIdFn: "[sha512:contenthash:base64:6]",
                    ast: true,
                  }),
                ],
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
