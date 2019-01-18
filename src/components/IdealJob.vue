<template lang="pug">
  .page
    .container
      .triangle.bottom(:class="{active: isActive}" :style="{'border-left': scrW + 'px solid transparent'}")
      .triangle.top(:class="{active: isActive}" :style="{'border-right': scrW + 'px solid transparent'}")
    .content-container(:class="{active: fadeIn}")
      h1 What I'm Looking For
      .content
        div.pane
          h2 Yes, Please
          ul.yes
            li Great product that I believe in
            li Making design, concept, and experience a priority
            li Listening to the user / customer
            li A strong sense of brand identity / fidelity
            li Restless need to innovate
            li Healthy balance between data-driven and aesthetic concern
            li Mutual loyalty between team and company
        div.pane
          h2 No Thanks
          ul.no
            li "Just make it like Amazon"
            li "We'll just do UX at the end"
            li "Yeah, it might be ugly, but it converts 0.5% better, so let's make all the buttons zebra-striped"
            li "Bake all the text in the image - it's fine"
            li "Can't you just buy a theme?"
            li "Let's just outsource it - I'm sure it'll come back exactly how we wanted it."
      button.next-page(v-on:click="next")
        span.up-next Up Next:
        span {{ nextPage }}
</template>

<script>
export default {
  name: 'IdealJob',
  props: {
    nextPage: String
  },
  data: function () {
    return {
      isActive: false,
      fadeIn: false,
      staggerContent: false,
      scrW: 0,
      scrY: 0
    }
  },
  methods: {
    next: function () {
      this.$emit('next')
    },
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
    }, 100)
    setTimeout(function () {
      self.fadeIn = true
    }, 500)
    setTimeout(function () {
      self.staggerContent = true
    }, 500)
    window.addEventListener('resize', this.setTriangle)
  },
  destroyed: function () {
    window.removeEventListener('resize', this.setTriangle)
  }
}
</script>

<style scoped lang="sass">
  @import '~@/variables.scss'
  .page
    padding: 100px 30px 160px 30px
    @media (max-width: $mobile)
      padding: 70px 15px 100px 15px
      background: lighten($red, 20%)
  .container
    position: absolute
    top: 0
    left: 0
    z-index: 3
    width: 100vw
    height: 100vh
    @media (max-width: $mobile)
      display: none
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
      border-top: 100vh solid lighten($red, 20%)
      border-right: 100vh solid transparent
      transform: translateX(-100%)
      transition: .4s transform ease-out
    &.bottom
      z-index: 5
      border-bottom: 100vh solid lighten($white, 25%)
      border-left: 100vh solid transparent
      transform: translateX(100%)
      transition: .4s transform ease-out
  .content-container
    position: relative
    z-index: 10
    opacity: 0
    transition: opacity 0.5s ease
    &.active
      opacity: 1
  h1
    text-transform: uppercase
    font-weight: 300
    letter-spacing: 3px
    font-size: 28px
    line-height: 1
    color: lighten(black, 25%)
    margin-bottom: 40px
  .content
    display: flex
    justify-content: space-between
    flex-wrap: wrap
    .pane
      width: 47%
      background: rgba(255,255,255,.9)
      padding: 30px
      box-shadow: 0 3px 1px rgba(0,0,0,0.1)
      margin-bottom: 20px
      @media (max-width: $mobile)
        width: 100%
      h2
        text-transform: uppercase
        font-weight: 500
        letter-spacing: 1px
        color: lighten(black, 25%)
        border-bottom: 1px dotted rgba(0,0,0,0.3)
        margin-bottom: 20px
        padding-bottom: 20px
      ul
        list-style-type: none
        li
          margin-bottom: 20px
          font-size: 18px
          line-height: 1.4
          text-indent: -40px
          padding-left: 40px
          &:before
            content: ''
            display: inline-block
            height: 20px
            width: 20px
            padding-left: 40px
            top: 3px
            position: relative
        &.yes
          li:before
            background: url('~@/assets/happy.svg') no-repeat
            background-size: contain
        &.no
          li:before
            background: url('~@/assets/sad.svg') no-repeat
            background-size: contain
  button.next-page
    cursor: pointer
    outline: none
    padding: 15px 30px
    background: $lightblue
    color: $white
    margin-top: 60px
    text-transform: uppercase
    font: 500 18px 'Oswald', sans-serif
    letter-spacing: 2px
    border: 1px solid darken($lightblue, 4%)
    box-shadow: 0 2px 2px 2px rgba(0,0,0,0.1)
    transition: all 0.3s ease
    margin-left: auto
    margin-right: auto
    display: block
    &:hover
      background: darken($lightblue, 10%)
    span.up-next
      font-size: 12px
      font-weight: 300
      margin-right: 10px
      top: -2px
      position: relative
  @keyframes staggerIn
    from
      opacity: 0
      transform: scale(.8)
    to
      opacity: 1
      transform: scale(1)
</style>
