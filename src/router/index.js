import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 * 路由配置，这里没有做角色权限控制
 * 如果path设置为 '/',会被当做是默认页
 */
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },
  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true
  },
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/home/index"),
        meta: { title: "首页", icon: "home" }
      }
    ]
  },
  {
    path: "/example",
    component: Layout,
    redirect: "/example/table",
    name: "Example",
    meta: { title: "示例", icon: "el-icon-s-help" },
    children: [
      {
        path: "table",
        name: "Table",
        component: () => import("@/views/table/index"),
        meta: { title: "表格", icon: "table" }
      },
      {
        path: "tree",
        name: "Tree",
        component: () => import("@/views/tree/index"),
        meta: { title: "树形菜单", icon: "tree" }
      }
    ]
  },
  {
    path: "/form",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Form",
        component: () => import("@/views/form/index"),
        meta: { title: "表单", icon: "form" }
      }
    ]
  },
  {
    path: "/drawer",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Drawer",
        component: () => import("@/views/drawer/index"),
        meta: { title: "抽屉", icon: "el-icon-lollipop" }
      }
    ]
  },
  {
    path: "/tabs",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Tabs",
        component: () => import("@/views/tabs/index"),
        meta: { title: "选项卡", icon: "el-icon-bank-card" }
      }
    ]
  },
  {
    path: "/nested",
    component: Layout,
    redirect: "/nested/menu1",
    name: "Nested",
    meta: {
      title: "嵌套菜单",
      icon: "nested"
    },
    children: [
      {
        path: "menu1",
        component: () => import("@/views/nested/menu1/index"),
        name: "Menu1",
        meta: { title: "菜单1" },
        children: [
          {
            path: "menu1-1",
            component: () => import("@/views/nested/menu1/menu1-1"),
            name: "Menu1-1",
            meta: { title: "菜单1-1" }
          },
          {
            path: "menu1-2",
            component: () => import("@/views/nested/menu1/menu1-2"),
            name: "Menu1-2",
            meta: { title: "菜单1-2" },
            children: [
              {
                path: "menu1-2-1",
                component: () =>
                  import("@/views/nested/menu1/menu1-2/menu1-2-1"),
                name: "Menu1-2-1",
                meta: { title: "菜单1-2-1" }
              },
              {
                path: "menu1-2-2",
                component: () =>
                  import("@/views/nested/menu1/menu1-2/menu1-2-2"),
                name: "Menu1-2-2",
                meta: { title: "菜单1-2-2" }
              }
            ]
          },
          {
            path: "menu1-3",
            component: () => import("@/views/nested/menu1/menu1-3"),
            name: "Menu1-3",
            meta: { title: "菜单1-3" }
          }
        ]
      },
      {
        path: "menu2",
        component: () => import("@/views/nested/menu2/index"),
        name: "Menu2",
        meta: { title: "菜单2" }
      }
    ]
  },
  // 404页面必须放在最后
  { path: "*", redirect: "/404", hidden: true }
];

const createRouter = () =>
  new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

// 详细见:https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher;
}

export default router;
