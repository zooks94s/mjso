<template lang="pug">
  .index-service-grid-item
    .index-service-grid-item_heading
      svg-icon.index-service-grid-item_icon(:name="icon")
      .index-service-grid-item_title {{ title }}
    p.index-service-grid-item_body(v-html="text")
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: null,
    },

    title: {
      type: String,
      default: null,
    },

    text: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.index-service-grid-item {
  background-color: rgba($color-white, 0.9);
  padding: 30px;
  min-height: 210px;

  &_heading {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    &::after {
      content: '';
      display: inline-block;
      width: 100%;
      height: 2px;
      background-color: #e73656;
      margin-left: 15px;
      transform: translateY(50%);
    }
  }

  &_icon {
    flex: 0 0 28px;
    width: 28px;
    height: 28px;
    margin-right: 10px;
  }

  &_title {
    flex: 0 0 auto;
    font-size: 1.8rem;
    font-weight: $weight-bold;
    font-family: $font-family-serif;
  }

  &_body {
    font-size: 1.4rem;
    line-height: 2;
  }
}
</style>
