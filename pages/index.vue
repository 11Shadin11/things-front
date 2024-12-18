<template lang="pug">
.mt-3
  MainHero
  MainProductSection
</template>

<script>
export default {
  name: 'IndexPage',

  async created() {
    await this.$store.dispatch('fetchProducts')
  },
}
</script>
