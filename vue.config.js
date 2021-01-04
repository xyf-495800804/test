module.exports = {
  lintOnSave: false,
  publicPath: "./",
  // 服务项配置
  devServer: {
    proxy: {
      "/cad": {
        target: "https://121.4.30.105:80/cad/",
        changeOrigin: true, //是否跨域
        ws: true, //是否代理 websockets
        secure: true, //是否https接口
        pathRewrite: {
          //路径重置
          "^/cad": ""
        }
      }
    }
  }
};
