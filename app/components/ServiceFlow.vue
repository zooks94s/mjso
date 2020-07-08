<template lang="pug">
  .service-flow
    .service-flow_heading
      SectionTitle(:level="2") 各士業と協働したワンストップなサービス
    .service-flow_visual
      .service-flow_image
        img.service-flow_imagesrc(src="@/assets/img/service/img-flow.png" alt="各士業と協働したワンストップなサービス")
    .service-flow_body
      ParagraphText(:is-indent="true")
        p 課題を抱えているけど、司法書士に相談してよいことなのか判断がつかない。そんなお悩みでも大丈夫です。
        p 私たちは、各プロフェッショナルと連携して課題解決を行う体制を整えています。宮川司法書士事務所が責任を持って窓口を務め、煩雑なやりとりなくワンストップでサポートいたします。
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
.service-flow {
  display: grid;
  grid-template-areas:
    'a1 a2'
    'a3 a2';
  grid-template-columns: 1fr calcRelativeWith(550px, $content-width);
  grid-template-rows: auto 1fr;
  @include gridAreaChildren(3, 'a');

  &_heading,
  &_body {
    padding-right: 30px;
  }

  &_heading {
    margin-bottom: 50px;
  }

  &_image {
    width: 100%;
    height: auto;
    max-width: 550px;
    margin: 0 auto;
  }

  &_imagesrc {
    width: 100%;
    height: auto;
  }
}

@media (--sp) {
  .service-flow {
    display: flex;
    flex-direction: column;

    &_heading,
    &_body {
      padding-right: 0;
    }

    &_heading {
      order: 1;
      margin-bottom: 40px;
    }

    &_visual {
      order: 3;
      margin-top: 30px;
    }

    &_body {
      order: 2;
    }

    &_image {
      max-width: initial;
    }
  }
}
</style>
