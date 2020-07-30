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
import { siteDomain, ogpMetas } from '@/assets/js/meta-config'

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

  data() {
    return {
      title: 'サービスについて SERVICE',
      description: '大切な不動産や相続、会社設立に関することなど、幅広いサービスの概要をご確認いただけます。',
      keywords: 'サービスについて,業務案内,サービス,service,登記,不動産登記,法人登記,会社設立登記,商業登記,遺産相続,相続,遺言,名義変更,抵当権抹消,相談,司法書士,宮川司法書士事務所',
    }
  },

  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description, },
        { hid: 'keywords', name: 'keywords', content: this.keywords, },
        { hid: 'og:title', property: 'og:title', content: this.title },
        { hid: 'og:description', property: 'og:description', content: this.description, },
        { hid: 'og:url', property: 'og:url', content: siteDomain + this.$route.fullPath },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        ...ogpMetas
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

@media (--narrow) {
  .service-page {
    &_section {
      @include contentWidthNarrow;
    }
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
