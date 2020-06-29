<template lang="pug">
  .about-page
    .about-page_bottom
      ContactButton
</template>

<script>
import ContactButton from '@/components/ContactButton'

export default {
  components: {
    ContactButton,
  },

  head() {
    return {
      title: '私たちについて ABOUT US',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            '全てのお客様に安心な時間を。宮川司法書士事務所はお客様の繊細な権利を守ります。',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'サービスについて,業務案内,サービス,service,登記,不動産登記,法人登記,会社設立登記,商業登記,遺産相続,相続,遺言,名義変更,抵当権抹消,相談,司法書士,宮川司法書士事務所',
        },
      ],
    }
  },
}
</script>
