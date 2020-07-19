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

  &:nth-child(even) {
    background-color: #fcfbf9;
  }

  &_category {
    width: 100%;
    @include contentWidth;
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

@media (--narrow) {
  .index-section {
    &_category {
      @include contentWidthNarrow;
      font-size: 7.4vw;
    }
  }
}

@media (--sp) {
  .index-section {
    &_category {
      display: none;
    }
  }
}
</style>
