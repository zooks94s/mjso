<template lang="pug">
  .contact-button
    a.contact-button_link(href="mailto:user@example.com" target="_blank")
      span.contact-button_text CONTACT
      svg-icon.contact-button_icon(name="arrow_forward")
</template>

<style lang="scss" scoped>
.contact-button {
  &_link {
    color: $color-dark-blue;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90px;
    max-width: 500px;
    margin: 0 auto;
    background-color: $color-white;
    border: 1px solid #aaaaaa;
    transition: border-color $transition-hover;
  }

  &:hover {
    border-color: $color-magenta;
  }

  &_text {
    font-size: 2.2rem;
    font-weight: $weight-medium;
    @include textTracking(150);
  }

  &_icon {
    width: 26px;
    fill: $color-magenta;
    margin-top: 0.5em;
    margin-left: 10px;
  }
}

@media (--sp) {
  .contact-button {
    padding: 0 $padding-side-sp;

    &_link {
      max-width: initial;
      height: 60px;
    }

    &_text {
      font-size: 2rem;
    }

    &_icon {
      width: 25px;
      margin-top: 0.5em;
      margin-left: 10px;
    }
  }
}
</style>
