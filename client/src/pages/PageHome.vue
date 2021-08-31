<template>
  <div class="page">
    <div class="container">
      <h1 class="page-title">{{ title }}</h1>
      <tree-component :tree="tree">
        <app-spinner :show="loading" type="circle" />
      </tree-component>
    </div>
  </div>
</template>

<script>
import TreeComponent from "@/components/Tree/TreeComponent";
import { mapState, mapActions } from "vuex";

export default {
  components: { TreeComponent },
  name: "PageHome",
  data() {
    return {
      title: "Home page",
      loading: false,
    };
  },
  created() {
    this.loading = true;
    this.getTree().then(() => {
      this.loading = false;
    });

    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },

  computed: {
    ...mapState("tree", ["tree"]),
  },
  methods: {
    ...mapActions("tree", ["getTree"]),
  },
};
</script>

<style scoped></style>
