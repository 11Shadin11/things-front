<template lang="pug">
div
  div.flex.justify-between.items-center.border-solid.border-2.border-customColor.px-6.py-5(v-if="!isMobile")
    div.text-3xl.font-bold.text-customColor.cursor-pointer(@click="$router.push({path:'/'})") Штуки
    
    .menu
      span.btn.font-semibold.text-xl.text-customColor.cursor-pointer(@click="$router.push({path:'/'})") Главная  
      span.btn.font-semibold.ml-8.text-xl.text-customColor.cursor-pointer(@click="goToProduct") Магазин  
    
    v-btn(icon @click="$router.push({path:'/cart'})")
      v-badge(v-if="basketCount > 0" :content="basketCount" color="#C95103" overlap)
        v-icon(color="#275742" large) mdi-cart
      v-icon( v-else color="#275742" large) mdi-cart
  
  div.flex.flex-col.justify-center.items-center(v-else)
    div.flex.justify-between.items-center.w-full.border-solid.border-2.border-customColor.px-6.py-5(class="h-[90px]")
      Burger(@updateShow="toggleMenu" :show="showMenu")
      div.text-3xl.font-bold.text-customColor.cursor-pointer(@click="$router.push({path:'/'})") Штуки
      
      v-btn(icon @click="$router.push({path:'/cart'})")
        v-badge(v-if="basketCount > 0" :content="basketCount" color="#C95103" overlap)
          v-icon(color="#275742" large) mdi-cart
        v-icon( v-else color="#275742" large) mdi-cart
    
    .menu_mobile(v-if="showMenu" :class="{'active_menu' : showMenu, 'not_active' : !showMenu}")
      span.btn.mt-6.font-bold.text-4xl.text-customColor(@click="goToHome") Главная  
      span.btn.mt-6.font-bold.text-4xl.text-customColor(@click="goToProduct") Магазин  
</template>

<script>
import useScreenSize from '../composables/useScreenSize';

export default {
  mixins: [useScreenSize],
  
  name: "Header",

  data() {
    return {
      showMenu: false
    };
  },

  computed: {
    basketCount() {
      return this.$store.state.cart?.length;
    },
  },

  methods: {
    goToProduct() {
      if (this.$route.path == "/") {
        const product = document.getElementById("product-section");
        if (product) product.scrollIntoView({ block: "start", behavior: "smooth" });
      } else {
        this.$router.push({ path: "/" });
      }
      this.showMenu = false
      document.documentElement.style.overflow = 'auto'
    },
    
    goToHome() {
      this.$router.push({ path: "/" });
      this.showMenu = false
      document.documentElement.style.overflow = 'auto'
    },

    toggleMenu() {
      this.showMenu = !this.showMenu;
      if(this.showMenu) document.documentElement.style.overflow = 'hidden'
      else document.documentElement.style.overflow = 'auto'
    }
  },
};
</script>

<style scoped>
.btn:hover {
  border-bottom: 2px solid #000;
  transition: border 1s;
}

.no__scroll {
  overflow: hidden !important;
}

.menu_mobile {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 80px;
  /* opacity:0 */
  /* position: absolute; */
  /* width: 100vw;
  height: 100vh; */
  /* top: 0; */
  /* top: 110px;
  left: 40px; */
}

.menu_mobile span {
  border-bottom: 1px solid #275742;
}

.active_menu {
  height: 100vh;
  opacity: 1;
  transition: height 0.5s ease-out, opacity 0.5s ease-out;
  /* margin-top: 110px;
  transform: translateY(0);
  opacity: 1;
  transition: transform 0.5s ease-out, opacity 0.5s ease-out; */
}

.not_active {
  /* transform: translateY(-100vh);
  opacity: 0;
  transition: transform 0.5s ease-out, opacity 0.5s ease-out; */
}
</style>
