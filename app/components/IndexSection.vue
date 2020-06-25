<template lang="pug">
  section.index-section
    .index-section_category {{ category }}
    slot
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      default: 'ABOUT US',
    },
  },
}
</script>

<style lang="scss" scoped>
.index-section {
  position: relative;
  background-color: $color-white;

  &:nth-child(even) {
    background-color: #fcfbf9;
  }

  &_category {
    width: 100%;
    padding: 0 calcRelativeWith($header-width, $wrapper-width);
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-50%);
    font-size: 9.5rem;
    line-height: 1;
    @include textTracking(150);
    font-weight: $weight-medium;
    color: #d8d8d0;
    opacity: 0.5;
    text-align: right;
  }
}
</style>
