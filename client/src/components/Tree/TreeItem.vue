<template>
  <div class="tree-item">
    <div class="tree-item__content">
      <pre>{{ branch }}</pre>
    </div>
    <div class="tree-item__branch" v-if="treeData.length">
      <tree-item
        v-for="item in treeData"
        :key="item.id"
        :branch="item.children"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "TreeItem",
  data() {
    return {
      isOpen: false,
    };
  },

  props: {
    branch: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    treeData() {
      return this.branch?.children ?? [];
    },
  },
};
</script>

<style scoped></style>
