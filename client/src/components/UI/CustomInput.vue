<template>
  <input :type="type" class="form-input" :value="modelValue" @input="update" />
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    modelValue: String,
    type: {
      type: String,
      default: "text",
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {};
  },
  methods: {
    update(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.form-input {
  display: block;
  width: 100%;
  height: 35px;
  padding: 0 10px;
}
</style>