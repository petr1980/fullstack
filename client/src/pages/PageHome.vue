<template>
  <div>
    <app-spiner />
    <h2>{{ $store.getters["helpers/getSpin"] }}</h2>
  </div>
</template>

<script>
export default {
  components: {},
  name: "PageHome",
};
</script>

<style scoped></style>
