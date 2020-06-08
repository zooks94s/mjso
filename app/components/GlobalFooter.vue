<template lang="pug">
footer.global-footer
  .global-footer_heading
    nuxt-link.global-footer_brand(to="/")
      img.global-footer_brandlogo(src="@/assets/img/logo-mjso.svg" alt="宮川司法書士事務所")
      p.global-footer_brandauthor 代表司法書士 宮川祐輔（ミヤカワ ユウスケ）

  .global-footer_line
    img.global-footer_lineimage(src="@/assets/img/img-footer_line.png")

  .global-footer_body
    dl.global-footer_block
      dt.global-footer_title ACCESS
      dd.global-footer_address
          p.global-footer_addresstext 〒164-0001#[br]東京都中野区中野5-67-7 プラザ中野704
      dd.global-footer_map
        SlidelineButton(
          href="https://goo.gl/maps/MNRZsT2xMgbTb7KbA"
          target="_blank"
        )
          | GOOGLE MAP
      dd.global-footer_contact
        a.global-footer_telephone.-anchor-sp(href="tel:03-3388-0022" data-prefix="tel.") 03-3388-0022
        .global-footer_telephone(data-prefix="fax.") 03-3388-0066
    .global-footer_block
      .global-footer_title MENU
      GlobalContentsNav.global-footer_menu

    .global-footer_block.-flex-end
      SnsButtonFacebook

    .global-footer_copyright
      small Copyright &copy; 宮川司法書士事務所
</template>

<script>
import SlidelineButton from '@/components/SlidelineButton'
import GlobalContentsNav from '@/components/GlobalContentsNav'
import SnsButtonFacebook from '@/components/SnsButtonFacebook'

export default {
  components: {
    SlidelineButton,
    GlobalContentsNav,
    SnsButtonFacebook,
  },
}
</script>

<style lang="scss" scoped>
.global-footer {
  background-color: $color-background;
  padding: 60px 0 50px;

  &_heading,
  &_body {
    margin: 0 calcRelativeWith(140px, 1280px);
  }

  &_brand {
    color: $color-text;
    display: flex;
    align-items: center;
    text-decoration: none;
    @include hoverOpacity;
  }

  &_brandlogo {
    width: 380px;
  }

  &_brandauthor {
    margin-left: 38px;
  }

  &_line {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110px;
  }

  &_lineimage {
    width: 100%;
    min-width: 1280px;
  }

  &_body {
    $grid-address: calcRelativeWith(600px, 1000px);
    $grid-menu: calcRelativeWith(260px, 1000px);
    $grid-sns: calcRelativeWith(140px, 1000px);

    display: grid;
    grid-template-columns: $grid-address $grid-menu $grid-sns;
    grid-template-rows: auto;
    grid-template-areas:
      'footer1 footer2 footer3'
      'footer4 footer4 footer4';
    @include gridAreaChildren(4, 'footer');
  }

  &_block {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &_block.-flex-end {
    justify-content: flex-end;
  }

  &_title {
    font-size: 1.2rem;
    color: $color-magenta;
    @include textTracking(150);
    margin-bottom: 20px;
  }

  &_map {
    font-size: 1.3rem;
  }

  &_contact {
    display: flex;
    margin-top: 30px;
  }

  &_telephone {
    display: inline-block;
    font-size: 2rem;
    font-weight: 700;

    & + & {
      margin-left: 20px;
    }

    &::before {
      font-size: 1.4rem;
      content: attr(data-prefix);
      margin-right: 8px;
    }
  }

  &_telephone.-anchor-sp {
    text-decoration: none;
    color: $color-text;
    pointer-events: none;
    cursor: default;
  }

  &_copyright {
    margin-top: 50px;
    width: 100%;
    display: inline-block;
    text-align: center;
  }
}

@media (--sp) {
  .global-footer {
    padding: 40px $padding-side-sp 20px;

    &_heading,
    &_body {
      margin: 0;
    }

    &_brand {
      display: block;
    }

    &_brandlogo {
      width: 240px;
    }

    &_brandauthor {
      font-size: 1.2rem;
      margin-top: 12px;
      margin-left: 0;
    }

    &_line {
      height: 60px;
      margin: 0 #{$padding-side-sp * -1};
    }

    &_lineimage {
      min-width: initial;
    }

    &_body {
      grid-template-columns: 100%;
      grid-template-rows: 150px repeat(3, auto);
      grid-template-areas:
        'footer2'
        'footer1'
        'footer3'
        'footer4';
      grid-gap: 30px;
    }

    &_title {
      margin-bottom: 12px;
    }

    &_contact {
      display: block;
      margin-top: 12px;
    }

    &_telephone {
      & + & {
        margin-top: 12px;
        margin-left: 0;
      }
    }

    &_telephone.-anchor-sp {
      pointer-events: auto;
    }

    &_copyright {
      margin-top: 0;
    }
  }
}
</style>
