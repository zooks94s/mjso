<template lang="pug">
  header.global-header
    .global-header_brand
      p
        nuxt-link(to="/") logo
      p Scroll
    .global-header_nav
      p menu
      p tel. 03-3388-0022
</template>

<style lang="scss" scoped>
.global-header {
  &_brand {
    position: fixed;
    top: 0;
    left: 0;
    width: $header-width;
    height: 100vh;
  }

  &_nav {
    position: fixed;
    top: 0;
    right: 0;
    width: $header-width;
    height: 100vh;
  }
}
</style>
