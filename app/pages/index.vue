<template lang="pug">
  .index-page
    IndexMainVisual
    header.index-page_heading
      h1.index-page_title 繊細でかけがえのない#[br]お客様の権利を#[br._break-sp]守るために。
      p.index-page_description 安心して相談できる#[br._break-sp]司法書士として、耳を傾けます。
      a.index-page_scrolling(href="#" v-scroll-to="'#index-article'")
        ScrollingArrow
    article#index-article.index-page_article
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
import { siteDomain, ogpMetas } from '@/assets/js/meta-config'

import ScrollingArrow from '@/components/ScrollingArrow'
import ContactButton from '@/components/ContactButton'
import IndexSection from '@/components/IndexSection'
import IndexMainVisual from '@/components/IndexMainVisual'
import IndexSectionAboutUs from '@/components/IndexSectionAboutUs'
import IndexSectionService from '@/components/IndexSectionService'
import IndexSectionPrice from '@/components/IndexSectionPrice'

export default {
  components: {
    ScrollingArrow,
    ContactButton,
    IndexSection,
    IndexMainVisual,
    IndexSectionAboutUs,
    IndexSectionService,
    IndexSectionPrice,
  },

  data() {
    return {
      title: '宮川司法書士事務所 | 不動産登記・法人登記でお悩みの方はご相談ください',
      description: '宮川司法書士事務所は、個人や法人に関わらず、登記や相続などに関するお悩みに耳を傾け、丁寧にサポートいたします。',
      keywords: '登記,不動産登記,法人登記,会社設立登記,商業登記,企業法務,遺産相続,相続,遺言,成年後見,名義変更,抵当権抹消,相談,司法書士,東京,中野,東京都中野区,宮川司法書士事務所',
    }
  },

  head() {
    return {
      title: this.title,
      titleTemplate: '',
      meta: [
        { hid: 'description', name: 'description', content: this.description, },
        { hid: 'keywords', name: 'keywords', content: this.keywords, },
        { hid: 'og:title', property: 'og:title', content: this.title },
        { hid: 'og:description', property: 'og:description', content: this.description, },
        { hid: 'og:url', property: 'og:url', content: siteDomain + this.$route.fullPath },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        ...ogpMetas
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.index-page {
  &_heading {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    @include contentWidth;
    padding-top: 190px;
    padding-bottom: 60px;
  }

  &_title {
    font-size: 4.6rem;
    font-weight: $weight-medium;
    font-family: $font-family-serif;
    @include textTracking(50);
    line-height: (90 / 46);
  }

  &_description {
    font-size: 2rem;
    font-weight: $weight-medium;
    font-family: $font-family-serif;
    @include textTracking(50);
    margin-top: 50px;
  }

  &_scrolling {
    display: none;
  }

  &_bottom {
    padding-bottom: 70px;
  }
}

@media (--narrow) {
  .index-page {
    &_heading {
      @include contentWidthNarrow;
    }
  }
}

@media (--sp) {
  .index-page {
    &_heading {
      position: relative;
      @include contentWidthSp;
      padding-top: 75px;
      padding-bottom: 75px;
    }

    &_title {
      font-size: 2.5rem;
    }

    &_description {
      font-size: 1.6rem;
    }

    &_scrolling {
      text-decoration: none;
      display: block;
      position: absolute;
      width: 100%;
      top: calc(100% - 20vh);
      left: 0;
    }
  }
}
</style>
