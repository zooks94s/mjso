<template lang="pug">
  .contents-heading
    slot
</template>

<style lang="scss" scoped>
.contents-heading {
  height: 50vh;
  min-height: 390px;
  @include contentWidth;
  padding-top: 140px;
  padding-bottom: 110px;
}

@media (--narrow) {
  .contents-heading {
    @include contentWidthNarrow;
  }
}

@media (--sp) {
  .contents-heading {
    height: auto;
    min-height: initial;
    @include contentWidthSp;
    padding-top: (112px / 2);
    padding-bottom: (140px / 2);
  }
}
</style>
