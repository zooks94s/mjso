<template lang="pug">
.index-section-service
  IndexSectionVisual(:src="imageSrc")
    template(v-slot:content)
      IndexSectionHeading(
        category="SERVICE"
        title="サービスについて"
      )
      IndexSectionVisualSp(:src="imageSrc")
        | さまざまなお悩みを、#[br]丁寧に、シンプルに。
      p.index-section-service_text.
        個人や法人、規模に関わらず、#[br._break-pc]
        身近にあるお悩みに対して#[br._break-pc]
        広い範囲でお手伝いいたします。#[br]
        税務や測量などが関わる複雑に見える#[br._break-pc]
        課題でもご安心ください。#[br._break-pc]
        税理士や土地家屋調査士など#[br._break-pc]
        各士業の専門家と連携し、#[br._break-pc]
        ご要望にワンストップでお応えできる#[br._break-pc]
        体制が整っています。
    template(v-slot:vertical)
      | さまざまなお悩みを、#[br]丁寧に、シンプルに。
  .index-section-service_contents
    IndexServiceGrid
    .index-section-service_bottom
      SlidelineButton(to="/service") MORE ABOUT SERVICE
</template>

<script>
import SlidelineButton from '@/components/SlidelineButton'
import IndexSectionHeading from '@/components/IndexSectionHeading'
import IndexSectionVisual from '@/components/IndexSectionVisual'
import IndexSectionVisualSp from '@/components/IndexSectionVisualSp'
import IndexServiceGrid from '@/components/IndexServiceGrid'

export default {
  components: {
    SlidelineButton,
    IndexSectionHeading,
    IndexSectionVisual,
    IndexSectionVisualSp,
    IndexServiceGrid,
  },

  data() {
    return {
      imageSrc: require('~/assets/img/index/img-service.jpg'),
    }
  },
}
</script>

<style lang="scss" scoped>
.index-section-service {
  padding: 88px 0 77px;

  &_text {
    grid-area: text;
    line-height: (30 / 15);
  }

  &_contents {
    margin-top: -10px;
    padding: 0 calcRelativeWith($header-width, $wrapper-width);
  }

  &_bottom {
    margin-top: 20px;
  }
}

@media (--sp) {
  .index-section-service {
    padding: 40px $padding-side-sp;

    &_text {
      font-size: 1.4rem;
    }

    &_contents {
      margin-top: 30px;
      padding: 0;
    }

    &_bottom {
      text-align: right;
    }
  }
}
</style>
