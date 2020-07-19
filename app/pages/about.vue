<template lang="pug">
  LocalPage
    .about-page
      ContentsTitle(
        category="ABOUT US"
        title="私たちについて"
      )
      .about-page_body
        section.about-page_section
          AboutIntro

        section.about-page_section
          AboutMotto

        section.about-page_section.-yellow
          OfficeOutline
</template>

<script>
import LocalPage from '@/components/LocalPage'
import ContentsTitle from '@/components/ContentsTitle'
import OfficeOutline from '@/components/OfficeOutline'
import AboutIntro from '@/components/AboutIntro'
import AboutMotto from '@/components/AboutMotto'

export default {
  components: {
    LocalPage,
    ContentsTitle,
    OfficeOutline,
    AboutIntro,
    AboutMotto,
  },

  head() {
    return {
      title: '私たちについて ABOUT US',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            '全てのお客様に安心な時間を。宮川司法書士事務所はお客様の繊細な権利を守ります。',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'サービスについて,業務案内,サービス,service,登記,不動産登記,法人登記,会社設立登記,商業登記,遺産相続,相続,遺言,名義変更,抵当権抹消,相談,司法書士,宮川司法書士事務所',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.about-page {
  &_section {
    @include contentWidth;

    &:not(:first-child) {
      margin-top: 80px;
    }
  }

  &_section.-yellow {
    background-color: $color-light-yellow;
    padding-top: 70px;
    padding-bottom: 70px;
  }
}

@media (--narrow) {
  .about-page {
    &_section {
      @include contentWidthNarrow;
    }
  }
}

@media (--sp) {
  .about-page {
    &_section {
      @include contentWidthSp;
    }

    &_section.-yellow {
      padding-top: 40px;
      padding-bottom: 40px;
    }
  }
}
</style>
