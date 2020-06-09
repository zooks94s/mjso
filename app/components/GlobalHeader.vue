<template lang="pug">
  header.global-header
    .global-header_brand
      nuxt-link.global-header_brandanchor(to="/")
        picture
          source(media="(max-width: 768px)" srcset="@/assets/img/logo-mjso.svg")
          source(srcset="@/assets/img/logo-mjso_vertical.svg")
          img.global-header_logo(src="@/assets/img/logo-mjso_vertical.svg")
      .global-header_scroll
        ScrollingArrow(is-vertical=true)
    .global-header_nav
      button.global-header_hamburger(
        type="button"
        @click="toggleMenu"
      )
        span.global-header_hamburgericon
        p.global-header_hamburgertext {{ toggleMenuText }}
      a.global-header_mail(href="mailto:user@example.com")
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

export default {
  components: {
    ScrollingArrow,
    GlobalMenu,
  },

  data() {
    return {
      isShowMenu: false,
    }
  },

  computed: {
    toggleMenuText() {
      return this.isShowMenu ? 'CLOSE' : 'MENU'
    },
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

  &_hamburger {
    display: block;
  }

  &_hamburgericon {
    display: block;
    width: 20px;
    height: 14px;
    background-color: $color-black;
  }

  &_hamburgertext {
    margin-top: 15px;
    font-size: 1.3rem;
    color: $color-black;
    writing-mode: vertical-rl;
    @include textTracking(150);
  }

  &_mail {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: $color-text;
    border-radius: 50%;
    color: $color-white;
  }

  &_mailicon {
    width: 26px;
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

    &_brand {
      display: block;
      position: static;
      width: auto;
      height: auto;
      padding: 0;
    }

    &_brandanchor {
      width: 220px;
    }

    &_scroll,
    &_contact {
      display: none;
    }

    &_nav {
      display: none;
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
