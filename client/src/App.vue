<template>
  <div class="main">
    <the-header v-if="showHeader" />
    <router-view />
    <the-chat-widget></the-chat-widget>
  </div>
</template>

<script>
import TheChatWidget from "@/components/ChatWidget/TheChatWidget";
import TheHeader from "./components/TheHeader.vue";
export default {
  components: { TheChatWidget, TheHeader },
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
