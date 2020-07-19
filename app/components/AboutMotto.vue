<template lang="pug">
  .about-motto
    .about-motto_heading
      SectionTitle(:level="2") 大切にしていること
    .about-motto_visual
      .about-motto_vertical 全てのお客様に#[br]安心な時間を。
      .about-motto_image
        img.about-motto_imagesrc(src="@/assets/img/about/img-motto.jpg" alt="全てのお客様に安心な時間を。")
    .about-motto_body
      ParagraphText(:is-indent="true")
        p 宮川司法書士事務所は、時代の様々なニーズ·変化に対応した質の高いサービスはもちろん、ご依頼の背景にあるお客様の想いを尊重してこそ、本当の安心をご提供できると考えています。
        p そのために、5つのことを大切にしています。
      ol.about-motto_order
        li.about-motto_item(
          v-for="(item, index) in items"
          :key="`${index}_${item}`"
        ) {{ item.text }}
      ParagraphText(:is-indent="true")
        p 身の回りの法律問題、お手続き等で困ったときは、ぜひご相談ください。土日やお仕事後のご予約、出張対応もいたします。どのような些細なことでも誠心誠意対応いたします。
</template>

<script>
import SectionTitle from '@/components/SectionTitle'
import ParagraphText from '@/components/ParagraphText'

export default {
  components: {
    SectionTitle,
    ParagraphText,
  },

  data() {
    return {
      items: [
        { text: '会話は親しみやすく、耳を傾けわかりやすく' },
        { text: 'フットワークは軽く、感謝の気持ちで' },
        { text: 'できない理由ではなくできる方法を考え' },
        { text: '常に勉強と思考を怠らず研鑽を積み' },
        { text: '安心の価格でリーガルサービスを' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.about-motto {
  display: grid;
  grid-template-areas:
    'a2 a1'
    'a2 a3';
  grid-template-columns: 1fr calcRelativeWith(587px, $content-width);
  grid-template-rows: auto auto;
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
    margin-right: 30px;
  }

  &_vertical {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(50%);
    @include verticalHeading;
  }

  &_image {
    width: 100%;
    max-width: 226px;
    margin: 0 auto;
  }

  &_imagesrc {
    width: 100%;
    height: auto;
  }

  &_order {
    margin: 30px 0;
    counter-reset: order;
  }

  &_item {
    font-size: 1.5rem;
    font-weight: $weight-medium;

    &:not(:first-child) {
      margin-top: 10px;
    }

    &::before {
      counter-increment: order;
      content: counter(order) '.';
      color: $color-magenta;
      margin-right: 0.5em;
    }
  }
}

@media (--sp) {
  .about-motto {
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
      margin-right: 0;
      margin-bottom: 30px;
    }

    &_vertical {
      font-size: 2rem;
      left: auto;
      right: 50%;
      transform: translateX(100%);
      padding: 0;
      padding-left: 30px;
    }

    &_image {
      width: clamp(137px, 36vw, 275px);
      margin: 12px 17px;
      max-width: initial;
      max-height: initial;
    }

    &_order {
      margin: 25px 0;
    }

    &_item {
      font-size: 1.4rem;

      &:not(:first-child) {
        margin-top: 5px;
      }
    }
  }
}
</style>
