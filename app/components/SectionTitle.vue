<template lang="pug">
  component.section-title(
    :is="tag"
    :class="centerClass"
  )
    span.section-title_text(v-if="icon")
      svg-icon.section-title_icon(:name="icon")
      slot
    slot(v-else)
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      required: true,
    },

    icon: {
      type: String,
      default: null,
    },

    isCenter: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    tag() {
      return `h${this.level}`
    },

    centerClass() {
      return {
        [this.$style.center]: this.isCenter,
      }
    },
  },
}
</script>

<style module>
.center {
  align-items: center;
}
</style>

<style lang="scss" scoped>
.section-title {
  display: inline-flex;
  flex-direction: column;
  font-size: 2rem;
  font-weight: $weight-bold;
  font-family: $font-family-serif;

  &::after {
    content: '';
    display: block;
    width: 150px;
    height: 2px;
    background-color: $color-magenta;
    margin-top: 20px;
  }

  &_text {
    display: inline-flex;
    align-items: center;
  }

  &_icon {
    width: 24px;
    height: 24px;
    margin-right: 5px;
  }
}

@media (--sp) {
  .section-title {
    font-size: 1.6rem;

    &::after {
      width: (150px / 2);
      margin-top: 15px;
    }

    &_icon {
      width: 18px;
      height: 18px;
    }
  }
}
</style>
