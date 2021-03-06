<template lang="pug">
  .page
    h1 Case Study #1 - Consultant Attribution vs. Direct Checkout
    p.subtitle UX / UI / Front End / Product Management
    .content
      .left
        .video-container
          iframe(src="https://www.youtube.com/embed/Nava5AoQcfM" frameborder="0" allowfullscreen="")
        p
          a(href="http://www.justinburrow.com/static-files/checkout-v2-attribution.pdf" target="_blank") Download Attribution interactive states and flows in .pdf format
        p
          a(href="http://www.justinburrow.com/static-files/login_attribution_checkout.pdf" target="_blank") Download user flowchart in .pdf format
      .right
        p At Beautycounter, the concept of direct sales via Consultants meshing with organic eCommerce presented numerous challenges, specifically at the time of Checkout - if you had a Consultant, but weren't shopping on their direct link, how would they get the attribution for the order?  Likewise, if you didn't like the idea of a Consultant, would you be turned off by seeing such verbiage just before you enter your payment information?

        p We went through many, many sets of wireframes and directions before landing in what is shown in the video to the left.  This is actually a live grab from the current website.

        p I've also attached my wireframes and flowchart that will hopefully show the level of user flows, states, and considerations that had to be made in order to launch this feature in a way that appeased all stakeholders.

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
    background: $red
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
    color: $white
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
      &.note
        font-size: 12px
        line-height: 1.4
    .right
      flex: 0 0 57%
      margin-left: 5%
      @media (max-width: $mobile)
        flex: 0 0 100%
        margin-left: 0
    .video-container
      position: relative
      padding-bottom: 56.25%
      height: 0
      overflow: hidden
      margin-bottom: 60px
      iframe
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
    .left
      flex: 0 0 38%
      position: relative
      @media (max-width: $mobile)
        flex: 0 0 100%
        margin-bottom: 30px
      img
        max-width: 100%
  button.next-page
    cursor: pointer
    outline: none
    padding: 15px 30px
    background: $lightblue
    color: $white
    margin-top: 30px
    text-transform: uppercase
    font: 500 18px 'Oswald', sans-serif
    letter-spacing: 2px
    border: 3px solid $white
    box-shadow: 0 2px 2px 2px rgba(0,0,0,0.1)
    transition: all 0.3s ease
    margin-left: auto
    margin-right: auto
    @media (max-width: $mobile)
      margin-bottom: 50px
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
