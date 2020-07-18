import Vue from 'vue';
import 'normalize.css/normalize.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en';
import '@/styles/index.scss';
import App from './App';
import store from './store';
import router from './router';
import '@/icons';
import '@/utils/permission';

/**
*如果您不想使用模拟服务器
*你想用MockJs来模拟api
可以执行:mockXHR()
*
*目前MockJs将用于生产环境，
*请在上线前删除!!!
*/

if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock');
  mockXHR();
}

// 设置 ElementUI 国际化
// Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI);

// 关闭生产模式下给出的提示*/
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
