<template lang="pug">
  .global-menu-contact
    MailToLink.global-menu-contact_anchor
      svg-icon.global-menu-contact_icon(name="mail")
      p.global-menu-contact_text CONTACT
</template>

<script>
import MailToLink from '@/components/MailToLink'

export default {
  components: {
    MailToLink,
  },
}
</script>

<style lang="scss" scoped>
.global-menu-contact {
  &_anchor {
    color: $color-white;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    background-color: $color-text;
  }

  &_icon {
    width: 23px;
    height: 15px;
    margin-right: 9px;
  }
}
</style>
