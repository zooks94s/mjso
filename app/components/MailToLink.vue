<template lang="pug">
  a.mail-to-link(@click.self="openMailer")
    slot
</template>

<script>
export default {
  data() {
    return {
      user: 'miyakawa-yusuke',
      domain: 'mjso.jp'
    }
  },

  methods: {
    openMailer(event) {
      const user = this.user
      const domain = this.domain
      window.open(`mailto:${user}@${domain}`, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
.mail-to-link {
  cursor: pointer;
}
</style>
