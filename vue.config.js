const path = require("path");
const resolve = function(dir) {
  return path.join(__dirname, dir);
};
const IP = require("ip").address();
//Vue-cli3.0项目下axios请求本地json文件的数据
const express = require("express");
const app = express();
var singer = require("./static/1.json"); //本地json文件数据
var apiRoutes = express.Router();
app.use("/api", apiRoutes);

module.exports = {
  publicPath: "/", //process.env.NODE_ENV === "production" ? "./" : "./",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: true, // 是否开启eslint保存检测
  productionSourceMap: false, // 是否在构建生产包时生成sourcdeMap
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@v", resolve("src/views"))
      .set("@c", resolve("src/components"))
      .set("@u", resolve("src/utils"))
      .set("@s", resolve("src/service")); /* 别名配置 */
    config.optimization.runtimeChunk("single");
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
    }
  },
  devServer: {
    // host: "localhost",
    host: IP,
    /* 本地ip地址 */
    // host: "192.168.1.107",
    port: "8080",
    hot: true,
    /* 自动打开浏览器 */
    open: false,
    overlay: {
      warning: false,
      error: true,
    },
    //Vue-cli3.0项目下axios请求本地json文件的数据
    before(app) {
      app.post("/api/singer", (req, res) => {
        res.json({
          errno: 0, // 这里是你的json内容
          data: singer,
        });
      });
    },
    proxy: null, //设置跨域，即将本文件内任何没有匹配到的静态文件，都指向跨域地址

    // before: require("./mock"),
    /* 跨域代理 */
    //proxyTable:{
    // proxy: {
    //     '/api': {
    //         target: 'http://121.40.242.176:9595/api/ReportingTool/', //API服务器的地址
    //         ws: true, //代理websockets
    //         changeOrigin: true, // 虚拟的站点需要更管origin
    //         pathRewrite: { //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
    //             '^/api': ''
    //         }
    //     }
    // },
  },
};
