// es6的模块采用严格模式，严格模式具体限制参考：https://www.runoob.com/js/js-strict.html
"use strict";

// 使用require引入模块和文件
const path = require("path");
const defaultSettings = require("./src/utils/settings.js");

function resolve(dir) {
  return path.join(__dirname, dir);
}

// 页面标题
const name = defaultSettings.title || "vue Admin Template";

// 端口号设置，如需更改端口号：npm run dev --port = 9090
const port = process.env.port || process.env.npm_config_port || 9528;

// vue cli相关配置，所有配置项参考 https://cli.vuejs.org/config/
module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: process.env.NODE_ENV === "development",
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    before: require("./mock/mock-server.js")
  },
  configureWebpack: {
    // 在webpack的name字段中提供应用程序的标题，可以在index.html中访问它来注入正确的标题
    name: name,
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  },
  chainWebpack(config) {
    // 预加载设置，可以提高初始页面加载速度，建议开启预
    config.plugin("preload").tap(() => [
      {
        rel: "preload",
        // 忽略runtime.js
        // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: "initial"
      }
    ]);

    // 当有很多页面时，会产生很多无意义的请求
    config.plugins.delete("prefetch");

    // 设置 svg-sprite-loader
    config.module
      .rule("svg")
      .exclude.add(resolve("src/icons"))
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      })
      .end();

    config.when(process.env.NODE_ENV !== "development", config => {
      config
        .plugin("ScriptExtHtmlWebpackPlugin")
        .after("html")
        .use("script-ext-html-webpack-plugin", [
          {
            // 'runtime'必须与runtimeChunk名称相同。默认是“运行时”
            inline: /runtime\..*\.js$/
          }
        ])
        .end();
      config.optimization.splitChunks({
        chunks: "all",
        cacheGroups: {
          libs: {
            name: "chunk-libs",
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: "initial" // 只打包最初依赖的第三方
          },
          elementUI: {
            name: "chunk-elementUI", // 将elementUI拆分为单个包
            priority: 20, // 大小需要大于libs和app，否则会被打包到libs或app中
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // 为了适应 cnpm 设置
          },
          commons: {
            name: "chunk-commons",
            test: resolve("src/components"), // 可以自定义规则
            minChunks: 3,
            priority: 5,
            reuseExistingChunk: true
          }
        }
      });
      // https://webpack.js.org/configuration/optimization/#optimizationruntimechunk
      config.optimization.runtimeChunk("single");
    });
  }
};
