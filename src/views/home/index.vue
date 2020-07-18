<template>
  <div class="home-container">
    <h3>vuex 全局管理的数据如下</h3>
    <div>
      <h4>store.state.settings</h4>
      是否在侧边栏显示logo: {{ $store.state.settings.sidebarLogo }}<br />
      是否固定header: {{ $store.state.settings.fixedHeader }}
    </div>
    <div>
      <h4>store.state.app</h4>
      对象：{{ $store.state.app.sidebar }}<br>
      侧边栏当前是否展开状态：  {{ $store.state.app.sidebar. opened}}<br>
      当前访问设备(pc or mobile)：  {{ $store.state.app.device }}
    </div>
    <div>
      <h4>store.state.user</h4>
     token名称: {{ $store.state.user.token }}<br />
     名称：  {{ $store.state.user.name }}<br />
     头像： {{ $store.state.user.avatar }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapGetters(["name"])
  }
};
</script>

<style lang="scss" scoped>
.home {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
