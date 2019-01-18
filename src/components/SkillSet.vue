<template lang="pug">
  .page
    .container
      .triangle.bottom(:class="{active: isActive}" :style="{'border-right': scrW + 'px solid transparent'}")
      .triangle.top(:class="{active: isActive}" :style="{'border-left': scrW + 'px solid transparent'}")
    .content-container(:class="{active: fadeIn}")
      h1 My Skill Set
      .content(:class="{active: staggerContent}")
        div
          h2 UX
          ul
            li Wireframing
            li Rapid Prototyping & AB Testing
            li User Research
            li Interaction Design
        div
          h2 UI
          ul
            li Designing for Responsive / Digital
            li CSS UI Design
            li Grid Systems
            li Interactive State Design
        div
          h2 Engineering
          ul
            li HTML / CSS / JS
            li SPA Frameworks / Headless
            li SEO Best Practices
            li Wordpress
        div
          h2 Product Management
          ul
            li Writing Requirements
            li Agile / Sprint Cycles
            li Evaluating Business Needs
            li Strategic Problem Solving
        div
          h2 Data Analysis
          ul
            li Google Analytics
            li Optimizely / Google Optimize
            li Qualitative vs. Quantitative
            li Excel Data Manipulation
        div
          h2 Communication
          ul
            li Persuasive Writing
            li Design / UX Advocacy
            li Cross-Department Translating
            li Pitch Presentation
      button.next-page(v-on:click="next")
        span.up-next Up Next:
        span {{ nextPage }}
</template>

<script>
export default {
  name: 'SkillSet',
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
    height: auto
    @media (max-width: $mobile)
      padding: 70px 15px 100px 15px
      background: lighten($orange, 20%)
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
      border-top: 100vh solid lighten($orange, 20%)
      border-left: 100vh solid transparent
      transform: translateX(100%)
      transition: .4s transform ease-out
    &.bottom
      z-index: 5
      border-bottom: 100vh solid lighten($red, 25%)
      border-right: 100vh solid transparent
      transform: translateX(-100%)
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
    div
      width: 30%
      padding: 30px
      background: rgba(255,255,255,.9)
      margin-bottom: 60px
      opacity: 0
      box-shadow: 0 3px 3px rgba(0,0,0,0.1)
      @media (max-width: $mobile)
        width: 100%
        margin-bottom: 30px
    ul
      list-style-type: none
      li
        margin-bottom: 10px
    &.active
      div
        animation-name: staggerIn
        animation-fill-mode: forwards
        animation-duration: .3s
      div:nth-child(2)
        animation-delay: .5s
      div:nth-child(3)
        animation-delay: 1.0s
      div:nth-child(4)
        animation-delay: 1.5s
      div:nth-child(5)
        animation-delay: 2s
      div:nth-child(6)
        animation-delay: 2.5s
      h2
        font-size: 18px
        text-transform: uppercase
        letter-spacing: 1.5px
        border-bottom: 1px dotted rgba(0,0,0,0.4)
        padding-bottom: 20px
        margin-bottom: 20px
        line-height: 1
    h3
      color: black
      font-weight: 300
      font-size: 18px
      letter-spacing: 3px
      line-height: 1
      margin-bottom: 10px
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
