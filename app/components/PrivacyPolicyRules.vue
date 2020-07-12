<template lang="pug">
  .privacy-policy-rules
    .privacy-policy-rules_section
      h2.privacy-policy-rules_title 法令の遵守
      p 当事務所は、個人情報の取扱について、個人情報の保護に関する法律その他の関連諸法令を遵守します。
    .privacy-policy-rules_section
      h2.privacy-policy-rules_title 個人情報の取得
      p 当事務所は、個人情報を利用目的の達成に必要な範囲において、適正に取得します。
    .privacy-policy-rules_section
      h2.privacy-policy-rules_title 個人情報の利用目的
      p 当事務所は、収集し保有する個人情報を、取得の際に示した利用目的及びこれと合理的な関連性のある範囲内で、業務の遂行上必要な限りにおいて利用します。あらかじめご本人の同意を得た場合及び法令で定められた場合を除き、その他の目的のために利用しません。
      dl.privacy-policy-rules_dl
        dt.privacy-policy-rules_dt 利用目的
        dd.privacy-policy-rules_dd ご依頼、ご相談の受付並びに業務の遂行のため。
        dd.privacy-policy-rules_dd 法令等に基づくご本人様の確認のため。
        dd.privacy-policy-rules_dd 他の事業者等から個人情報を含む業務等を委託された場合等において、委託された当該業務を適切に遂行するため。
        dd.privacy-policy-rules_dd お客様との契約や法律等に基づく権利の行使や義務の履行のため。
        dd.privacy-policy-rules_dd ご依頼の解約や、事後管理等のため。
        dd.privacy-policy-rules_dd 法令遵守及び各種リスク管理等を適切に行うため。
        dd.privacy-policy-rules_dd その他、業務を適切かつ円滑に遂行するため。
    .privacy-policy-rules_section
      h2.privacy-policy-rules_title 個人情報の保有・管理
      p 当事務所は、保有する個人情報について正確かつ最新の内容に保つよう努めるとともに、個人情報の紛失、毀損または漏えいを防止するために必要な安全管理措置を講じます。
      dl.privacy-policy-rules_dl
        dt.privacy-policy-rules_dt 書類の保管・保存
        dd.privacy-policy-rules_dd 当事務所所属の司法書士・事務員以外の者の目に触れないよう細心の注意を払います。
        dd.privacy-policy-rules_dd 権利証、住民票、戸籍謄抄本、印鑑証明書、各種契約書等の依頼者情報および書類の写しは、当事務所の金庫にて保存します。
      dl.privacy-policy-rules_dl
        dt.privacy-policy-rules_dt 書類の処分
        dd.privacy-policy-rules_dd 不要になった書類等は、シュレッダーにかけ裁断するか、専門業者に委託して溶解処理します。
        dd.privacy-policy-rules_dd 当事務所にて保管していた書類等は、案件終了から10年間経過後に上記と同様の処分をします。
      dl.privacy-policy-rules_dl
        dt.privacy-policy-rules_dt データの保管
        dd.privacy-policy-rules_dd データは、外部からアクセスを禁止したPCにて保管します。
      dl.privacy-policy-rules_dl
        dt.privacy-policy-rules_dt データの廃棄・処分
        dd.privacy-policy-rules_dd 当事務所にて保管していたデータは、案件終了から10年間経過後に消去します。
        dd.privacy-policy-rules_dd PCを処分する場合は、磁気ディスクの全データを消去し、粉砕処理します。
        dd.privacy-policy-rules_dd コピー機には、データが残らない措置を講じます。

    .privacy-policy-rules_section
      h2.privacy-policy-rules_title 個人情報の第三者提供
      p 当事務所は、あらかじめご本人の同意を得た場合及び法令で定められた場合を除き、個人情報を第三者に提供することはありません。
    .privacy-policy-rules_section
      h2.privacy-policy-rules_title 個人情報の開示、訂正、利用停止及び苦情処理等
      p 当事務所は、保有する個人情報に対するご本人からの開示、訂正、利用停止等のご請求については、法令に基づいて適切に対応します。また、当事務所は、個人情報の取扱いについてのご本人からの苦情やお問い合わせに対し、迅速かつ誠実に取り組みます。これらのご請求及び苦情等に関する手続の詳細につきましては、当事務所までご連絡下さい。
    .privacy-policy-rules_section
      h2.privacy-policy-rules_title 個人情報保護方針の継続的改善
      p 当事務所は、本保護方針の継続的な改善に努めます。なお、当事務所は、法の改正に応じて、本保護方針を変更することがあります。
</template>

<style lang="scss" scoped>
.privacy-policy-rules {
  counter-reset: order;

  &_section {
    padding-top: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid $color-table-border;

    &:first-child {
      border-top: 1px solid $color-table-border;
    }
  }

  &_title {
    font-size: 2rem;
    font-weight: $weight-regular;
    margin-bottom: 15px;

    &::before {
      color: $color-magenta;
      counter-increment: order;
      content: counter(order) '. ';
    }
  }

  &_dl {
    padding: 0 15px;
    margin-top: 10px;

    &:first-of-type {
      margin-top: 30px;
    }
  }

  &_dt {
    font-size: 1.6rem;
    font-weight: $weight-medium;
    margin-bottom: 10px;
  }

  &_dd {
    padding-left: 12px;
    display: flex;

    &::before {
      content: '・';
      color: $color-magenta;
      flex: none;
    }
  }
}

@media (--sp) {
  .privacy-policy-rules {
    &_title {
      font-size: 1.6rem;
      margin-bottom: 10px;
    }

    &_dl {
      padding: 0;
    }

    &_dd {
      padding-left: 0;
    }
  }
}
</style>
