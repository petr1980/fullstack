<template>
  <div class="flip">
    <div class="flip__list" v-for="word in words" :key="word.id">
      <slot name="tile" :word="word"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrainingFlipCards",
  props: {
    words: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped lang="scss">
.flip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px 10px;
  list-style: none;
  padding: 0;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
