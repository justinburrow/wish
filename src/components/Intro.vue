<template lang="pug">
  .page
    h1 Introduction
    .content
      .left
        h2 Hi, I'm Justin.
        p I've been working in digital design for over 15 years -  as a web designer, production artist, front end engineer, art director, acting product manager, and director of User Experience/User Interface Design.  My positions have spanned everything from 15 person t-shirt companies in the warehouse storage of a print shop, to 500 employee overgrown-startups-gone-corporate like The Honest Company.

        p I'd love to explore a possible fit with Wish where my digital design/UI, engineering, and UX expertise might find a fit.  I've mentored, executed, advocated, and championed world class interface designs for the last few years - everything from wireframing and user flows, to actually writing the interaction design CSS so the Tech team understands the expectations of fidelity.

        p I've put together some information about my skill set and what I'm looking for, as well as some case study examples of my work to hopefully provide you with enough information to get a sense of whether I'd be a great fit for this position.

      .right
        img(src="~@/assets/jb.jpg")
    button.next-page(v-on:click="next")
      span.up-next Up Next:
      span {{ nextPage }}
</template>

<script>
export default {
  name: 'Intro',
  methods: {
    next: function () {
      this.$emit('next')
    }
  },
  props: {
    nextPage: String
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
  h1
    text-transform: uppercase
    font-weight: 300
    letter-spacing: 3px
    font-size: 28px
    line-height: 1
    color: lighten(black, 25%)
    margin-bottom: 40px
  h2
    font-size: 80px
    font-weight: 500
    text-transform: uppercase
    letter-spacing: 2px
    border-bottom: 1px dotted lighten(black, 70%)
    padding-bottom: 30px
    line-height: 1
    margin-bottom: 30px
    color: lighten(black, 15%)
    @media (max-width: $mobile)
      text-align: center
      line-height: 1.2
      font-size: 53px
  .content
    display: flex
    @media (max-width: $mobile)
      flex-wrap: wrap
      flex-direction: column-reverse
    p
      font-size: 18px
      line-height: 1.6
      margin-bottom: 30px
      &.note
        font-size: 12px
        line-height: 1.4
        font-weight: bold
      a
        color: $red
    .left
      flex: 0 0 57%
      margin-right: 5%
      @media (max-width: $mobile)
        flex: 0 0 100%
    .right
      flex: 0 0 38%
      top: -60px
      position: relative
      @media (max-width: $mobile)
        flex: 0 0 100%
        top: 0
        margin-bottom: 30px
      img
        max-width: 100%
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
    @media (max-width: $mobile)
      margin-bottom: 50px
    &:hover
      background: darken($lightblue, 10%)
    span.up-next
      font-size: 12px
      font-weight: 300
      margin-right: 10px
      top: -2px
      position: relative
</style>
