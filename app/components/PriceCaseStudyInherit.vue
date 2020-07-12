<template lang="pug">
  .price-case-study-inherit
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
        text: '相続のこと・その他',
        icon: 'inherit',
      },
      table: [
        {
          title: '所有権移転登記',
          tax: '固定資産評価額×0.4%',
          bill: '¥40,000～',
        },
        {
          title: '預貯金等相続手続',
          tax: '戸籍等実費',
          bill: '¥30,000～',
        },
        {
          title: '相続放棄・遺言検認等各種申立',
          tax: '￥800＋郵券代～、戸籍等実費',
          bill: '¥30,000～',
        },
        {
          title: '遺言公正証書作成支援',
          tax: '財産の価額に応じて変動',
          bill: '¥50,000～',
        },
        {
          title: '後見申立',
          tax: '￥3,400＋郵券代（別途鑑定費がかかる場合あり）、実費',
          bill: '¥50,000～',
        },
        {
          title: '任意後⾒契約証書作成等',
          tax: '￥15,000～',
          bill: '￥50,000～',
        },
        {
          title: '内容証明郵便',
          tax: '実費',
          bill: '￥10,000～',
        },
        {
          title: '簡易裁判所訴訟代理',
          tax: '印紙代＋郵券代',
          bill: '着手⾦￥50,000～＋回収額の20％',
        },
      ],
      caseStudy: {
        title: `夫が亡くなったため
都内の自宅
及び銀行預金を
相続した場合`,
        tax: {
          title: '登録免許税等',
          price: [
            {
              name: '登録免許税',
              value: 100000,
            },
            {
              name: '謄本、郵送費、交通費',
              value: 5000,
            },
            {
              name: '戸籍謄本等必要書類取得費用',
              value: 5000,
            },
          ],
          totalText: '実費小計',
        },

        bill: {
          title: '手数料',
          price: [
            {
              name: '登記報酬',
              value: 40000,
            },
            {
              name: '預金相続報酬',
              value: 30000,
            },
            {
              name: '戸籍謄本等収集代行報酬',
              value: 5000,
            },
            {
              name: 'その他日当、書類作成等',
              value: 5000,
            },
          ],
          totalText: '報酬等小計（税別）',
        },

        notice: `登録免許税、手数料は不動産の評価額によって異なります。手数料は別途消費税がかかります。`,
      },
    }
  },
}
</script>
