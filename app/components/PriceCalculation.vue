<template lang="pug">
  .price-calculation
    .price-calculation_row(v-for="row in rows")
      .price-calculation_name {{ row.name }}
      .price-calculation_price {{ toPriceString(row.value) }}
    .price-calculation_row.-total
      .price-calculation_name {{ totalText }}
      .price-calculation_price {{ calcTotalPrice }}
</template>

<script>
export default {
  props: {
    rows: {
      type: Array,
      default: () => [],
    },

    totalText: {
      type: String,
      default: null,
    },
  },

  computed: {
    calcTotalPrice() {
      const total = this.rows
        .map((row) => row.value)
        .reduce((acc, value) => acc + value)

      return this.toPriceString(total)
    },
  },

  methods: {
    toPriceString(value) {
      const price = `${Number(value).toLocaleString()}円`
      return price
    },
  },
}
</script>

<style lang="scss" scoped>
.price-calculation {
  padding: 20px;
  background-color: $color-white;

  &_row {
    display: flex;
    justify-content: space-between;

    &:not(:first-child) {
      margin-top: 5px;
    }
  }

  &_row.-total {
    border-top: 1px solid $color-table-border;
    margin-top: 15px;
    padding-top: 15px;
    font-weight: $weight-medium;
  }
}

@media (--sp) {
  .price-calculation {
    padding: 10px;
  }
}
</style>
