<template>
  <div class="form-item">
    <label class="form-item__label">{{ label }}</label>
    <slot />
    <span class="form-item__warn" v-if="invalid">{{ warn }}</span>
  </div>
</template>

<script>
export default {
  name: "AppFormItemWrapper",
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
    display: block;
    margin-bottom: 5px;
    font-size: 0.9rem;
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
