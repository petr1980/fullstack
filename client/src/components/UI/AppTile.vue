<template>
  <div class="tile-item">
    <div
      class="flip-card"
      v-if="flip"
      @click="rotate"
      :class="{ rotated: rotated }"
    >
      <div class="flip-card-inner">
        <div class="flip-card-front">
          {{ word.ru }}
        </div>
        <div class="flip-card-back">
          <p>{{ word.en }}</p>
        </div>
      </div>
    </div>

    <div class="tile-item__card" v-else>{{ word.ru }}</div>
  </div>
</template>

<script>
export default {
  name: "AppTile",
  props: {
    word: {
      type: Object,
      default: () => {},
    },
    flip: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      rotated: false,
    };
  },

  methods: {
    rotate() {
      this.rotated = !this.rotated;
    },
  },
};
</script>

<style scoped lang="scss">
.tile-item {
  cursor: pointer;
  font-size: 1.7rem;
}

.flip-card {
  color: inherit;
  text-decoration: none;
  perspective: 1000px;
  &:hover {
    .flip-card-inner {
      transform: rotateY(10deg);
    }
  }
  &.rotated {
    .flip-card-inner {
      transform: rotateY(180deg);
    }
  }
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: rem(180px);
  transition: transform 0.5s;
  transform-style: preserve-3d;
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

.flip-card-front {
  color: $text-color;
  @include tale-color($gold, 4px);
}

.flip-card-back {
  color: $text-dark;
  @include tale-color(transparent, 4px, $white);

  transform: rotateY(180deg);
}
</style>
