<template>
  <div class="tree-component">
    <div class="tree-component__content" v-if="tree.length">
      <tree-item
        v-for="item in treeData"
        :key="item.id"
        :branch="item"
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
  width: 500px;
  min-height: 200px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid $gold;
}
</style>
