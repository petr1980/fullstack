<template>
  <div class="main">
    <the-header v-if="showHeader" />
    <router-view />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  components: { TheHeader },
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
