<template lang="pug">
  .price-intro
    .price-intro_heading
      SectionTitle(:level="2") 料金の目安について
    .price-intro_visual
      .price-intro_vertical 安心の価格で#[br]リーガルサービスを。
      .price-intro_image
        img.price-intro_imagesrc(src="@/assets/img/price/img-price.jpg" alt="安心の価格でリーガルサービスを。")
    .price-intro_body
      ParagraphText(:is-indent="true")
        p サービスにかかる費用について、例示できる範囲で一般的な目安をご案内いたします。なお、登記費用は、登記をする際に発生する登録免許税という税金、謄本確認費用、郵送費、交通費等の実費に加えて、弊所の報酬ががかかります。
        p お手続の内容、対象の価額、数等によって異なります。以下は基準額ですので、詳細はお問い合わせ下さい。お電話でのご相談無料で承ります。
</template>

<script>
import SectionTitle from '@/components/SectionTitle'
import ParagraphText from '@/components/ParagraphText'

export default {
  components: {
    SectionTitle,
    ParagraphText,
  },
}
</script>

<style lang="scss" scoped>
.price-intro {
  display: grid;
  grid-template-areas:
    'a1 a2'
    'a3 a2';
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  @include gridAreaChildren(3, 'a');

  &_heading,
  &_body {
    padding-right: 60px;
  }

  &_heading {
    margin-bottom: 50px;
  }

  &_visual {
    display: flex;
    align-items: flex-end;
    position: relative;
    min-height: 334px;
  }

  &_vertical {
    position: absolute;
    top: 0;
    left: 0;
    @include verticalHeading;
  }

  &_image {
    width: 100%;
    height: auto;
    max-width: 300px;
    max-height: 210px;
    margin-left: auto;
  }

  &_imagesrc {
    width: 100%;
    height: auto;
  }
}

@media (--sp) {
  .price-intro {
    display: block;

    &_heading,
    &_body {
      padding-right: 0;
    }

    &_heading {
      margin-bottom: 40px;
    }

    &_visual {
      display: block;
      margin-right: -$padding-side-sp;
      margin-bottom: 30px;
      min-height: initial;
      overflow: hidden;
    }

    &_vertical {
      position: static;
      font-size: 2rem;
      float: left;
    }

    &_image {
      float: right;
      max-width: initial;
      max-height: initial;
      width: clamp(250px, 66vw, 500px);
    }
  }
}
</style>
