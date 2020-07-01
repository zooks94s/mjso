<template lang="pug">
  .local-page
    slot
    .local-page_bottom
      ContactButton
</template>

<script>
import ContactButton from '@/components/ContactButton'

export default {
  components: {
    ContactButton,
  },
}
</script>

<style lang="scss" scoped>
.local-page {
  &_bottom {
    padding-top: 100px;
    padding-bottom: 70px;
  }
}
</style>
