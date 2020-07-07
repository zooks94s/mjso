<template lang="pug">
  .service-policy
    .service-policy_heading
      SectionTitle(:level="2") サービス方針
    .service-policy_visual
      .service-policy_vertical 複雑な課題を#[br]シンプルに。
      .service-policy_image
        img.service-policy_imagesrc(src="@/assets/img/service/img-policy.jpg" alt="複雑な課題をシンプルに。")
    .service-policy_body
      ParagraphText(:is-indent="true")
        p 司法書士がご提供できるサービスは、住宅や事業、家族間相続にいたるまで、生活の中で直面するさまざまなケースがあります。また、弁護士や税理士、土地家屋調査士、不動産会社や金融機関などのプロフェッショナルの方と連携をして解決策を探る場合も多く、一見複雑に感じる方もいらっしゃいます。
        p 私たちは、お客様の立場や規模に関わらず、複雑な状況も最短距離で解決へと向かう幅広いサービスを実現しています。
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
.service-policy {
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
    margin: 0 auto;
  }

  &_imagesrc {
    width: 100%;
    height: auto;
  }
}

@media (--sp) {
  .service-policy {
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
      overflow: hidden;
    }

    &_vertical {
      float: left;
      position: static;
      font-size: 2rem;
    }

    &_image {
      float: right;
      margin-right: 0;
      margin-left: 0;
      max-width: initial;
      max-height: initial;
      width: clamp(235px, 62vw, 470px);
    }
  }
}
</style>
