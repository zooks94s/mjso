<template lang="pug">
  .price-case-study-real-estate
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
        text: '不動産のこと',
        icon: 'home',
      },
      table: [
        {
          title: '所有権保存（新築）',
          tax: '固定資産評価額×0.1～0.4％',
          bill: '¥15,000～',
        },
        {
          title: '所有権移転（売買、相続等）',
          tax: '固定資産評価額×0.2～2％（相続0.4％）',
          bill: '¥30,000～（ご相続・ご決済の場合＋¥10,000）',
        },
        {
          title: '（根）抵当権設定（ローン借入れ）',
          tax: '設定金額×0.1～0.4％',
          bill: '¥30,000～',
        },
        {
          title: '（根）抵当権変更・抹消（ローン返済）',
          tax: '不動産の個数×¥1,000',
          bill: '¥10,000～',
        },
        {
          title: '住所・氏名の変更（引越、結婚等）',
          tax: '不動産の個数×¥1,000',
          bill: '¥8,000～',
        },
        {
          title: '各種契約書等附属書類の作成',
          tax: '印紙税等',
          bill: '¥5,000～／1部',
        },
      ],
      caseStudy: {
        title: `投資のため都内に
ワンルームマンション
一部屋を
現金で購入した場合`,
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
          ],
          totalText: '実費小計',
        },

        bill: {
          title: '手数料',
          price: [
            {
              name: '報酬',
              value: 40000,
            },
            {
              name: 'その他日当、書類作成等',
              value: 10000,
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
