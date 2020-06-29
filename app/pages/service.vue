<template lang="pug">
  LocalPage
    .service-page
      h1 サービス
</template>

<script>
import LocalPage from '@/components/LocalPage'

export default {
  components: {
    LocalPage,
  },

  head() {
    return {
      title: 'サービスについて SERVICE',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            '大切な不動産や相続、会社設立に関することなど、幅広いサービスの概要をご確認いただけます。',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            '私たちについて,挨拶,メッセージ,about,登記,不動産登記,法人登記,会社設立登記,商業登記,遺産相続,相続,遺言,名義変更,抵当権抹消,相談,司法書士,宮川司法書士事務所',
        },
      ],
    }
  },
}
</script>
