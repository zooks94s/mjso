<template lang="pug">
  .index-main-visual
    .index-main-visual_scroller(ref="trigger")
    picture.index-main-visual_container
      source(srcset="@/assets/img/index/img-visual_sp.png" media="(max-width: 768px)")
      source(srcset="@/assets/img/index/img-visual.svg" media="(min-width: 769px)")
      img.index-main-visual_image(
        src="@/assets/img/index/img-visual.svg"
        alt=""
        ref="image"
      )
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

export default {
  mounted() {
    this.fadeAnimation()
  },

  methods: {
    fadeAnimation() {
      gsap.to(this.$refs.image, {
        opacity: 0,
        y: -300,
        duration: 1,
        scrollTrigger: {
          trigger: this.$refs.trigger,
          start: 'bottom center',
          scrub: true,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.index-main-visual {
  position: relative;

  &_scroller {
    @include contentWidth;
    width: 100%;
    height: 50vh;
    position: absolute;
    top: 0;
    left: 0;
  }

  &_container {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    @include contentWidth;
    width: 100%;
    height: 100vh;
  }

  &_image {
    width: 100%;
    padding-bottom: 17vh;
  }
}

@media (--sp) {
  .index-main-visual {
    &_scroller,
    &_container {
      padding-left: 0;
      padding-right: 0;
    }
  }
}
</style>
