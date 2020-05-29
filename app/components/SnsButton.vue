<template lang="pug">
a.sns-button(
  :href="href"
  target="_blank"
)
  svg-icon.sns-button_icon(:name="iconName")
  span.sns-button_text {{ name }}
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: null,
    },

    href: {
      type: String,
      default: null,
    },
  },

  computed: {
    iconName() {
      return this.name.toLowerCase()
    },
  },
}
</script>

<style lang="scss" scoped>
.sns-button {
  color: $color-text;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: $transition-hover;
  transition-property: opacity;

  &:hover {
    opacity: $opacity-hover;
  }

  &_icon {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

  &_text {
    @include textTracking(50);
  }
}
</style>
