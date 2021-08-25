<template>
  <div class="page">
    <div class="container">
      <app-spinner :show="loading" type="circle" />
      <h1 class="page-title">{{ title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "PageHome",
  data() {
    return {
      title: "Home page",
      loading: true,
    };
  },
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
};
</script>

<style scoped></style>
