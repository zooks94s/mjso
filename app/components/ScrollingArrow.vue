<template lang="pug">
.scrolling-arrow
  .scrolling-arrow_text(:class="{ '-vertical': isVertical }") SCROLL
  .scrolling-arrow_mask
    svg-icon.scrolling-arrow_icon(name="arrow_downward")
</template>

<script>
export default {
  props: {
    isVertical: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.scrolling-arrow {
  display: flex;
  flex-direction: column;
  align-items: center;

  &_text {
    color: $color-black;
    @include textTracking(150);
    margin-bottom: 8px;
  }

  &_text.-vertical {
    writing-mode: vertical-rl;
  }

  &_icon {
    height: 28px;
    fill: none;
    stroke: $color-black;
    stroke-width: 1;
    stroke-dasharray: 800 400;
    animation: scrollDown 4s linear 6s infinite;
  }
}

@keyframes scrollDown {
  0% {
    stroke-dashoffset: 1200;
  }

  100% {
    stroke-dashoffset: 0;
  }
}
</style>
