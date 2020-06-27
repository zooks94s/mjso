<template lang="pug">
  .index-service-grid
    IndexServiceGridItem(
      v-for="(item, index) in items"
      :key="`${index}_${item.title}`"
      :icon="item.icon"
      :title="item.title"
      :text="item.text"
    )
</template>

<script>
import IndexServiceGridItem from '@/components/IndexServiceGridItem'

export default {
  components: {
    IndexServiceGridItem,
  },

  data() {
    return {
      items: [
        {
          icon: 'home',
          title: '不動産のこと',
          text:
            '新築や土地建物の相続、ローンの借入れや返済など不動産には各局面で適切な手続きが必要となります。<br>不動産会社、仲介会社、他士業の方に向けても新規対応いたします。',
        },
        {
          icon: 'company',
          title: '会社のこと',
          text:
            '会社設立や役員変更、本店移転やM&amp;Aなど、リスクを最小化したスムーズな事業運営のお手伝いをいたします。<br>私たちを通した税理士、会計士のご紹介も可能です。',
        },
        {
          icon: 'inherit',
          title: '相続のこと',
          text:
            'ご相続人のお手続きは多岐に渡ります。大変な時期だとは思いますが、お手伝いさせていただきます。<br>また、ご相続前からしっかりと相続対策をすることが大切です。',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.index-service-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 15px;
  grid-template-areas: 'g1 g2 g3';
  @include gridAreaChildren(3);
}

@media (--sp) {
  .index-service-grid {
    margin-right: ($padding-side-sp - 20) * -1;
    margin-left: ($padding-side-sp - 20) * -1;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    grid-gap: 15px;
    grid-template-areas:
      'g1'
      'g2'
      'g3';
  }
}
</style>
