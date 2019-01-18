<template lang="pug">
  .page
    h1 Case Study #4 - Checkout
    p.subtitle UX / Product Management
    .content
      .left
        .video-container
          iframe(src="http://www.youtube.com/embed/1Hj0cC9FaJA?rel=0" frameborder="0" allowfullscreen="")
        a(href="http://www.justinburrow.com/static-files/magento_checkout_UX.pdf" target="_blank")
          img(src="~@/assets/checkout-wireframe-thumb.gif" alt="Checkout Wireframe Thumbnail")
      .right
        p During my time at LD Products, I rose through the ranks from a production artist / web designer to being the acting on-site art director, Sr. Front End Engineer, as well as the sole User Experience advocate.  The design process was usually something like this: the CEO would have an idea he felt was worth following, or hear a loud enough complaint.  He'd then task the Creative Director with solving it, and either the Creative Director or the design team would immediately open Photoshop.  No wireframes, user research, qualitative/quantitative data - just straight into design.

        p When we realized we were leaving a lot of money on the table with a bad checkout experience, I asked to champion it with what I saw as a way to better use data to inform our decisions.  I consulted Baymard research on eCommerce checkout metrics, wireframed a few options, thought through the interaction design, and landed on this.  We went from a "One Page Checkout" (which took far longer than necessary to complete), to a multi-step - but still one "page" - checkout concept, where the user only focused on the immediately relevant chunks of information to complete the task.

        p To the left, I've attached a video comparing the two experiences, as well as a downloadable PDF deck of my interactive UX wireframes.

        p.note Note: The video displays an extremely slow speed - this video was captured before the new checkout launched, running on a local machine - void of all caching and other speed enhancements.  Not reflective of a production environment.
    button.next-page(v-on:click="next")
      span.up-next Up Next:
      span {{ nextPage }}
</template>

<script>
export default {
  name: 'CaseStudy4',
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
