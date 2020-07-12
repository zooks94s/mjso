<template lang="pug">
  dl.price-simulation-block
    dt.price-simulation-block_title {{ title }}
    dd.price-simulation-block_body
      slot
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.price-simulation-block {
  &_title {
    margin-bottom: 10px;
    font-weight: $weight-medium;
  }
}

@media (--sp) {
  .price-simulation-block {
    &_title {
      font-size: 1.1rem;
      margin-bottom: 5px;
    }
  }
}
</style>
