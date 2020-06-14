<template lang="pug">
.global-contents-nav
  ul.global-contents-nav_list
    li.global-contents-nav_item(
      v-for="item in list"
      :key="item.href"
    )
      nuxt-link.global-contents-nav_anchor(:to="item.href") {{ item.text }}
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          text: '私たちについて',
          href: '/about',
        },
        {
          text: 'サービスについて',
          href: '/service',
        },
        {
          text: '料金のご案内',
          href: '/price',
        },
        {
          text: 'プライバシーポリシー',
          href: '/privacy',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.global-contents-nav {
  display: flex;
  height: 100%;

  &_list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &_anchor {
    color: $color-text;
    text-decoration: none;
    @include hoverOpacity;
  }
}
</style>
