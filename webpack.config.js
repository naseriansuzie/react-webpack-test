const path = require("path");
const webpack = require("webpack");

module.exports = {
  name: "react with webpack setting",
  mode: "development", // production에서는 'production'
  devtool: "eval", // production에서는 'hidden-source-map'
  resolve: {
    extensions: [".js", ".jsx"]
  },

  entry: {
    app: ["./app"]
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          // babel 설정
          presets: [
            // plugin들의 모임
            [
              "@babel/preset-env",
              {
                // 특정 preset에 대한 설정
                targets: {
                  browsers: ["> 5% in KR"] // 브라우저 버전 대응
                }
                //debug: true
              }
            ],
            "@babel/preset-react"
          ],
          plugins: ["react-hot-loader/babel"]
        }
      }
    ]
  },
  plugins: [
    // 확장 기능 : webpack을 통해 추가적으로 설정하고 싶은 내용들 기입
  ],

  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist", // webpack-dev-server 사용 시에도 path를 dist로 지정(가상 경로 같음)
    filename: "bundle.js"
  }
};
