<template>
  <div class="page">
    <div class="container">
      <h1 class="page-title">{{ title }}</h1>
      {{ lingvolive }}111111111111
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
    this.getLingvoliveToken().then(() => {
      this.getTranslateLingvolive();
    });
    // this.$toast.success(`Hey! I'm here`);
    // this.$toast.error(`Hey! I'm here`);
    // this.$toast.warning(`Hey! I'm here`);
    // this.$toast.info(`Hey!<br> I'm here`);
  },

  computed: {
    ...mapState("tree", ["tree"]),
    ...mapState("translate", ["lingvolive"]),
  },
  methods: {
    ...mapActions("tree", ["getTree"]),
    ...mapActions("translate", [
      "getLingvoliveToken",
      "getTranslateLingvolive",
    ]),

    loadTree() {
      if (this.tree.length) return;
      this.loading = true;
      this.getTree().then((data) => {
        if (data?.error) {
          this.$toast.error(data.error);
        }
        this.loading = false;
      });
    },
  },
};
</script>

<style scoped></style>
