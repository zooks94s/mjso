<template lang="pug">
.index-section-price
  IndexSectionVisual(
    :src="imageSrc"
    :is-inverse="true"
  )
    template(v-slot:content)
      IndexSectionHeading(
        category="PRICE"
        title="料金について"
      )
      p.index-section-price_text お客様に安心してご依頼いただけるよう、#[br]
        | 司法書士報酬アンケートに基づいた#[br]
        | 平均以下の料金での報酬基準を#[br]
        | 実現しています。
      p.index-section-price_text まずは無料の電話相談をご利用ください。#[br]
        | 適正なお見積もりをご案内します。
      .index-section-price_bottom
        SlidelineButton(to="/price") MORE ABOUT PRICE
    template(v-slot:vertical)
      | リーズナブルな料金で#[br]サービスをご提供します。
</template>

<script>
import SlidelineButton from '@/components/SlidelineButton'
import IndexSectionHeading from '@/components/IndexSectionHeading'
import IndexSectionVisual from '@/components/IndexSectionVisual'

export default {
  components: {
    SlidelineButton,
    IndexSectionHeading,
    IndexSectionVisual,
  },

  data() {
    return {
      imageSrc: require('~/assets/img/index/img-price.jpg'),
    }
  },
}
</script>

<style lang="scss" scoped>
.index-section-price {
  padding: 94px 0 100px;

  &_text {
    grid-area: text;
    line-height: (30 / 15);

    & + & {
      margin-top: 30px;
    }
  }

  &_bottom {
    margin-top: 30px;
  }
}
</style>
