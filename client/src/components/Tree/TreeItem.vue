<template>
  <div class="tree-item">
    <div class="tree-item__content">
      <div
        class="tree-item__btn"
        :class="{ opened: isOpen }"
        v-if="treeData.length"
        @click="isOpen = !isOpen"
      >
        >
      </div>

      {{ branch.name }}
    </div>

    <div class="tree-item__branch" v-if="treeData.length && isOpen">
      <tree-item v-for="item in treeData" :key="item.id" :branch="item" />
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

<style scoped lang="scss">
.tree-item {
  padding: 5px 0;
  &__content {
    display: flex;
    align-items: center;
  }
  &__btn {
    width: 15px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    background: green;
    &.opened {
      transform: rotate(90deg);
    }
  }
  &__branch {
    padding-left: 20px;
  }
}
</style>
