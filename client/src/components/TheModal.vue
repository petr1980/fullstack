<template>
  <div class="modal" v-if="isOpen">
    <div class="modal__content">
      <slot name="content"></slot>
      <slot name="actions">
        <div class="modal__btns">
          <button class="button button-primary" @click="confirm">
            Confirm
          </button>
          <button class="button button-cancel" @click="closeModal">
            Cancel
          </button>
        </div>
      </slot>
      <button class="modal__close button button-close" @click="closeModal">
        <i class="icon-close"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheModal",
  data() {
    return {};
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  emits: {
    confirm: null,
    closeModal: null,
  },

  mounted() {
    document.addEventListener("keydown", this.handleKeydown);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  },

  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    confirm() {
      this.$emit("confirm");
    },

    handleKeydown(e) {
      if (this.isOpen && e.key === "Escape") {
        this.closeModal();
      }
    },
  },
};
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background: $opacity-bg;
  &__content {
    width: 500px;
    max-width: 95%;
    padding: 15px;
    margin: auto;
    @include tale-color();
  }
  &__close {
    position: absolute;
    top: 5px;
    right: 5px;
  }
}
</style>
