import router from "../router";
import store from "../store";
import { Message } from "element-ui";
// 进度条
import NProgress from "nprogress";
// 进度条样式
import "nprogress/nprogress.css";
// 从cookie中获取token
import { getToken } from "@/utils/auth";
import getPageTitle from "@/utils/get-page-title";
// 进度条配置
NProgress.configure({ showSpinner: false });

// 可以不用token就可访问的页面
const whiteList = ["/login"];

/**
 * vue-router 前置拦截器，导航触发时，全局拦截器按照创建顺序调用
 */
router.beforeEach(async (to, from, next) => {
  // 启动进度条
  NProgress.start();

  // 设置页面标题
  document.title = getPageTitle(to.meta.title);

  // 确认用户是否登录（token验证）
  const hasToken = getToken();

  if (hasToken) {
    if (to.path === "/login") {
      // 如果token已经存在并且当前访问的是login页面，直接重定向到首页
      next({ path: "/" });
      NProgress.done();
    } else {
      // 如果token已经存在但是当前访问的不是login页面则从store中获取用户信息
      const hasGetUserInfo = store.getters.name;
      if (hasGetUserInfo) {
        next();
      } else {
        try {
          // 获取用户详细信息
          await store.dispatch("user/getInfo");

          next();
        } catch (error) {
          // 出现异常则删除token,重新登录
          await store.dispatch("user/resetToken");
          Message.error(error || "Has Error");
          next(`/login?redirect=${to.path}`);
          NProgress.done();
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      // 没有token但是存在于白名单中也可直接登录
      next();
    } else {
      // 其余全部重定向到登录页面
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    }
  }
});

/**
 * vue-router 后置拦截器
 */
router.afterEach(() => {
  // 保证进度条正常完成
  NProgress.done();
});
