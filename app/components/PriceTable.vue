<template lang="pug">
  table.price-table
    thead.price-table_thead
      tr.price-table_row
        th.price-table_head.-col-1 手続内容
        th.price-table_head.-col-2 登録免許税等
        th.price-table_head.-col-3 手数料（税別）
    tbody.price-table_tbody
      tr.price-table_row(v-for="row in table")
        th.price-table_th {{ row.title }}
        td.price-table_td(data-sp-title="登録免許税等") {{ row.tax }}
        td.price-table_td(data-sp-title="手数料（税別）") {{ row.bill }}
</template>

<script>
export default {
  props: {
    table: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
$table-cols: 275px, 392px, 333px;

.price-table {
  width: 100%;
  border: 1px solid $color-table-border;

  &_head {
    border: 1px solid $color-table-border;
    font-weight: $weight-regular;
    padding: 15px;
    color: $color-white;
    background-color: $color-black;
  }

  @each $cols in $table-cols {
    $n: index($table-cols, $cols);
    $w: calcRelativeWith($cols, $content-width);

    &_head.-col-#{$n} {
      width: $w;
    }
  }

  &_th,
  &_td {
    text-align: left;
    padding: 15px;
    border: 1px solid $color-table-border;
    font-weight: $weight-regular;
    background-color: $color-white;
  }
}

@media (--sp) {
  .price-table {
    display: block;
    border: none;

    &_thead {
      display: none;
    }

    &_row,
    &_tbody,
    &_th {
      width: 100%;
      display: block;
    }

    &_row:not(:first-child) {
      margin-top: 10px;
    }

    &_th {
      font-size: 1.4rem;
      padding: 10px;
      color: $color-white;
      background-color: $color-black;
    }

    &_td {
      font-size: 1.4rem;
      display: flex;
      align-items: center;
      width: 100%;
      padding: 10px;
      border-top: none;

      &::before {
        flex: none;
        content: attr(data-sp-title);
        font-size: 1.1rem;
        font-weight: $weight-bold;
        padding-right: 1em;
      }
    }
  }
}
</style>
