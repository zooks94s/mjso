<template lang="pug">
.paragraph-text(:class="indentClass")
  slot
</template>

<script>
export default {
  props: {
    isIndent: {
      type: Boolean,
      default: null,
    },
  },

  computed: {
    indentClass() {
      return {
        [this.$style.textIndent]: this.isIndent,
      }
    },
  },
}
</script>

<style module>
.textIndent {
  text-indent: 1em;
}
</style>

<style lang="scss" scoped>
.paragraph-text {
  @include textTracking(40);
  font-size: 1.5rem;
  line-height: 2;

  & + & {
    margin-top: 45px;
  }
}

@media (--sp) {
  .paragraph-text {
    font-size: 1.4rem;

    & + & {
      margin-top: 35px;
    }
  }
}
</style>
