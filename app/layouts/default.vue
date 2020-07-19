<template lang="pug">
  #app.app-layout
    GlobalHeader
    .app-layout_content
      nuxt
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

@media (--sp) {
  .app-layout {
    padding-top: 50px;
  }
}
</style>
