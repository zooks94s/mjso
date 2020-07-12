<template lang="pug">
  .price-case-study-costs
    PriceCaseStudy
      template(v-slot:header)
        SectionTitle(
          :level="2"
          :is-center="true"
          :icon="title.icon"
        ) {{ title.text }}
      template(v-slot:body)
        PriceTable(:table="table")
</template>

<script>
import SectionTitle from '@/components/SectionTitle'
import PriceCaseStudy from '@/components/PriceCaseStudy'
import PriceTable from '@/components/PriceTable'

export default {
  components: {
    SectionTitle,
    PriceCaseStudy,
    PriceTable,
  },

  data() {
    return {
      title: {
        text: '諸経費',
        icon: 'costs',
      },
      table: [
        {
          title: '（戸（除）籍謄本等取得',
          tax: '￥450～／1 通＋郵送費',
          bill: '￥～1,000／1 通',
        },
        {
          title: '謄本・地図・図面等取得',
          tax: '￥500～／1 通',
          bill: '￥500～／1 通',
        },
        {
          title: '郵送費・交通費等',
          tax: '実費',
          bill: '日当￥1,000～',
        },
        {
          title: '各種書類作成',
          tax: '印紙税等',
          bill: '￥5,000～／1 部',
        },
      ],
    }
  },
}
</script>
