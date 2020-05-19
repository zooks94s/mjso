<template lang="pug">
  .app-layout
    GlobalHeader
    .app-layout_content
      nuxt
      .app-layout_bottom
        GlobalFooter
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader.vue'
import GlobalFooter from '@/components/GlobalFooter'

export default {
  components: {
    GlobalHeader,
    GlobalFooter,
  },
}
</script>

<style lang="scss" scoped>
.app-layout {
  &_content {
    width: 100%;
  }
}
</style>
