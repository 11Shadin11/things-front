<template lang="pug">
#product-section
  .mb-24(v-if="isLoaded")
    .text-5xl.py-7.text-center.text-customColor Новинки
    div( class="w-full flex flex-wrap justify-center items-center gap-[20px] mt-[40px]")
      MainProductCard(v-for="i in products" :key="i.id" :item="i" @isDialog="showDetails")
  div(v-else class="flex justify-center my-5")
    v-progress-circular(indeterminate color="#275742" :size="70")
  
  MainProductDetailsModal(v-if="isDetails" v-model="isDetails" :item="selectedProduct" @close="isDetails = false")
</template>

<script>
export default {
  name: "Section",

  data() {
    return {
      isDetails: false,
      selectedProduct: null
    };
  },

  computed: {
    isLoaded() {
      return this.$store.state.isLoaded
    },

    products() {
      return this.$store.state.products
    },
  },

  methods: {
    showDetails(item) {
      this.selectedProduct = item
      this.isDetails = true
    }
  }
};
</script>

<style scoped>
::v-deep .v-dialog, .v-sheet.v-card {
  border-radius: 0% !important;
}
</style>
