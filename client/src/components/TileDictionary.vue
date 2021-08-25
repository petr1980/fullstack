<template>
  <div class="tile-item">
    <div class="tile-item__title">{{ data.title }}</div>
    <div class="tile-item__count">{{ data.count }} words</div>
  </div>
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