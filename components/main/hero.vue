<template lang="pug">
.w-full.h-full.bg-customColor.px-10.mb-16
  .flex.justify-between.items-end
    .py-10
      div
        .text-white(:class="titleClass") Смотри внимательно
        .text-white(:class="titleClass") сколько всего у нас есть
      div(class="mt-[50%]")
        .text-white(:class="shopClass") Магазин очень 
        .text-white(:class="shopClass") нужных штуковин
    div(v-if="!isMobile")
      v-img(src="img/hero.svg")
</template>

<script>
import useScreenSize from "../../composables/useScreenSize";
export default {
  mixins: [useScreenSize],
  name: "Hero",

  computed: {
    titleClass() {
      return this.isMobile ? "text-xl" : "text-2xl";
    },
    shopClass() {
      return this.isMobile ? "text-5xl" : "text-7xl";
    },
  },
};
</script>
