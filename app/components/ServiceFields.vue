<template lang="pug">
  .service-fields
    .service-fields_section
      ServiceFieldsContent(:content="home")
    .service-fields_section
      ServiceFieldsContent(:content="company")
    .service-fields_section
      ServiceFieldsContent(:content="inherit")
    .service-fields_section
      ServiceFieldsContent(:content="justice")
</template>

<script>
import ServiceFieldsContent from '@/components/ServiceFieldsContent'

export default {
  components: {
    ServiceFieldsContent,
  },

  data() {
    return {
      home: {
        icon: 'home',
        title: '不動産のこと',
        summary: '不動産登記手続きに関する業務',
        description: `大切な家族の暮らす場所、代々想いのこもった土地や建物。
新築や土地建物の相続、ローンの借入れや返済など不動産には各局面で適切な手続きが必要となります。
不動産会社、仲介会社、他士業の方に向けても新規対応いたします。`,
        list: [
          'ご相続に関する手続き全般（預貯金等相続も含む）',
          '不動産の売買、贈与、財産分与等',
          '建物のご新築',
          '（根）抵当権設定、変更等',
          '住宅ローン等のご返済',
          'ご住所やお名前の変更',
          '合併、会社分割、事業譲渡等',
          '信託、受益権売買、信託の変更・終了等',
          '仮登記、各種担保権',
          '地上権・地役権等各種用益権、賃借権の設定・変更・抹消等',
          '第三者のためにする契約、借地権売買等各種スキーム',
        ],
      },
      company: {
        icon: 'company',
        title: '会社のこと',
        summary: '商業登記（各種会社、法人）手続き、企業法務に関する業務',
        description: `会社設立や役員変更、本店移転やM&Aなど、
リスクを最小化したスムーズな事業運営のお手伝いをいたします。
私たちを通した税理士、会計士のご紹介も可能です。`,
        list: [
          '株式会社・合同会社・各種法人の設立',
          '有限会社から株式会社への移行',
          '役員、社員、支配人等の選任・退任等',
          '商号、目的、機関等各種変更',
          '株式に関する変更、種類株式の発行・変更等',
          '増資、減資',
          '本店移転・支店の設置、移転、廃止',
          '新株予約権（ストックオプション含む）の発行、変更、行使等',
          '合併、会社分割、事業譲渡、事業承継等',
          '解散、清算人選任、清算結了',
          '各種コンサルティング業務、講演、相談会',
        ],
      },
      inherit: {
        icon: 'inherit',
        title: '相続のこと',
        summary: '成年後見、財産管理に関する業務',
        description: `ご相続人のお手続きは多岐に渡ります。大変な時期だとは思いますが、お手伝いさせていただきます。
また、ご相続前からしっかりと相続対策をすることが大切です。`,
        list: [
          '不動産の名義変更',
          '預貯金等相続手続',
          '遺言検認、相続放棄、相続人不存在等、家庭裁判所各種申立',
          '遺言作成、公正証書遺言立会人等',
          '成年後見全般',
          '任意後見契約',
          '民事信託（家族信託）',
          '相続対策、認知症対策に関するご相談',
        ],
      },
      justice: {
        icon: 'justice',
        title: '裁判に関すること',
        summary: '',
        description: `権利を有していても行使しなければ利益を得たり、生活を立て直すことが難しい場合があります。
詳しくはご相談ください。個別に対応させていただきます。`,
        list: [
          '不払い、借金問題（過払金返還請求等）、賃貸借関係（敷金返還請求等）等、民事訴訟代理（訴額140万円まで）',
        ],
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.service-fields {
  &_section {
    & + & {
      margin-top: 70px;
    }
  }
}

@media (--sp) {
  .service-fields {
    &_section {
      & + & {
        margin-top: 40px;
      }
    }
  }
}
</style>
