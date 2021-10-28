<template>
  <div class="chat-btn">
    <i class="icon icon-close" v-if="show"></i>
    <i class="icon icon-bubbles3" v-else></i>
  </div>
</template>

<script>
export default {
  name: "ChatBtn",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
.chat-btn {
  position: fixed;
  bottom: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: $green-500;
  border-radius: 50%;
  line-height: 1;
  cursor: pointer;
  .icon {
    font-size: 20px;
  }
  .icon-close {
    padding-top: 3px;
  }
}
</style>
