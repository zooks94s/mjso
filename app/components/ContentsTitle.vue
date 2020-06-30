<template lang="pug">
  ContentsHeading
    .contents-title
      p.contents-title_category {{ category }}
      h1.contents-title_text {{ title }}
</template>

<script>
import ContentsHeading from '@/components/ContentsHeading'

export default {
  components: {
    ContentsHeading,
  },

  props: {
    category: {
      type: String,
      default: null,
    },

    title: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.contents-title {
  &_category {
    font-size: 1.2rem;
    @include textTracking(150);
  }

  &_text {
    margin-top: 60px;
    font-size: 4rem;
    font-weight: $weight-medium;
    font-family: $font-family-serif;
    @include textTracking(50);
  }
}
</style>
