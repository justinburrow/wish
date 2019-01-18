<template lang="pug">
  div#app
    Navigation(ref="navbar" v-on:next="increment" v-on:previous="decrement" v-on:goto="goto()" :child-routes="allRoutes" :current-page="currentPage" :class="{show: showNav}" @goto="goto")
    #content
      router-view(v-on:next="increment" v-on:previous="decrement" :child-routes="allRoutes" :current-page="currentPage" :next-page="nextPage")
</template>

<script>
import Navigation from '@/components/Navigation'
export default {
  name: 'App',
  data () {
    return {
      currentPage: 0,
      nextPage: null,
      allRoutes: [],
      showNav: false,
      navHeight: 0
    }
  },
  components: {
    Navigation
  },
  methods: {
    increment: function () {
      this.currentPage++
    },
    decrement: function () {
      this.currentPage--
    },
    goto: function (goto) {
      this.currentPage = goto
    },
    nextTitle: function () {
      var self = this
      this.allRoutes.forEach(function (route) {
        if (route.meta.id === self.currentPage + 1) {
          self.nextPage = route.meta.prettyName
        }
      })
    },
    changePage: function (page) {
      var router = this.$router
      var self = this
      this.allRoutes.forEach(function (route) {
        if (page === 0) {
          router.push({name: 'Home'})
          self.showNav = false
        } else if (route.meta.id === page) {
          var targetPage = route.name
          router.push({name: targetPage})
          self.showNav = true
          self.nextTitle()
        }
      })
    }
  },
  watch: {
    currentPage: function (page) {
      this.changePage(page)
    }
  },
  created () {
    this.allRoutes = this.$router.options.routes[1].children
  },
  mounted () {
    this.changePage(this.currentPage)
  }
}
</script>

<style lang="sass">
  @import '~@/variables.scss'
  html
    box-sizing: border-box
    height: 100%

  *, *::before, *::after
    margin: 0
    padding: 0
    box-sizing: inherit

  body
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, sans-serif
    height: 100%

  h1,h2,h3,h4,h5,h6
    font-family: 'Oswald', sans-serif
  #app
    height: 100%

  #content
    height: 100%

  .fade-enter-active, .fade-leave-active
    transition: all .2s linear

  .fade-enter, .fade-leave-to
    opacity: 0

</style>
