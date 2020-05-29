<template lang="pug">
.global-menu
  ul.global-menu_list
    li.global-menu_item(
      v-for="item in list"
      :key="item.href"
    )
      nuxt-link.global-menu_anchor(:to="item.href") {{ item.text }}
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
.global-menu {
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
    transition: $transition-hover;
    transition-property: opacity;

    &:hover {
      opacity: $opacity-hover;
    }
  }
}
</style>
