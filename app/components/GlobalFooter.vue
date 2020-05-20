<template lang="pug">
footer.global-footer
  .global-footer_inner
    p footer

    small.global-footer_copyright Copyright &copy; 宮川司法書士事務所
</template>

<style lang="scss" scoped>
.global-footer {
  background-color: $color-background;
  padding: 0 $header-width;

  &_inner {
    padding: 60px 70px 50px;
  }

  &_copyright {
    width: 100%;
    display: inline-block;
    text-align: center;
  }
}

@media (--sp) {
  .global-footer {
    padding: 40px 0 20px;

    &_inner {
      padding: 0;
    }
  }
}
</style>
