<template lang="pug">
  button.scrolling-to-top(
    type="button"
    v-scroll-to="'#app'"
  )
    .scrolling-to-top_container
      svg-icon.scrolling-to-top_arrow(name="arrow_upward")
      span.scrolling-to-top_text TOP
</template>

<style lang="scss" scoped>
.scrolling-to-top {
  display: block;

  &_container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &_arrow {
    height: 28px;
    fill: none;
    stroke: $color-black;
    stroke-width: 1;
    stroke-dasharray: 800 400;
    animation: scrollUp 4s linear 6s infinite;
  }

  &_text {
    display: inline-block;
    @include textTracking(150);
    margin-top: 8px;
    font-weight: $weight-medium;
    writing-mode: vertical-rl;
  }
}

@keyframes scrollUp {
  0% {
    stroke-dashoffset: 0;
  }

  100% {
    stroke-dashoffset: 1200;
  }
}
</style>
