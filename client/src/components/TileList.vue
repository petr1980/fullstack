<template>
  <section class="section">
    <h2 class="section-title">{{ title }}</h2>
    <ul class="tile-list" v-if="items && items.length">
      <li class="tile-list__item" v-for="item in items" :key="item.id">
        <slot name="tile" :item="item"> </slot>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "TileList",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: "List title",
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.tile-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px 2px;
  list-style: none;
  padding: 0;
}
</style>