<template lang="pug">
  header.global-header
    .global-header_brand
      nuxt-link.global-header_brandanchor(to="/")
        picture
          source(media="(max-width: 768px)" srcset="@/assets/img/logo-mjso.svg")
          source(srcset="@/assets/img/logo-mjso_vertical.svg")
          img.global-header_logo(src="@/assets/img/logo-mjso_vertical.svg")
      .global-header_scroll
        span.global-header_scrolltext SCROLL
          svg-icon.global-header_scrollarrow(name="arrow_downward")
    .global-header_nav
      button.global-header_menu(type="button")
        span.global-header_menuicon
        p.global-header_menutext MENU
      .global-header_contact
        a.global-header_telephone(href="tel:03-3388-0022") tel. 03-3388-0022
        a.global-header_mail(href="mailto:user@example.com")
          svg-icon.global-header_mailicon(name="mail")
</template>

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
  }

  &_brandanchor {
    display: block;
    width: 42px;
    height: auto;
  }

  &_scrolltext {
    font-size: 1.3rem;
    color: $color-black;
    writing-mode: vertical-rl;
    @include textTracking(150);
  }

  &_scrollarrow {
    height: 28px;
  }

  &_menu {
    display: block;
  }

  &_menuicon {
    display: block;
    width: 20px;
    height: 14px;
    background-color: $color-black;
  }

  &_menutext {
    margin-top: 15px;
    font-size: 1.3rem;
    color: $color-black;
    writing-mode: vertical-rl;
    @include textTracking(150);
  }

  &_contact {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &_telephone {
    font-size: 1.4rem;
    color: $color-black;
    writing-mode: vertical-rl;
    @include textTracking(150);
    text-decoration: none;
  }

  &_mail {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: $color-text;
    border-radius: 50%;
    margin-top: 26px;
    color: $color-white;
  }

  &_mailicon {
    width: 26px;
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
    background-color: $color-white;

    &_brand,
    &_nav {
      position: static;
      width: auto;
      height: auto;
      padding: 0;
    }

    &_brand {
      display: block;
    }

    &_brandanchor {
      width: 220px;
    }

    &_scroll {
      display: none;
    }
  }
}
</style>
