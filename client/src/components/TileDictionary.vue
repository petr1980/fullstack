<template>
  <router-link
    class="tile-item"
    :to="{ name: 'vocabulary', params: { id: data.id } }"
  >
    <div class="tile-item__title">{{ data.title }}</div>
    <div class="tile-item__count">{{ data.count }} words</div>
  </router-link>
</template>

<script>
export default {
  name: "TileDictionary",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      title: "My dictionary",
    };
  },
};
</script>

<style lang="scss" scoped>
.tile-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: rem(180px);
  padding: 15px;
  color: inherit;
  text-decoration: none;
  @include tale-color(transparent, 4px);
  &:hover {
    @include tale-hover();
  }
  &__title {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
  }
  &__count {
    font-size: 0.9rem;
  }
}
</style>