<template lang="pug">
  .office-outline
    .office-outline_heading
      SectionTitle(
        :level="2"
        :is-center="true"
      ) 事務所概要
    .office-outline_body
      table.office-outline_table
        tbody
          tr
            th.office-outline_th
              span.office-outline_justify 名称
            td.office-outline_td 宮川司法書士事務所
          tr
            th.office-outline_th(rowspan="2")
              span.office-outline_justify 司法書士
            td.office-outline_td 東京司法書士会所属#[br]簡裁訴訟代理等関係業務#[br._break-sp]認定司法書士#[br]
              strong.office-outline_strong 代表 宮川祐輔
          tr
            td.office-outline_td 東京司法書士会所属#[br]簡裁訴訟代理等関係業務#[br._break-sp]認定司法書士#[br]
              strong.office-outline_strong 伊藤美穂
      table.office-outline_table
        tbody
          tr
            th.office-outline_th
              span.office-outline_justify 所在地
            td.office-outline_td 〒164-0001#[br]東京都中野区中野5-67-7#[br._break-sp]プラザ中野704
              .office-outline_button
                SlidelineButton(
                  href="https://goo.gl/maps/MNRZsT2xMgbTb7KbA"
                  target="_blank"
                )
                  | GOOGLE MAP
          tr
            th.office-outline_th
              span.office-outline_justify 連絡先
            td.office-outline_td tel.03-3388-0022#[br]fax.03-3388-0066
          tr
            th.office-outline_th
              span.office-outline_justify 営業時間
            td.office-outline_td 月～金 9:00～20:00#[br]土日祝は予約制にて#[br._break-sp]対応いたします。
</template>

<script>
import SlidelineButton from '@/components/SlidelineButton'
import SectionTitle from '@/components/SectionTitle'

export default {
  components: {
    SlidelineButton,
    SectionTitle,
  },
}
</script>

<style lang="scss" scoped>
.office-outline {
  &_heading {
    text-align: center;
    margin-bottom: 50px;
  }

  &_body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 60px;
    grid-template-areas: 'g1 g2';
    @include gridAreaChildren(2);
  }

  &_table {
    width: 100%;
    height: 100%;
    table-layout: fixed;
    border-bottom: 1px solid #d2d2d2;
  }

  &_th,
  &_td {
    font-size: 1.5rem;
    line-height: 2;
    padding: 20px 0;
    border-top: 1px solid #d2d2d2;
  }

  &_th {
    text-align: left;
    vertical-align: top;
    width: 120px;
    font-weight: $weight-regular;
  }

  &_justify {
    display: inline-block;
    width: 4em;
    text-align-last: justify;
    text-justify: inter-ideograph;
  }

  &_strong {
    font-weight: $weight-bold;
  }

  &_button {
    line-height: 1;
    font-size: 1.3rem;
  }
}

@media (--sp) {
  .office-outline {
    &_heading {
      text-align: left;
      margin-bottom: 35px;
    }

    &_body {
      display: block;
    }

    &_table {
      border-bottom: none;

      & + & {
        border-bottom: 1px solid #d2d2d2;
      }
    }

    &_th,
    &_td {
      font-size: 1.4rem;
    }

    &_th {
      font-weight: $weight-medium;
      width: (150px / 2);
    }
  }
}
</style>
