<template lang="pug">
  header.index-section-heading
    p.index-section-heading_category {{ category }}
    h2.index-section-heading_title {{ title }}
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      default: 'ABOUT US',
    },

    title: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.index-section-heading {
  display: flex;
  padding: 0 0 30px;
  display: table;

  &_category {
    display: table-cell;
    font-size: 1rem;
    color: $color-magenta;
    @include textTracking(150);
    padding-right: 12px;
  }

  &_title {
    display: table-cell;
    font-size: 2rem;
    font-family: $font-family-serif;
    @include textTracking(50);
    color: $color-text;
  }
}

@media (--sp) {
  .index-section-heading {
    display: block;
    padding-bottom: 0;

    &_category {
      display: block;
      padding-right: 0;
      margin-bottom: 15px;
    }

    &_title {
      font-size: 1.8rem;
    }
  }
}
</style>
