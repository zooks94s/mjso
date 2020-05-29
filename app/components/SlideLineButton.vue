<template lang="pug">
  component.slide-line-button(
    :is="tagType"
    :to="to"
    :target="target"
    :href="href"
  )
    .slide-line-button_body
      span.slide-line-button_text
        slot
      svg-icon.slide-line-button_icon(name="arrow_forward")
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: null,
    },

    href: {
      type: String,
      default: null,
    },

    target: {
      type: String,
      default: '_self',
    },
  },

  computed: {
    tagType() {
      if (this.to) return 'nuxt-link'
      if (this.href) return 'a'
      return 'div'
    },
  },
}
</script>

<style lang="scss" scoped>
.slide-line-button {
  display: inline-block;
  text-decoration: none;
  position: relative;
  overflow: hidden;

  &::before {
    z-index: 2;
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: $color-white;
    position: absolute;
    left: 0;
    bottom: 0;
    transition: 0.5s cubic-bezier(0.7, 0, 0.3, 1);
    transform: translateX(100%);
  }

  &::after {
    z-index: 1;
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: $color-magenta;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  &:hover {
    &::before {
      animation: slideLine 1s cubic-bezier(0.7, 0, 0.3, 1);
    }
  }

  &_body {
    padding: 10px 0;
    display: flex;
    align-items: center;
    width: 100%;
  }

  &_text {
    color: $color-dark-blue;
    @include textTracking(50);
  }

  &_icon {
    margin-left: 0.5em;
    color: $color-magenta;
    width: 20px;
  }
}

@keyframes slideLine {
  0% {
    transform: translateX(-100%);
  }

  40% {
    transform: translateX(0);
  }

  60% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(100%);
  }
}
</style>
