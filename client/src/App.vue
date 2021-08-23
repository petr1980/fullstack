<template>
  <div class="main">
    <app-header v-if="showHeader" />
    <router-view />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  components: { AppHeader },
  name: "App",
  data() {
    return {
      showHeader: false,
    };
  },
  watch: {
    $route(route) {
      this.showHeader = route.name !== "Login";
    },
  },
};
</script>

<style lang="scss">
@import "src/styles/main";
</style>

