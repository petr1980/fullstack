<template>
  <label class="form-item">
    <div class="form-item__label">{{ label }}</div>
    <slot />
    <span class="form-item__warn" v-if="invalid">{{ warn }}</span>
  </label>
</template>

<script>
export default {
  name: "FormItemWrapper",
  props: {
    invalid: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "Enter text",
    },
    warn: {
      type: String,
      default: "Field is reqired",
    },
  },
};
</script>

<style lang="scss" scoped>
.form-item {
  display: block;
  position: relative;
  margin-bottom: 20px;
  &__label {
    margin-bottom: 5px;
  }
  &__warn {
    position: absolute;
    top: 100%;
    margin-top: 5p;
    color: red;
    font-size: 0.8em;
  }
}
</style>