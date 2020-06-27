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
      IndexSectionVisualSp(
        :src="imageSrc"
        :is-inverse="true"
      )
        | リーズナブルな料金で#[br]サービスをご提供します。
      p.index-section-price_text.
        お客様に安心してご依頼いただけるよう、#[br._break-pc]
        司法書士報酬アンケートに基づいた#[br._break-pc]
        平均以下の料金での報酬基準を#[br._break-pc]
        実現しています。
      p.index-section-price_text.
        まずは無料の電話相談をご利用ください。#[br]
        適正なお見積もりをご案内します。
      .index-section-price_bottom
        SlidelineButton(to="/price") MORE ABOUT PRICE
    template(v-slot:vertical)
      | リーズナブルな料金で#[br]サービスをご提供します。
</template>

<script>
import SlidelineButton from '@/components/SlidelineButton'
import IndexSectionHeading from '@/components/IndexSectionHeading'
import IndexSectionVisual from '@/components/IndexSectionVisual'
import IndexSectionVisualSp from '@/components/IndexSectionVisualSp'

export default {
  components: {
    SlidelineButton,
    IndexSectionHeading,
    IndexSectionVisual,
    IndexSectionVisualSp,
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

@media (--sp) {
  .index-section-price {
    padding: 50px $padding-side-sp;

    &_text {
      font-size: 1.4rem;
    }

    &_bottom {
      text-align: right;
    }
  }
}
</style>
