<template lang="pug">
  .table_body
    .text-5xl.text-customColor.p-10.text-center Корзина
    div(v-if="carts.length")
      table(class="table-auto w-full text-left")
        thead
          tr.border-solid.border-2.border-customColor
            th.header.px-4.py-5.text-xl.text-customColor(v-for="header in headers" :key="header.key") {{ header.label }}
            th.px-4.py-5.text-xl.text-customColor

        tbody
          tr.border-solid.border-2.border-customColor(v-for="(item, index) in carts" :key="index" class="hover:bg-gray-50")
            td.px-4.py-5.text-xl.text-customColor(v-for="header in headers" :key="header.key") 
              div.product {{ getValue(item, header.key) }} 

            td.px-4.py-5.text-xl.text-customColor
              v-btn(icon @click="$store.commit('REMOVE_FROM_CART', item.id)")
                v-icon mdi-delete 
                
          tr.border-solid.border-2.border-customColor(class="hover:bg-gray-50")
            td.total.px-4.py-5.text-xl.text-customColor.font-bold Итог
            td.total.px-4.py-5.text-xl.text-customColor
            td.total.px-4.py-5.text-xl.text-customColor.font-bold {{ getTotal('qty') }}
            td.total.px-4.py-5.text-xl.text-customColor.font-bold {{ getTotal('sum') }}
          

      .w-full.flex.justify-end.mt-14
        v-btn.custom_button(color="#275742") Плачу за всё!  

    .text-2xl.text-customColor.py-10(v-else) Корзина пуста 😪
</template>

<script>
export default {
  name: "IndexPage",

  data() {
    return {
      headers: [
        { key: "title", label: "Товар" },
        { key: "price", label: "Цена, руб" },
        { key: "qty", label: "Кол-во" },
        { key: "sum", label: "Сумма, руб" },
      ],
    };
  },

  computed: {
    carts() {
      return this.$store.state.cart;
    },
  },

  methods: {
    getValue(row, key) {
      const value = key.split(".").reduce((obj, part) => obj && obj[part], row);
      return key === "price" || key === "sum" ? value + " ₽" : value
    },

    getTotal(type) {
      let count = 0;
      this.carts.forEach((el) => {
        count += type === 'qty' ? el?.qty : el?.sum;
      });

      return type === 'sum' ? count.toFixed(2) + ' ₽' : count;
    },
  },
};
</script>

<style scoped>
.table_body {
  min-height: calc(100vh - 250px);
}

.custom_button {
  color: #fff !important;
  padding: 25px 7rem !important;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10%;
}
@media only screen and (max-width: 600px) {
  .header, .product, .total {
    font-size: 15px
  }
}
</style>