<template lang="pug">
  .call-number
    a.call-number_anchor.-telephone(href="tel:03-3388-0022" data-prefix="tel.") 03-3388-0022
    .call-number_anchor(data-prefix="fax.") 03-3388-0066
</template>

<style lang="scss" scoped>
.call-number {
  &_anchor {
    display: inline-block;
    font-size: 2rem;
    font-weight: $weight-bold;
    color: $color-text;

    & + & {
      margin-left: 20px;
    }

    &::before {
      font-size: 1.4rem;
      content: attr(data-prefix);
      margin-right: 8px;
    }
  }

  &_anchor.-telephone {
    text-decoration: none;
    pointer-events: none;
    cursor: default;
  }
}

@media (--sp) {
  .call-number {
    &_anchor {
      width: 100%;

      & + & {
        margin-top: 12px;
        margin-left: 0;
      }
    }

    &_anchor.-telephone {
      pointer-events: auto;
    }
  }
}
</style>
