<template lang="pug">
  .global-header-hamburger
    button.global-header-hamburger_button(
      type="button"
      @click="clickHandler"
    )
      .global-header-hamburger_icons
        span.global-header-hamburger_menu(:class="{ '-hidden': isActive }")
          i.global-header-hamburger_menubar
          i.global-header-hamburger_menubar
          i.global-header-hamburger_menubar
        span.global-header-hamburger_close(:class="{ '-active': isActive }")
    .global-header-hamburger_text {{ toggleHamburgerText }}
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    }
  },

  computed: {
    toggleHamburgerText() {
      return this.isActive ? 'CLOSE' : 'MENU'
    },
  },

  methods: {
    clickHandler() {
      this.isActive = !this.isActive
      this.$emit('click-hamburgar', this.isActive)
    },
  },
}
</script>

<style lang="scss" scoped>
@mixin hoverIconScale {
  $scales: 1, 0.8, 0.6;
  @each $scale in $scales {
    $i: index($scales, $scale);

    &:hover &_menubar:nth-child(#{$i}) {
      transform: scaleX($scale);
    }
  }
}

.global-header-hamburger {
  @include hoverIconScale;

  &_button {
    display: block;
    width: 25px;
    height: 25px;
  }

  &_icons {
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  &_menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    transition: $transition-hamburger;
  }

  &_menu.-hidden {
    transform: scale(0);
  }

  &_menubar {
    display: block;
    width: 100%;
    height: 2px;
    background-color: $color-black;
    transition: $transition-hamburger;
    transform-origin: right bottom;
  }

  &_close {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(0);
    transition: $transition-hamburger;
    transform-origin: center;

    &::before,
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background-color: $color-black;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      margin: auto;
      transform-origin: center;
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  }

  &_close.-active {
    transform: scale(1);

    &:hover {
      transform: scale(0.75);
    }
  }

  &_text {
    width: 25px;
    display: flex;
    align-items: center;
    margin-top: 15px;
    font-size: 1.3rem;
    color: $color-black;
    writing-mode: vertical-rl;
    @include textTracking(150);
  }
}

@media (--sp) {
  .global-header-hamburger {
    &_button {
      width: 20px;
      height: 20px;
    }

    &:hover &_menubar:nth-child(n) {
      transform: scale(1);
    }

    &_text {
      display: none;
    }
  }
}
</style>
