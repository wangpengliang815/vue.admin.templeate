import defaultSettings from "@/utils/settings";

const { fixedHeader, sidebarLogo } = defaultSettings;

/**
 * 这里的state就是要管理的数据
 */
const state = {
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo
};

/**
 * Mutation是操作state数据的方法的集合，比如对该数据的修改、增加、删除等
 * 不能直接调用一个mutation handler
 * 这个选项更像是事件注册：当触发一个类型为 increment 的mutation时，调用此函数
 * 要唤醒一个mutation handler，你需要以相应的type调用store.commit方法，例如：store.commit('CHANGE_SETTING')
 * 注意：这里并没有使用常量替代Mutation事件类型
 */
const mutations = {
  // 更新setting
  CHANGE_SETTING: (state, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value;
    }
  }
};

/**
 * Action 类似于 mutation，不同在于：
 * Action 提交的是 mutation，而不是直接变更状态
 * Action 可以包含任意异步操作
 */
const actions = {
  changeSetting({ commit }, data) {
    // 注意这里的参数是mutations中的某个handler
    commit("CHANGE_SETTING", data);
  }
};

/**
 * 提供分模块出口
 * vuex 中的store分模块管理
 * 需要在store的index.js中引入各个模块
 * 为了解决不同模块命名冲突的问题，将不同模块的namespaced:true，之后在不同页面中引入getter、actions、mutations时，需要加上所属的模块名
 */
export default {
  namespaced: true,
  state,
  mutations,
  actions
};
