<template lang="pug">
  LocalPage
    .price-page
      ContentsTitle(
        category="PRICE"
        title="料金のご案内"
      )
      .price-page_body
        section.price-page_section
          PriceIntro
        section.price-page_section.-yellow
          .price-page_block
            PriceCaseStudyRealEstate
          .price-page_block
            PriceCaseStudyCompany
          .price-page_block
            PriceCaseStudyInherit
          .price-page_block
            PriceCaseStudyCosts
</template>

<script>
import { siteDomain, ogpMetas } from '@/assets/js/meta-config'

import LocalPage from '@/components/LocalPage'
import ContentsTitle from '@/components/ContentsTitle'
import PriceIntro from '@/components/PriceIntro'
import PriceCaseStudyRealEstate from '@/components/PriceCaseStudyRealEstate'
import PriceCaseStudyCompany from '@/components/PriceCaseStudyCompany'
import PriceCaseStudyInherit from '@/components/PriceCaseStudyInherit'
import PriceCaseStudyCosts from '@/components/PriceCaseStudyCosts'

export default {
  components: {
    LocalPage,
    ContentsTitle,
    PriceIntro,
    PriceCaseStudyRealEstate,
    PriceCaseStudyCompany,
    PriceCaseStudyInherit,
    PriceCaseStudyCosts,
  },

  data() {
    return {
      title: '料金のご案内 PRICE',
      description: '安心の価格でリーガルサービスを。サービスにかかる費用について、一般的な目安をご案内します。',
      keywords: '料金のご案内,料金,コスト,費用,price,登記,不動産登記,法人登記,会社設立登記,商業登記,遺産相続,相続,遺言,名義変更,抵当権抹消,相談,司法書士,宮川司法書士事務所',
    }
  },

  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description, },
        { hid: 'keywords', name: 'keywords', content: this.keywords, },
        { hid: 'og:title', property: 'og:title', content: this.title },
        { hid: 'og:description', property: 'og:description', content: this.description, },
        { hid: 'og:url', property: 'og:url', content: siteDomain + this.$route.fullPath },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        ...ogpMetas
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.price-page {
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

  &_block {
    & + & {
      margin-top: 70px;
    }
  }
}

@media (--narrow) {
  .price-page {
    &_section {
      @include contentWidthNarrow;
    }
  }
}

@media (--sp) {
  .price-page {
    &_section {
      @include contentWidthSp;

      &:not(:first-child) {
        margin-top: 40px;
      }
    }

    &_section.-yellow {
      padding-top: 40px;
      padding-bottom: 40px;
    }

    &_block {
      & + & {
        margin-top: 40px;
      }
    }
  }
}
</style>
