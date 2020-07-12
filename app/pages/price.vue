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

  head() {
    return {
      title: '料金のご案内 PRICE',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            '安心の価格でリーガルサービスを。サービスにかかる費用について、一般的な目安をご案内します。',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            '料金のご案内,料金,コスト,費用,price,登記,不動産登記,法人登記,会社設立登記,商業登記,遺産相続,相続,遺言,名義変更,抵当権抹消,相談,司法書士,宮川司法書士事務所',
        },
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
