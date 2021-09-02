<template>
  <div class="page">
    <div class="container">
      <h1 class="page-title">{{ title }}</h1>
      {{ translated }}
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
    this.loadTree();
    this.getTranslate();
  },

  computed: {
    ...mapState("tree", ["tree"]),
    ...mapState("translate", ["translated"]),
  },
  methods: {
    ...mapActions("tree", ["getTree"]),
    ...mapActions("translate", ["getTranslate"]),

    loadTree() {
      if (this.tree.length) return;
      this.loading = true;
      this.getTree().then(() => {
        this.loading = false;
      });
    },
  },
};
</script>

<style scoped></style>
