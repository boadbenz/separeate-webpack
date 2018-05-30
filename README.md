# separate-webpack
separate-webpack

ใน package.json
ให้ config ตอน start app ดังนี้


"scripts": {
    "production": "webpack -p --config webpack.prod.config.js",
    "start": "webpack-dev-server --config webpack.dev.config.js",
    "test": "",
    "watch": "webpack -p"
  },
