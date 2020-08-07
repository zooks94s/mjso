<template lang="pug">
  a.mail-to-link(@click="openMailer")
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
      window.location.href = `mailto:${user}@${domain}`
    }
  }
}
</script>

<style lang="scss" scoped>
.mail-to-link {
  cursor: pointer;
}
</style>
