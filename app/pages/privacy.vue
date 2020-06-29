<template lang="pug">
  LocalPage
    .privacy-page
      h1 プライバシー
</template>

<script>
import LocalPage from '@/components/LocalPage'

export default {
  components: {
    LocalPage,
  },

  head() {
    return {
      title: 'プライバシーポリシー PRIVACY POLICY',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '宮川司法書士事務所の個人情報保護方針を掲載しています。',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'プライバシーポリシー,privacypolicy,登記,不動産登記,法人登記,会社設立登記,商業登記,相談,司法書士,宮川司法書士事務',
        },
      ],
    }
  },
}
</script>
