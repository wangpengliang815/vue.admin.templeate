## 获取源码
获取源码
>`git clone https://github.com/wangpengliang815/vue.admin.sample.git`

安装npm依赖包
> `npm install` 

运行
> `npm run dev`

##  项目结构
```
├──  build                       // 构建相关  
├──  mock                        // 使用mock.js构建Mock数据前后端分离开发
├──  public                      // 首页模板
├──  src                         // 源代码 
├──  ├──  api                    // 所有请求
├──  ├──  assets                 // 主题 字体等静态资源
├──  ├──  components             // 全局公用组件
├──  ├──  icons                  // 项目所有 svg icons
├──  ├──  router                 // 路由
├──  ├──  store                  // 全局 store管理
├──  ├──  styles                 // 全局样式
├──  ├──  utils                  // 全局公用方法 
├──  ├──  views                  // view
├──  ├──  App.vue                // 入口页面
├──  ├──  main.js                // 入口 加载组件 初始化等
├──  ├──  permission.js          // 权限管理
├──  tests                       // 前端测试
├──  .editorconfig               // 功能优于Eslint，主要用来进行代码风格控制
├──  .babelrc                    // babel-loader编译es6,打包压缩等功能
├──  eslintrc.js                 // eslint,提供不同IDE统一代码规范
├──  .gitignore                  // git,git忽略文件 
├──  .jest.config                // jest前端测试
├──  package.json                // package.json
```
## 涉及知识点
- vue2.x
- vuex
- element ui
- mock.js 
- axios
- vue-cli
- vue-router