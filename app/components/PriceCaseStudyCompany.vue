<template lang="pug">
  .price-case-study-campany
    PriceCaseStudy
      template(v-slot:header)
        SectionTitle(
          :level="2"
          :is-center="true"
          :icon="title.icon"
        ) {{ title.text }}
      template(v-slot:body)
        PriceTable(:table="table")
      template(v-slot:bottom)
        PriceSimulation(
          :title="caseStudy.title"
          :tax="caseStudy.tax"
          :bill="caseStudy.bill"
          :notice="caseStudy.notice"
        )
</template>

<script>
import SectionTitle from '@/components/SectionTitle'
import PriceCaseStudy from '@/components/PriceCaseStudy'
import PriceTable from '@/components/PriceTable'
import PriceSimulation from '@/components/PriceSimulation'

export default {
  components: {
    SectionTitle,
    PriceCaseStudy,
    PriceTable,
    PriceSimulation,
  },

  data() {
    return {
      title: {
        text: '会社のこと',
        icon: 'company',
      },
      table: [
        {
          title: '株式会社設立',
          tax: '¥200,000～',
          bill: '¥60,000～',
        },
        {
          title: '合同会社、各種法人等設立',
          tax: '¥60,000～',
          bill: '¥50,000～',
        },
        {
          title: '役員変更',
          tax: '¥100,000～',
          bill: '¥10,000～',
        },
        {
          title: '商号、目的変更等',
          tax: '¥30,000～',
          bill: '¥15,000～',
        },
        {
          title: '募集株式の発行',
          tax: '¥30,000～',
          bill: '¥30,000～',
        },
        {
          title: '減資',
          tax: '￥30,000＋官報掲載費用',
          bill: '￥40,000～',
        },
        {
          title: '本店移転（同一管轄内）',
          tax: '￥30,000',
          bill: '￥25,000～',
        },
        {
          title: '本店移転（他管轄へ移転）',
          tax: '￥60,000',
          bill: '￥40,000～',
        },
        {
          title: '解散・清算結了',
          tax: '￥41,000',
          bill: '￥50,000～',
        },
        {
          title: '合併・会社分割等組織再編',
          tax: '￥60,000～＋官報掲載費用',
          bill: '￥150,000～',
        },
        {
          title: '有限会社から株式会社への移行',
          tax: '￥60,000～',
          bill: '￥50,000～',
        },
        {
          title: '各種議事録等附属書類の作成',
          tax: '印紙税等',
          bill: '￥5,000～／1部',
        },
      ],
      caseStudy: {
        title: `都内に株式会社を
設立した場合`,
        tax: {
          title: '登録免許税等',
          price: [
            {
              name: '登録免許税',
              value: 150000,
            },
            {
              name: '定款認証',
              value: 51000,
            },
            {
              name: '謄本、郵送費、交通費',
              value: 3000,
            },
          ],
          totalText: '実費小計',
        },

        bill: {
          title: '手数料',
          price: [
            {
              name: '報酬',
              value: 60000,
            },
            {
              name: 'その他日当、書類作成等',
              value: 10000,
            },
            {
              name: '源泉徴収',
              value: -6000,
            },
          ],
          totalText: '報酬等小計（税別）',
        },

        notice: `登録免許税は資本金2100万円程度までは15万円、それ以上の場合は資本金×0.7%となります。
手数料は別途消費税がかかります。`,
      },
    }
  },
}
</script>
