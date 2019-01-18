<template lang="pug">
  #section
    router-view(v-on:next="next" :next-page="nextPage")
</template>

<script>
export default {
  name: 'Section',
  methods: {
    next: function () {
      this.$emit('next')
    }
  },
  props: {
    nextPage: String
  },
  mounted () {
  }
}
</script>

<style scoped lang="sass">
  @import '~@/variables.scss'
  #section
    height: 100%
</style>
