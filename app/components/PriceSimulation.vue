<template lang="pug">
  .price-simulation
    .price-simulation_heading
      span.price-simulation_prefix 例えばこんな場合
      p.price-simulation_title(v-text="title")
    .price-simulation_body
      .price-simulation_grid
        .price-simulation_column
          PriceSimulationBlock(:title="tax.title")
            PriceCalculation(
              :rows="tax.price"
              :total-text="tax.totalText"
            )
        .price-simulation_plus
        .price-simulation_column
          PriceSimulationBlock(:title="bill.title")
            PriceCalculation(
              :rows="bill.price"
              :total-text="bill.totalText"
            )
        .price-simulation_total
          p 合計
          p.price-simulation_price {{ calcTotalPrice }}
      p.price-simulation_notice(v-text="notice")
</template>

<script>
import PriceSimulationBlock from '@/components/PriceSimulationBlock'
import PriceCalculation from '@/components/PriceCalculation'

export default {
  components: {
    PriceSimulationBlock,
    PriceCalculation,
  },

  props: {
    title: {
      type: String,
      default: null,
    },

    tax: {
      type: Object,
      default: () => {},
    },

    bill: {
      type: Object,
      default: () => {},
    },

    notice: {
      type: String,
      default: null,
    },
  },

  computed: {
    calcTotalPrice() {
      const totalTaxPrice = this.calcTotal(this.tax.price)
      const totalBillPrice = this.calcTotal(this.bill.price)

      return this.toPriceString(totalTaxPrice + totalBillPrice)
    },
  },

  methods: {
    toPriceString(value) {
      const price = `${Number(value).toLocaleString()}`
      return price
    },

    calcTotal(price) {
      return price.map((p) => p.value).reduce((acc, value) => acc + value)
    },
  },
}
</script>

<style lang="scss" scoped>
.price-simulation {
  display: flex;

  &_heading {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 245px;
    max-width: 245px;
    font-family: $font-family-serif;
  }

  &_prefix {
    display: inline-block;
    color: $color-magenta;
    font-weight: $weight-bold;
    margin-bottom: 20px;

    &::after {
      content: '';
      display: block;
      width: 150px;
      height: 2px;
      background-color: $color-magenta;
      margin-top: 14px;
    }
  }

  &_title {
    font-size: 2rem;
    font-weight: $weight-bold;
    line-height: 1.75;
    @include textTracking(50);
    white-space: pre-wrap;
  }

  &_body {
    flex: none;
    width: calc(100% - 245px);
    padding-left: 30px;
  }

  &_grid {
    display: grid;
    grid-template-columns: 1fr 60px 1fr;
    grid-template-rows: auto auto;
    @include gridAreaChildren(4, 'p');
    grid-template-areas:
      'p1 p2 p3'
      'p4 p4 p4';
  }

  &_plus {
    position: relative;

    &::before,
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      content: '';
      display: block;
      width: 30px;
      height: 1px;
      background-color: $color-magenta;
    }

    &::after {
      transform: rotate(90deg);
    }
  }

  &_total {
    margin-top: 20px;
    padding: 5px 20px;
    background-color: $color-white;
    font-weight: $weight-medium;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  &_price {
    font-size: 2rem;
    color: $color-magenta;

    &::after {
      content: '円';
      font-size: 1.5rem;
    }
  }

  &_notice {
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
    font-size: 1.3rem;
    white-space: pre-wrap;
    text-align: right;

    &::before {
      content: '※';
      margin-right: 0.5em;
    }
  }
}

@media (--sp) {
  .price-simulation {
    display: block;

    &_heading {
      width: 100%;
      max-width: initial;
      margin-bottom: 25px;
    }

    &_prefix {
      font-size: 1.3rem;

      &::after {
        width: 75px;
      }
    }

    &_title {
      font-size: 1.7rem;
    }

    &_body {
      width: 100%;
      padding-left: 0;
    }

    &_grid {
      display: block;
    }

    &_plus {
      height: 60px;
    }

    &_total {
      margin-top: 10px;
      padding-left: 10px;
      padding-right: 10px;
    }

    &_notice {
      display: block;
      text-align: left;
    }
  }
}
</style>
