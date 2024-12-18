<template lang="pug">
  v-dialog(v-model="detailsValue" max-width="800px" persistent)
    v-card.overflow-auto.h-full
      v-card-title( class="headline bg-customColor border") 
        .flex.justify-between.items-center
          .text-2xl.py-5.px-2.text-white {{ item.title }}
          v-btn(icon @click="close")
            v-icon mdi-close
      v-card-text
        .flex.mt-10(:class="{'flex-col' : isMobile, '.ml-10' : !isMobile}")
          .product-img(:class="{'w-1/2' : !isMobile, 'w-full' : isMobile }")
            //- v-img(:src="item.images[0]" style="transform: scale(.8)")
            v-img(:src="item.image" style="transform: scale(.8)")
          .flex.flex-col(:class="{'w-1/2' : !isMobile, 'w-full' : isMobile}")
            .flex.flex-col
              .mb-3
                .text-xl.font-medium Описание
                .text-2xl.font-medium.text-customColor {{item.description}}
              .mb-3
                .text-xl.font-medium Категория
                .text-2xl.font-medium.text-customColor {{item.category}}
              .mb-3
                .text-xl.font-medium Рейтинг
                //- .text-2xl.font-medium.text-customColor {{item.rating}}
                .text-2xl.font-medium.text-customColor {{item.rating.rate}}
            .flex.flex-col.mt-20
              .text-4xl.text-customColor.font-bold.mb-6 {{item.price + ' руб.'}}
              v-btn(outlined color="#275742" @click="$store.commit('ADD_TO_CART', item)") Купить
</template>

<script>
import useScreenSize from '../../../composables/useScreenSize';

export default {
  mixins: [useScreenSize],

  props: {
    value: null,
    item: null
  },

  computed: {
    detailsValue: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('update:modal', newValue);
      }
    },
  },

  methods: {
    close() {
      this.$emit("close");
    },
  }
};
</script>

<style scoped>
::v-deep .v-card {
  border: none !important;
}

.v-btn {
  background: #275742;
  color: #fff !important;
}

.product-img {
  /* width: 50%;
  height: 50%; */
  overflow: hidden;
}
</style>
