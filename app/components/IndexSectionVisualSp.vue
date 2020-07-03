<template lang="pug">
  .index-section-visual-sp(:class="inverseClass")
    .index-section-visual-sp_inner
      h3.index-section-visual-sp_title
        span.index-section-visual-sp_vertical
          slot
      .index-section-visual-sp_picture
        img.index-section-visual-sp_image(:src="src")
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: null,
    },

    isInverse: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    inverseClass() {
      return this.isInverse ? '-inverse' : ''
    },
  },
}
</script>

<style lang="scss" scoped>
.index-section-visual-sp {
  display: none;
}

@media (--sp) {
  .index-section-visual-sp {
    display: block;
    margin-top: 30px;
    margin-bottom: 15px;
    margin-left: -$padding-side-sp;
    margin-right: -$padding-side-sp;

    &_inner {
      display: flex;
    }

    &_title {
      width: calcRelativeWith(250px, 750px);
      display: flex;
      justify-content: center;
    }

    &_vertical {
      @include verticalHeading(2);
    }

    &_picture {
      overflow: hidden;
      width: calcRelativeWith(500px, 750px);
      height: 165px;
    }

    &_image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 0% 0%;
    }

    &.-inverse &_inner {
      flex-direction: row-reverse;
    }
  }
}
</style>
