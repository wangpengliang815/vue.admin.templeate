<template>
  <div class="home-container">
    <div class="home-text">
      {{ $store.state.settings.showSettings }}
      {{ $store.state.settings.sidebarLogo }}
      {{ $store.state.settings.fixedHeader }}
    </div>
    <hr />
    <div class="home-text">
      {{ $store.state.app.sidebar }}
      {{ $store.state.app.device }}
    </div>
    <hr />
    <div class="home-text">
      {{ $store.state.user.token }}<br>
      {{ $store.state.user.name }}<br>
      {{ $store.state.user.avatar }}
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
