<template lang="pug">
  #home
    .container
      .triangle.bottom(:class="{active: isActive}" :style="{'border-left': scrW + 'px solid transparent'}")
      .triangle.top(:class="{active: isActive}" :style="{'border-right': scrW + 'px solid transparent'}")
    .top-content(:class="{active: fadeIn}")
      .aligner
        .aligner-item
          img(src="~@/assets/wish-logo.png")
          <p>+</p>
          h1 Justin Burrow
          p.subtitle as Product Designer
          button(v-on:click="start") Let's Explore This
</template>

<script>
export default {
  name: 'Home',
  data: function () {
    return {
      isActive: false,
      fadeIn: false,
      scrW: 0,
      scrY: 0
    }
  },
  methods: {
    start: function () {
      this.$emit('next')
    },
    setTriangle: function () {
      this.scrW = window.innerWidth
      this.scrY = document.body.scrollTop
    }
  },
  created: function () {
    this.setTriangle()
    var self = this
    setTimeout(function () {
      self.isActive = true
    }, 500)
    setTimeout(function () {
      self.fadeIn = true
    }, 1500)
    window.addEventListener('resize', this.setTriangle)
  },
  destroyed: function () {
    window.removeEventListener('resize', this.setTriangle)
  }
}
</script>

<style scoped lang="sass">
  @import '~@/variables.scss'
  #home
    min-height: 100vh
    min-width: 100vw
  .container
    position: absolute
    top: 0
    left: 0
    z-index: 3
    width: 100vw
    height: 100vh
  .triangle
    width: 0
    height: 0
    opacity: 1
    position: absolute
    &.active
      transform: translateX(0) !important
      opacity: 1 !important
    &.top
      z-index: 5
      border-top: 100vh solid $white
      border-right: 100vh solid transparent
      transform: translateX(-100%)
      transition: .4s transform ease-out
    &.bottom
      z-index: 5
      border-bottom: 100vh solid lighten($darkblue, 40%)
      border-left: 100vh solid transparent
      transform: translateX(100%)
      transition: .4s transform ease-out
  .top-content
    opacity: 0
    transition: opacity .6s ease
    position: relative
    z-index: 10
    min-height: 100vh
    &.active
      opacity: 1
  .aligner
    display: flex
    align-items: center
    justify-content: center
    min-height: 100vh
  .aligner-item
    max-width: 1600px
    text-align: center
    @media (max-width: $mobile)
      img
        max-width: 80%
  p
    font: 300 120px 'Oswald', sans-serif
    text-transform: uppercase
    line-height: 1.2
    letter-spacing: 8px
    color: lighten($darkblue, 20%)
  h1
    color: lighten(black, 25%)
    text-transform: uppercase
    font-weight: 500
    letter-spacing: 3px
    font-size: 32px
    text-shadow: 2px 2px 0 rgba(255,255,255,0.5)
  .subtitle
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, sans-serif
    font-size: 16px
    color: black
    letter-spacing: 1px
    text-transform: none
    line-height: 2
    font-weight: bold
  button
    cursor: pointer
    outline: none
    padding: 15px 30px
    background: lighten($lightblue, 5%)
    color: $white
    margin-top: 8vh
    text-transform: uppercase
    font: 500 18px 'Oswald', sans-serif
    letter-spacing: 2px
    border: 1px solid darken($lightblue, 4%)
    box-shadow: 0 2px 2px 2px rgba(0,0,0,0.1)
    transition: all 0.3s ease
    &:hover
      background: darken($lightblue, 10%)

</style>
