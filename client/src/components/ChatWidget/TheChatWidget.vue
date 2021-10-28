<template>
  <div class="chat-widget">
    <chat-btn @click="showChat()" :show="chatWindow"></chat-btn>
    <chat-window :show="chatWindow"></chat-window>
  </div>
</template>

<script>
import ChatBtn from "@/components/ChatWidget/ChatBtn";
import ChatWindow from "@/components/ChatWidget/ChatWindow";
export default {
  name: "TheChatWidget",
  components: { ChatBtn, ChatWindow },
  data() {
    return {
      chatWindow: false,
    };
  },

  methods: {
    showChat() {
      this.chatWindow = !this.chatWindow;
    },
  },
};
</script>

<style scoped lang="scss"></style>
