<template lang="pug">
  #burger(:class="{ 'active': show }" @click.prevent="toggle")
    .burger-button
     .burger-bar.burger-bar--1
     .burger-bar.burger-bar--2
     .burger-bar.burger-bar--3
</template>

<script>
export default {
  name: "Burger",

  props: {
    show: false
  },

  methods: {
    toggle() {
      this.$emit('updateShow')
    }
  },
};
</script>

<style scoped>
.burger-button {
  position: relative;
  height: 46px;
  width: 46px;
  display: block;
  z-index: 999;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  pointer-events: all;
  transition: transform .6s cubic-bezier(.165, .84, .44, 1);
}

.burger-bar {
  background-color: #275742;
  position: absolute;
  top: 50%;
  right: 6px;
  left: 6px;
  height: 3px;
  width: auto;
  transition: transform .6s cubic-bezier(.165, .84, .44, 1), opacity .3s cubic-bezier(.165, .84, .44, 1), background-color .6s cubic-bezier(.165, .84, .44, 1);
}

.burger-bar--1 {
  -webkit-transform: translateY(-10px);
  transform: translateY(-10px);
}

.burger-bar--3 {
  -webkit-transform: translateY(10px);
  transform: translateY(10px);
}

#burger.active .burger-bar {
  background-color: #275742;
}

#burger.active .burger-bar--1 {
  transform: rotate(45deg)
}

#burger.active .burger-bar--2 {
  opacity: 0;
}

#burger.active .burger-bar--3 {
  transform: rotate(-45deg)
}
</style>
