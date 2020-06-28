<template lang="pug">
  header.global-header
    .global-header_brand
      nuxt-link.global-header_brandanchor(to="/")
        picture.global-header_picture
          source(media="(max-width: 768px)" srcset="@/assets/img/logo-mjso.svg")
          source(srcset="@/assets/img/logo-mjso_vertical.svg")
          img.global-header_logo(src="@/assets/img/logo-mjso_vertical.svg")
      .global-header_scroll
        ScrollingArrow(is-vertical=true)
    .global-header_nav
      GlobalHeaderHamburger(@click-hamburgar="toggleMenu")
      a.global-header_mail(href="mailto:user@example.com" target="_blank")
        svg-icon.global-header_mailicon(name="mail")
    transition(name="menu")
      GlobalMenu.global-header_menu(
        v-show="isShowMenu"
        :is-active="isShowMenu"
      )
</template>

<script>
import ScrollingArrow from '@/components/ScrollingArrow'
import GlobalMenu from '@/components/GlobalMenu'
import GlobalHeaderHamburger from '@/components/GlobalHeaderHamburger'

export default {
  components: {
    ScrollingArrow,
    GlobalMenu,
    GlobalHeaderHamburger,
  },

  data() {
    return {
      isShowMenu: false,
    }
  },

  methods: {
    toggleMenu() {
      this.isShowMenu = !this.isShowMenu
    },
  },
}
</script>

<style lang="scss" scoped>
.global-header {
  &_brand,
  &_nav {
    position: fixed;
    top: 0;
    width: $header-width;
    height: 100vh;
    padding: 60px 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  &_brand {
    left: 0;
    @include z-index(brand);
  }

  &_nav {
    right: 0;
    @include z-index(header);
  }

  &_brandanchor {
    display: block;
    width: 42px;
    height: auto;
  }

  &_scroll {
    font-size: 1.3rem;
  }

  &_mail {
    flex: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border: 1px solid $color-text;
    background-color: $color-text;
    border-radius: 50%;
    color: $color-white;
    transition: $transition-hover;
    transition-property: background-color;

    &:hover {
      background-color: $color-white;
    }
  }

  &_mailicon {
    width: 26px;
    transition: $transition-hover;
    transition-property: fill;
  }

  &_mail:hover &_mailicon {
    fill: $color-text;
  }

  &_menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    @include z-index(menu);
  }
}

@media (--sp) {
  .global-header {
    width: 100%;
    height: 50px;
    padding: 10px 20px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include z-index(header);

    &_scroll,
    &_hamburgertext,
    &_mail {
      display: none;
    }

    &_brand {
      display: block;
      position: static;
      width: auto;
      height: auto;
      padding: 0;
    }

    &_brandanchor {
      width: 220px;
      height: 24px;
    }

    &_picture {
      display: block;
      width: 100%;
      height: 100%;
    }

    &_nav {
      position: static;
      padding: 0;
      width: auto;
      height: auto;
    }

    &_hamburger {
      width: 30px;
      height: 30px;
    }

    &_hamburgericon {
      width: 100%;
      height: 100%;
    }
  }
}

.menu {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.5s;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
</style>
