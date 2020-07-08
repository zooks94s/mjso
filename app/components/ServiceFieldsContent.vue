<template lang="pug">
  .service-fields-content
    .service-fields-content_heading
      SectionTitle(
        :level="3"
        :is-center="true"
        :icon="content.icon"
      ).service-fields-content_title {{ content.title }}
      p.service-fields-content_summary(v-if="content.summary") {{ content.summary }}
    .service-fields-content_body
      p.service-fields-content_description(v-text="content.description")
      ul.service-fields-content_list
        li.service-fields-content_item(
          v-for="item in content.list"
          :class="{ '-full': isFull }"
        ) {{ item }}
</template>

<script>
import SectionTitle from '@/components/SectionTitle'

export default {
  components: {
    SectionTitle,
  },

  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    isFull() {
      return this.content.list.length === 1
    },
  },
}
</script>

<style lang="scss" scoped>
.service-fields-content {
  &_heading {
    text-align: center;
  }

  &_title {
    margin-bottom: 20px;
  }

  &_summary {
    color: $color-magenta;
    margin-bottom: 25px;
  }

  &_description {
    text-align: center;
    font-size: 1.5rem;
    line-height: 2;
    white-space: pre-wrap;
    word-wrap: break-word;
    margin-bottom: 30px;
  }

  &_list {
    display: flex;
    flex-wrap: wrap;
  }

  &_item {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: calc(50% - 10px);
    max-width: calc(50% - 10px);
    background-color: $color-white;
    padding: 9px 20px;
    margin-top: 10px;
    position: relative;

    &::before {
      content: '';
      display: inline-block;
      width: 10px;
      height: 2px;
      background-color: $color-magenta;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }

    &:nth-child(2n) {
      margin-left: 20px;
    }
  }

  &_item.-full {
    flex: none;
    width: 100%;
    max-width: 100%;
  }
}

@media (--sp) {
  .service-fields-content {
    &_title,
    &_summary {
      margin-bottom: 20px;
    }

    &_summary,
    &_description {
      font-size: 1.4rem;
    }

    &_description {
      text-align: left;
    }

    &_list {
      display: block;
    }

    &_item {
      font-size: 1.4rem;
      width: 100%;
      max-width: initial;

      &:nth-child(2n) {
        margin-left: 0;
      }
    }
  }
}
</style>
