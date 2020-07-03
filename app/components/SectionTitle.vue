<template lang="pug">
  component.section-title(
    :is="tag"
    :class="centerClass"
  )
    slot
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      required: true,
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
}

@media (--sp) {
  .section-title {
    font-size: 1.6rem;

    &::after {
      width: (150px / 2);
      margin-top: 15px;
    }
  }
}
</style>
