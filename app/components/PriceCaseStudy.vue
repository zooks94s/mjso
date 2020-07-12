<template lang="pug">
  .price-case-study
    .price-case-study_heading
      slot(name="header")
    .price-case-study_body
      slot(name="body")
    .price-case-study_bottom(v-if="this.$slots.bottom")
      slot(name="bottom")
</template>

<style lang="scss" scoped>
.price-case-study {
  &_heading {
    text-align: center;
    margin-bottom: 40px;
  }

  &_bottom {
    margin-top: 50px;
  }
}

@media (--sp) {
  .price-case-study {
    &_heading {
      margin-bottom: 20px;
    }

    &_bottom {
      margin-top: 30px;
    }
  }
}
</style>
