<template lang="pug">
  .app-layout
    GlobalHeader
    .app-layout_content
      nuxt
      .app-layout_bottom
</template>

<script>
import GlobalHeader from '@/components/GlobalHeader.vue'

export default {
  components: {
    GlobalHeader,
  },
}
</script>

<style lang="scss" scoped>
.app-layout {
  &_content {
    width: 100%;
    padding: 0 140px;
    margin: 0 auto;
  }
}
</style>
