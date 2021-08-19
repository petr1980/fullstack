<template>
  <div class="main">
    <app-header />
    <router-view />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  components: { AppHeader },
  name: "App",
};
</script>

<style lang="scss">
@import "src/styles/main";
</style>

