<template>
  <div>
    <app-spinner :show="loading" type="circle" />
    <h2>{{ $store.getters["helpers/getSpin"] }}</h2>
  </div>
</template>

<script>
export default {
  components: {},
  name: "PageHome",
  data() {
    return {
      loading: true,
    };
  },
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  },
};
</script>

<style scoped></style>
