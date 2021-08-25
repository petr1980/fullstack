<template>
  <form class="form" @submit.prevent="sendForm">
    <h2 class="form__title title">{{ title }}</h2>
    <slot name="content" />
    <div class="form__actions">
      <slot name="actions">
        <button class="button button-primary">Submit</button>
      </slot>
    </div>
  </form>
</template>

<script>
export default {
  name: "AppForm",
  props: {
    formData: {
      type: [Object],
      default: () => {},
    },
    title: {
      type: String,
      default: "Title form",
    },
  },
  emits: {
    submit(emit) {
      const valid = Object.keys(emit || {}).every((key) => {
        return emit[key];
      });
      if (!valid) {
        console.warn("submit", "Not valid data");
        return false;
      }
      return true;
    },
  },
  methods: {
    sendForm() {
      this.$emit("submit", this.formData);
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  &__title {
    margin-bottom: 1.5rem;
  }
  &__actions {
    margin-top: 2em;
  }
}
</style>