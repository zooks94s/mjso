<template lang="pug">
  .global-menu
    .global-menu_visual
      img.global-menu_image(src="@/assets/img/img-circle.svg")
      nuxt-link.global-menu_anchor(to="/")
        img.global-menu_logo(src="@/assets/img/logo-typography.svg" alt="宮川司法書士事務所")
    .global-menu_contents
      .global-menu_nav
        GlobalContentsNav
      .global-menu_sns
        SnsButtonFacebook
</template>

<script>
import GlobalContentsNav from '@/components/GlobalContentsNav'
import SnsButtonFacebook from '@/components/SnsButtonFacebook'

export default {
  components: {
    GlobalContentsNav,
    SnsButtonFacebook,
  },

  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.global-menu {
  display: flex;
  justify-content: space-between;
  padding: 30px calcRelativeWith($header-width, $wrapper-width, 'vw');
  background-color: $color-background;

  &_visual {
    max-width: 584px;
    width: calcRelativeWith(584px, $wrapper-width, 'vw');
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    position: relative;
  }

  &_image {
    flex: none;
    width: 100%;
    max-width: 584px;
  }

  &_logo {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: calcRelativeWith(248px, 583px);
  }

  &_anchor {
    @include hoverOpacity;
  }

  &_contents {
    width: calcRelativeWith(418px, $wrapper-width, 'vw');
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 30px;
  }

  &_nav {
    font-size: 1.8rem;
    height: 200px;
  }

  &_sns {
    margin-top: 40px;
  }
}
</style>
