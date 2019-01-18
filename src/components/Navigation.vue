<template lang="pug">
  #Navbar
    button(v-on:click="previous") PREVIOUS
    ul#navdots
      li.dot(v-for="page in childRoutes" v-on:click="goto(page.meta.id)" v-bind:class=" { current: page.meta.id === currentPage}")
        <a>{{ page.meta.prettyName }}</a>
    button(v-on:click="next" :class="{hidden: currentPage === 7}") NEXT
</template>

<script>
export default {
  name: 'Navigation',
  props: ['childRoutes', 'currentPage'],
  methods: {
    next: function () {
      this.$emit('next')
    },
    previous: function () {
      this.$emit('previous')
    },
    goto: function (pageID) {
      this.$emit('goto', pageID)
    }
  }
}
</script>

<style scoped lang="sass">
  @import '~@/variables.scss'
  #Navbar
    background: $darkblue
    position: absolute
    top: 0
    width: 100%
    color: white
    padding: 10px 30px
    display: flex
    justify-content: space-between
    align-items: center
    transform: translateY(-150%)
    transition: transform 0.3s ease
    opacity: 1 !important
    z-index: 15
    flex-wrap: wrap
    &.show
      transform: translateY(0)
    @media (max-width: $mobile)
      position: fixed
      padding: 10px 15px
  #navdots
    position: relative
    display: inline-block
    margin: 0
    padding: 0
    list-style: none
    width: 50%
    display: flex
    justify-content: space-between
    @media (max-width: $mobile)
      width: 100%
    .dot
      position: relative
      display: block
      float: left
      margin: 0 16px
      width: 16px
      height: 16px
      cursor: pointer
      border-radius: 50%
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0)
      -webkit-transition: box-shadow 0.3s ease
      transition: box-shadow 0.3s ease
      @media (max-width: $mobile)
        width: 8px
        height: 8px
        margin: 0 13px
      p
        font-size: 10px
        text-transform: uppercase
        position: absolute
        bottom: 0
      a
        top: 0
        left: 0
        width: 100%
        height: 100%
        outline: none
        border-radius: 50%
        text-indent: -999em
        cursor: pointer
        position: absolute
        background-color: rgba(255, 255, 255, 0.4)
        -webkit-transition: background-color 0.3s ease, -webkit-transform 0.3s ease
        transition: background-color 0.3s ease, transform 0.3s ease
        &:focus, &:hover
          background-color: $lightblue
      &.current
        box-shadow: 0 0 0 2px $white
        a
          background-color: $white
          -webkit-transform: scale(0.4)
          transform: scale(0.4)
  button
    cursor: pointer
    background: $lightblue
    color: $white
    outline: none
    padding: 5px 10px
    border: 1px solid rgba(255,255,255,0.1)
    font: 500 12px 'Oswald', sans-serif
    letter-spacing: 2px
    transition: all 0.5s ease
    @media (max-width: $mobile)
      display: none
    &:hover
      background: $white
      color: $darkblue
    &.hidden
      visibility: hidden
</style>
