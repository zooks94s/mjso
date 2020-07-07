<template lang="pug">
  LocalPage
    .service-page
      ContentsTitle(
        category="SERVICE"
        title="サービスについて"
      )
      .service-page_body
        section.service-page_section
          ServicePolicy

        section.service-page_section.-yellow
          ServiceFields

        section.service-page_section
          Serviceflow
</template>

<script>
import LocalPage from '@/components/LocalPage'
import ContentsTitle from '@/components/ContentsTitle'
import ServicePolicy from '@/components/ServicePolicy'
import ServiceFields from '@/components/ServiceFields'
import Serviceflow from '@/components/Serviceflow'

export default {
  components: {
    LocalPage,
    ContentsTitle,
    ServicePolicy,
    ServiceFields,
    Serviceflow,
  },

  head() {
    return {
      title: 'サービスについて SERVICE',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            '大切な不動産や相続、会社設立に関することなど、幅広いサービスの概要をご確認いただけます。',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            '私たちについて,挨拶,メッセージ,about,登記,不動産登記,法人登記,会社設立登記,商業登記,遺産相続,相続,遺言,名義変更,抵当権抹消,相談,司法書士,宮川司法書士事務所',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.service-page {
  &_section {
    @include contentWidth;

    &:not(:first-child) {
      margin-top: 80px;
    }
  }

  &_section.-yellow {
    background-color: $color-light-yellow;
    padding-top: 70px;
    padding-bottom: 70px;
  }
}

@media (--sp) {
  .service-page {
    &_section {
      @include contentWidthSp;

      &:not(:first-child) {
        margin-top: 40px;
      }
    }

    &_section.-yellow {
      padding-top: 40px;
      padding-bottom: 40px;
    }
  }
}
</style>
