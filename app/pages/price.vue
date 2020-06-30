<template lang="pug">
  LocalPage
    .price-page
      ContentsTitle(
        category="PRICE"
        title="料金のご案内"
      )
</template>

<script>
import LocalPage from '@/components/LocalPage'
import ContentsTitle from '@/components/ContentsTitle'

export default {
  components: {
    LocalPage,
    ContentsTitle,
  },

  head() {
    return {
      title: '料金のご案内 PRICE',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            '安心の価格でリーガルサービスを。サービスにかかる費用について、一般的な目安をご案内します。',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            '料金のご案内,料金,コスト,費用,price,登記,不動産登記,法人登記,会社設立登記,商業登記,遺産相続,相続,遺言,名義変更,抵当権抹消,相談,司法書士,宮川司法書士事務所',
        },
      ],
    }
  },
}
</script>
