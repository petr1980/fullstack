<template>
  <transition name="fadeSpinner">
    <div class="preloader" :class="[className]" v-if="show">
      <div class="spinner" v-if="type === 'circle'" />
      <div class="graph-loading" v-if="type === 'tiles'">
        <span v-for="item in 5" :key="item" class="graph-loading__bar" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "AppSpinner",
  props: {
    type: {
      type: String,
      default: "tiles",
    },
    show: {
      type: [Boolean],
      default: false,
    },
    className: {
      type: String,
      default: "",
    },
  },
  computed: {},
};
</script>

<style scoped lang="scss">
$color: orange;

.preloader {
  transition-delay: 0.2s;
  top: 0;
  left: 0;
  background-color: rgba(#1d2331, 0.5);
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1200;
  &.loadDataTable {
    position: fixed;
  }
  &.transparent {
    background-color: transparent;
  }

  .spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    margin: -25px 0 0 -25px;
    border: 3px solid white;
    border-radius: 50%;

    &:before {
      content: "";
      position: absolute;
      top: -3px;
      left: -3px;
      width: 50px;
      height: 50px;
      border: 3px solid;
      border-radius: 50%;
      border-color: transparent $color transparent transparent;
      animation: spin 1s linear infinite;
    }
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
}

.fadeSpinner-leave-active {
  transition: opacity 0.3s;
}
.fadeSpinner-enter-active {
  transition: opacity 0.5s;
}

.fadeSpinner-enter,
.fadeSpinner-leave-to {
  opacity: 0;
}

.graph-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 64px;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.graph-loading__bar {
  width: 13%;
  height: 100%;
  background: $color;
  animation: graph-loader 2.5s infinite;
  transform: scale(1, 0);
  transform-origin: bottom;
}

@for $i from 1 through 5 {
  .graph-loading__bar:nth-of-type(#{$i}) {
    animation-delay: $i/5 + s;
  }
}

@keyframes graph-loader {
  0% {
    transform: scale(1, 0);
    opacity: 0;
  }

  65% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(1, 0);
    opacity: 0;
  }
}
</style>
