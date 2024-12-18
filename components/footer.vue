<template lang="pug">
div.flex.justify-between.items-center.bg-customColor.px-6.py-10(:class="{'flex-col': isMobile}")
  div.text-3xl.font-bold.text-white.cursor-pointer(@click="goToHome") Штуки
  
  div(:class="{'my-4' : isMobile}")
    span.btn.font-semibold.text-xl.text-white.cursor-pointer(@click="goToHome") Главная  
    span.btn.font-semibold.ml-8.text-xl.text-white.cursor-pointer(@click="goToHome") Магазин  
  
  v-btn(color="#fff" outlined :rounded="false") Напиши нам
</template>

<script>
import useScreenSize from '../composables/useScreenSize';
export default {
  mixins: [useScreenSize],

  name: "Footer",

  methods: {
    goToHome() {
      this.$router.push({path:'/'})
    }
  }
};
</script>

<style scoped>
.btn:hover {
  border-bottom: 2px solid #fff;
  transition: border 1s;
}
</style>
