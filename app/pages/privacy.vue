<template lang="pug">
  LocalPage
    .privacy-page
      ContentsTitle(
        category="PRIVACY POLICY"
        title="プライバシーポリシー"
      )
      .privacy-page_summary
        ParagraphText(:is-indent="true")
          p 司法書士は、国民の権利の擁護と公正な社会の実現を使命として、依頼者をはじめとする多くの方々の個人情報を取得し、日々の業務を行っています。#[br]これらの個人情報を保護することは、依頼者の方々と信頼関係を構築し、維持していく上で、司法書士に課せられた重要な責務だと考えます。
          p そこで、当事務所は、以下のとおり個人情報保護方針を定め、個人情報の保護に努めます。
      .privacy-page_body
        PrivacyPolicyRules
</template>

<script>
import LocalPage from '@/components/LocalPage'
import ContentsTitle from '@/components/ContentsTitle'
import ParagraphText from '@/components/ParagraphText'
import PrivacyPolicyRules from '@/components/PrivacyPolicyRules'

export default {
  components: {
    LocalPage,
    ContentsTitle,
    ParagraphText,
    PrivacyPolicyRules,
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

<style lang="scss" scoped>
.privacy-page {
  &_summary {
    @include contentWidth;
    margin-bottom: 80px;
  }

  &_body {
    @include contentWidth;
    background-color: $color-light-yellow;
    padding-top: 70px;
    padding-bottom: 70px;
  }
}

@media (--narrow) {
  .privacy-page {
    &_summary,
    &_body {
      @include contentWidthNarrow;
    }
  }
}

@media (--sp) {
  .privacy-page {
    &_summary {
      @include contentWidthSp;
      margin-bottom: 40px;
    }

    &_body {
      @include contentWidthSp;
      padding-top: 40px;
      padding-bottom: 40px;
    }
  }
}
</style>
