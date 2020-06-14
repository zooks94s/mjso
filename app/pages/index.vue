<template lang="pug">
  .container
    div
      logo
      h1.title mjso

      h2.subtitle My supreme Nuxt.js project

      .links
        a.button--green(
          href="https://nuxtjs.org/"
          target="_blank"
        ) Documentation
        a.button--grey(
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
        ) GitHub
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  },

  head() {
    return {
      title:
        '宮川司法書士事務所 | 不動産登記・法人登記でお悩みの方はご相談ください',
      titleTemplate: '',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            '宮川司法書士事務所は、個人や法人に関わらず、登記や相続などに関するお悩みに耳を傾け、丁寧にサポートいたします。',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            '登記,不動産登記,法人登記,会社設立登記,商業登記,企業法務,遺産相続,相続,遺言,成年後見,名義変更,抵当権抹消,相談,司法書士,東京,中野,東京都中野区,宮川司法書士事務所',
        },
      ],
    }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
