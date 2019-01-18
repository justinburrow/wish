<template lang="pug">
  .page
    h1 Case Study #6 - Shopify Mobile Redesign
    p.subtitle UX / UI / Front End Engineering
    .content
      .left
        p
          a(href="http://www.justinburrow.com/static-files/before-mobile.jpg" target="_blank") "Before" Mobile Layout
        p
          a(href="http://www.justinburrow.com/static-files/homepage-v3.jpg" target="_blank") Redesigned Mobile Layout
      .right
        p When I started at Genexa, the design direction of the site had been touched by many hands without an overarching strategy.  As our traffic was primarily mobile, I redesigned the overall layout and look and feel with elements that presented the information in ways that were more easily digestible.

        p The first order of business was to put emphasis on the brand and product, and allow for the user to take a deeper dive into more information as they chose, while the primary selling points were at a glance.

        p Consolidating a swipable slider to show the breadth of the product catalog was also paramount, rather than having it split across various vertical sections of the scrollable area.

        p Most importantly, the top level product categories were brought up to a sticky header, allowing users to discover the range of products that Genexa carried.  These screenshots show a before and after; the "after" is still in use today.

    button.next-page(v-on:click="next")
      span.up-next Up Next:
      span {{ nextPage }}
</template>

<script>
export default {
  name: 'CaseStudy1',
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
    min-height: 100vh
    background: desaturate(lighten($lightgreen, 20%), 10%)
    padding: 100px 30px 160px 30px
    @media (max-width: $mobile)
      padding: 70px 15px 100px 15px
      height: auto
  h1
    text-transform: uppercase
    font-weight: 300
    letter-spacing: 3px
    font-size: 28px
    line-height: 1
    color: darken(saturate($lightblue, 10%), 10%)
    margin-bottom: 15px
  p.subtitle
    text-transform: uppercase
    padding: 5px 10px
    background: black
    color: white
    margin-bottom: 40px
    display: inline-block
    font: 300 14px 'Oswald', sans-serif
    letter-spacing: 1px
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
  .content
    background: white
    padding: 50px 30px
    display: flex
    @media (max-width: $mobile)
      flex-wrap: wrap
      flex-direction: column-reverse
      padding: 30px
    p
      font-size: 18px
      line-height: 1.6
      margin-bottom: 30px
      @media (max-width: $mobile)
        font-size: 14px
      .bold
        font-weight: bold
      &.note
        font-size: 12px
        line-height: 1.4
    .right
      flex: 0 0 57%
      margin-left: 5%
      @media (max-width: $mobile)
        flex: 0 0 100%
        margin-left: 0
    .left
      flex: 0 0 38%
      position: relative
      text-align: center
      @media (max-width: $mobile)
        flex: 0 0 100%
        padding-top: 60px
      img
        max-width: 100%
        &:first-child
          margin-bottom: 50px
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
    border: 3px solid $white
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
</style>
