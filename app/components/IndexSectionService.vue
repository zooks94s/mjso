<template lang="pug">
.index-section-service
  IndexSectionVisual(:src="imageSrc")
    template(v-slot:content)
      IndexSectionHeading(
        category="SERVICE"
        title="サービスについて"
      )
      p.index-section-service_text 個人や法人、規模に関わらず、#[br]
        | 身近にあるお悩みに対して#[br]
        | 広い範囲でお手伝いいたします。#[br]
        | 税務や測量などが関わる複雑に見える#[br]
        | 課題でもご安心ください。#[br]
        | 税理士や土地家屋調査士など#[br]
        | 各士業の専門家と連携し、#[br]
        | ご要望にワンストップでお応えできる#[br]
        | 体制が整っています。
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
import IndexServiceGrid from '@/components/IndexServiceGrid'

export default {
  components: {
    SlidelineButton,
    IndexSectionHeading,
    IndexSectionVisual,
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
</style>
