<template lang="pug">
  .index-section-about-us
    .index-section-about-us_visual._display-pc
      .index-section-about-us_heading
        h3.index-section-about-us_title お客様の権利と#[br]それぞれの想いに#[br]寄り添います。
    .index-section-about-us_content
      IndexSectionHeading(
        category="ABOUT US"
        title="私たちについて"
      )
      .index-section-about-us_visualsp._display-sp
        .index-section-about-us_heading
          h3.index-section-about-us_title お客様の権利と#[br]それぞれの想いに#[br]寄り添います。
      p.index-section-about-us_text.
        登記や相続、信託、裁判など、#[br._break-pc]
        私たちがお手伝いする様々なお悩みの背景には、#[br._break-pc]
        一つ一つ繊細でかけがえのないお客様の権利があると考えています。#[br]
        私たちはその権利を守り、単純な業務としてだけではなく#[br._break-pc]
        想いに向き合い、真摯に応えることを使命とし、#[br._break-pc]
        同じ目線で寄り添うことを常に心がけています。
      p.index-section-about-us_text 最初に何をして良いかわからない、そんな不安をお持ちでも大丈夫。#[br]まずはお話をお聞かせください。#[br]きっと、私たちにお手伝いできることがあります。

      .index-section-about-us_bottom
        SlidelineButton(to="/about") MORE ABOUT US
</template>

<script>
import SlidelineButton from '@/components/SlidelineButton'
import IndexSectionHeading from '@/components/IndexSectionHeading'

export default {
  components: {
    SlidelineButton,
    IndexSectionHeading,
  },
}
</script>

<style lang="scss" scoped>
.index-section-about-us {
  @include contentWidth;
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  justify-content: space-between;

  &_visual,
  &_content {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 50%;
    max-width: 50%;
  }

  &_text {
    line-height: (30 / 15);

    & + & {
      margin-top: 40px;
    }
  }

  &_heading {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  &_title {
    @include verticalHeading();
    padding: 125px;
    background-image: url(~assets/img/index/bg-kv_about_us.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }

  &_content {
    padding-left: 60px;
  }

  &_bottom {
    margin-top: 30px;
  }
}

@media (--narrow) {
  .index-section-about-us {
    @include contentWidthNarrow;

    &_visual,
    &_content {
      flex-grow: 0;
      flex-shrink: 0;
    }

    &_visual {
      flex-basis: 40%;
      max-width: 40%;
    }

    &_content {
      flex-basis: 60%;
      max-width: 60%;
    }

    &_title {
      padding: 100px;
      font-size: 2.3vw;
    }
  }
}

@media (--sp) {
  .index-section-about-us {
    @include contentWidthSp;
    padding-top: 50px;
    padding-bottom: 50px;
    display: block;

    &_visual,
    &_content {
      flex: none;
      max-width: initial;
    }

    &_heading {
      padding: 0;
    }

    &_title {
      font-size: 2rem;
      padding: 70px;
    }

    &_content {
      padding-left: 0;
    }

    &_text {
      font-size: 1.4rem;
    }

    &_bottom {
      text-align: right;
    }
  }
}
</style>
