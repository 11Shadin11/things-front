<template lang="pug">
  .product-item(@click="openDetails(item)")
    .product-img
      //- img(:src="item.images[0]")
      img(:src="item.image")
    .product-list
      .text-2xl.text-customColor.py-4 {{ item.title }}
      v-btn(outlined color="#275742" block @click.stop="addToCart") Купить
</template>

<script>
export default {
  name: "Card",

  props: {
    item: null,
  },

  data() {
    return {};
  },

  computed: {
    isAdded() {
      return this.$store.state.cart.find((el) => el.id == this.item.id);
    },
  },

  methods: {
    addToCart() {
      // if (this.isAdded) {
      //   this.$router.push({ path: "/cart" });
      // } else {
      //   this.$store.commit("ADD_TO_CART", this.item);
      // }
      this.$store.commit("ADD_TO_CART", this.item);
    },

    openDetails(item) {
      this.$emit("isDialog", item);
    },
  },
};
</script>

<style scoped>
.product-item {
  width: 380px;
  margin: 20px;
  padding: 10px 10px 5px 10px;
  overflow: hidden;
  transition: 0.4s linear;
  display: flex;
  flex-direction: column;
}
.product-img {
  width: 380px;
  height: 380px;
  overflow: hidden;
  transition: 0.2s ease-in-out;
}
.product-img:hover {
  transform: scale(1.1);
}

.v-btn:hover {
  background: #275742;
  color: #fff !important;
}
</style>
