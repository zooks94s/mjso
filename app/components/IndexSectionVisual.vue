<template lang="pug">
  .index-section-visual(:class="inverseClass")
    .index-section-visual_inner
      .index-section-visual_content
        slot(name="content")
      h3.index-section-visual_vertical
        slot(name="vertical")
      .index-section-visual_picture
        img.index-section-visual_image(:src="src")
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
.index-section-visual {
  &_inner {
    display: flex;
  }

  &_content {
    flex: 1 1 calcRelativeWith(700px, $wrapper-width);
    padding-right: 0;
    padding-left: calcRelativeWith($header-width, $wrapper-width);
  }

  &_vertical {
    @include verticalHeading;
    padding: 0 60px;
  }

  &_picture {
    flex: 1 1 calcRelativeWith(580px, $wrapper-width);
    min-height: 380px;
  }

  &_image {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  &.-inverse &_inner {
    flex-direction: row-reverse;
  }

  &.-inverse &_content {
    padding-left: 0;
    padding-right: calcRelativeWith($header-width, $wrapper-width);
  }
}

@media (--narrow) {
  .index-section-visual {
    &_content {
      padding-left: $header-width;
    }

    &.-inverse &_content {
      padding-right: $header-width;
    }

    &_vertical {
      font-size: 2.3vw;
      padding: 0 30px;
    }
  }
}

@media (--sp) {
  .index-section-visual {
    &_inner {
      display: block;
    }

    &_content {
      padding: 0;
    }

    &_vertical,
    &_picture {
      display: none;
    }

    &.-inverse &_content {
      padding: 0;
    }
  }
}
</style>
