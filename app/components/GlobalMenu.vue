<template lang="pug">
  .global-menu
    .global-menu_visual
      img.global-menu_image(src="@/assets/img/img-circle.svg")
      nuxt-link.global-menu_anchor(to="/")
        img.global-menu_logo(src="@/assets/img/logo-typography.svg" alt="宮川司法書士事務所")
    .global-menu_contents
      nuxt-link.global-menu_home(to="/")
        img(src="@/assets/img/logo-typography_vertical.svg" alt="宮川司法書士事務所")
      .global-menu_nav
        GlobalContentsNav
      .global-menu_sns
        SnsButtonFacebook
      .global-menu_telephone
        CallNumber
      .global-menu_contact
        GlobalMenuContact
</template>

<script>
import GlobalContentsNav from '@/components/GlobalContentsNav'
import SnsButtonFacebook from '@/components/SnsButtonFacebook'
import GlobalMenuContact from '@/components/GlobalMenuContact'
import CallNumber from '@/components/CallNumber'

export default {
  components: {
    GlobalContentsNav,
    SnsButtonFacebook,
    GlobalMenuContact,
    CallNumber,
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

  &_home,
  &_telephone,
  &_contact {
    display: none;
  }
}

@media (--sp) {
  .global-menu {
    padding: 50px (85px / 2) 40px;
    background-color: $color-background;
    background-image: url(~assets/img/bg-circle.png);
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: calcRelativeWith(350px, 750px, 'vw') auto;

    &_visual {
      display: none;
    }

    &_contents {
      width: 100%;
      padding-left: 0;
      position: relative;
    }

    &_home {
      display: block;
      width: 25px;
      position: absolute;
      top: 0;
      right: 0;
    }

    &_nav,
    &_telephone,
    &_contact {
      display: block;
      margin-top: 40px;
    }
  }
}
</style>
