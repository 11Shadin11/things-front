<template lang="pug">
v-app
  div(class="py-[24px] px-[40px]")
    Header
    nuxt
    Footer
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
    }
  }
}
</script>

<style>
.v-btn {
  border-radius: 2px !important;
}
</style>
