<template lang="pug">
  .index-page
    .index-page_background
    header.index-page_heading
      h1.index-page_title 繊細でかけがえのない#[br]お客様の権利を守るために。
      p.index-page_description 安心して相談できる司法書士として、耳を傾けます。
    article.index-page_article
      IndexSection(category="ABOUT US")
        IndexSectionAboutUs
      IndexSection(category="SERVICE")
        IndexSectionService
      IndexSection(category="PRICE")
        IndexSectionPrice
      .index-page_bottom
        ContactButton
</template>

<script>
import ContactButton from '@/components/ContactButton'
import IndexSection from '@/components/IndexSection'
import IndexSectionAboutUs from '@/components/IndexSectionAboutUs'
import IndexSectionService from '@/components/IndexSectionService'
import IndexSectionPrice from '@/components/IndexSectionPrice'

export default {
  components: {
    ContactButton,
    IndexSection,
    IndexSectionAboutUs,
    IndexSectionService,
    IndexSectionPrice,
  },

  head() {
    return {
      title:
        '宮川司法書士事務所 | 不動産登記・法人登記でお悩みの方はご相談ください',
      titleTemplate: '',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            '宮川司法書士事務所は、個人や法人に関わらず、登記や相続などに関するお悩みに耳を傾け、丁寧にサポートいたします。',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            '登記,不動産登記,法人登記,会社設立登記,商業登記,企業法務,遺産相続,相続,遺言,成年後見,名義変更,抵当権抹消,相談,司法書士,東京,中野,東京都中野区,宮川司法書士事務所',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.index-page {
  &_background {
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: url(~assets/img/index/bg-visual.svg);
    background-repeat: no-repeat;
    background-position: center calc(100% - 136px);
    background-size: calcRelativeWith($content-width, $wrapper-width);
  }

  &_article {
    background-color: $color-white;
  }

  &_heading {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    font-family: $font-family-serif;
    @include textTracking(50);
    padding: 190px calcRelativeWith($header-width, $wrapper-width) 60px;
  }

  &_title {
    font-size: 4.6rem;
    font-weight: $weight-medium;
    line-height: (90 / 46);
  }

  &_description {
    font-size: 2rem;
    font-weight: $weight-medium;
    margin-top: 50px;
  }

  &_bottom {
    padding-bottom: 70px;
  }
}
</style>
