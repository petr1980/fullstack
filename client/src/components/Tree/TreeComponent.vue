<template>
  <div class="tree-component">
    <div class="tree-component__content" v-if="tree.length">
      <tree-item
        v-for="branch in treeData"
        :key="branch.id"
        :branch="branch"
      ></tree-item>
    </div>
    <slot />
  </div>
</template>

<script>
import TreeItem from "@/components/Tree/TreeItem";
export default {
  name: "TreeComponent",
  components: { TreeItem },
  props: {
    tree: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    treeData() {
      return this.tree;
    },
  },
};
</script>

<style scoped lang="scss">
.tree-component {
  position: relative;
  width: 300px;
  height: 500px;
  margin: 0 auto;
}
</style>
