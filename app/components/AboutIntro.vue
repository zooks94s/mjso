<template lang="pug">
  .about-intro
    .about-intro_heading
      SectionTitle(:level="2") ご挨拶
    .about-intro_visual
      .about-intro_vertical 価値の高いサービスで#[br]応えるために。
      .about-intro_image
        img.about-intro_imagesrc(src="@/assets/img/about/img-owner.jpg" alt="価値の高いサービスで応えるために。")
    .about-intro_body
      ParagraphText(:is-indent="true")
        p 司法書士は、登記を基幹業務とし、相続、後見、財産管理、企業法務、供託、裁判手続など、皆様の財産·権利に関する法的なお手続きのサポートをいたします。
        p 今日、AIをはじめとする急激な技術革新等により経済社会システムが変革、複雑化する中、コンプライアンスはさらに求められ、迅速かつ的確な意思決定をするうえで専門家の役割は益々重要となっています。
      ParagraphText(:is-indent="true")
        p 宮川司法書士事務所は比較的小規模な事務所ですので、代表司法書士が全ての案件に責任を持って目を通すことができます。全てのお客様と真摯に向き合い、最前線の問題に直に触れ、新たな知識を吸収し続けることで、常に高水準のサービスを心がけています。

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
.about-intro {
  display: grid;
  grid-template-areas:
    'a1 a2'
    'a3 a2';
  grid-template-columns: 1fr 1fr;
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
    max-width: 500px;
    max-height: 330px;
    margin: 0 auto;
  }

  &_imagesrc {
    width: 100%;
    height: auto;
  }
}

@media (--sp) {
  .about-intro {
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
    }

    &_vertical {
      position: static;
      font-size: 2rem;
    }

    &_image {
      position: absolute;
      top: 0;
      right: 0;
      margin-right: 0;
      margin-left: auto;
      max-width: initial;
      max-height: initial;
      width: clamp(250px, 66vw, 500px);
    }
  }
}
</style>
