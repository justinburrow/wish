<template lang="pug">
  .page
    h1 Case Study #5 - Branding
    p.subtitle Graphic Design / Branding / Marketing
    .content
      .left
        img(src="~@/assets/old_card-1.jpg" alt="old business card")
        img(src="~@/assets/just_luigis_logo-2x.png")
      .right
        p Though it's not my primary skill in the digital world, I can execute some branding work when needed.  In this case, my mom decided to follow her husband's dream of opening a pizza shop.  I mostly stayed out of it, knowing how it typically goes when you do creative work for family and friends.  To my surprise, they actually did fairly well in their small neighborhood, so I stopped by to take a look and see if I could give them any branding or marketing advice.

        p I was #[span.bold horrified] to see the collateral they were working with.  Not that I think there's anything wrong with a DIY mindset, but this was just borderline scary.  See first image.

        p Considering it was for my mother, I decided to do some pro bono work for them to see if my efforts in brand identity had any measurable lift for their business.

        p I created a new logo for them to start, which then informed the rest of their collateral: signage, interior design, website, menus.  The idea was to get to the core of what they wanted to sell: authentic, NY-style pizza, from a family-run (read: not corporate) business, slightly elevated.

        p The logomark uses colors from the Italian flag, surrounded by the outline of a hand-thrown crust.  The typography is vaguely New York, and the handdrawn feel looks to articulate the homemade proposition they wanted to convey.

        p While we never did get around to analyzing revenue metrics, their new brand identity and collateral certainly created a different feel - they soon after expanded patio space into the front of their restaurant, which led to more families coming in for dinner.  Prior, it had been a quick grab-a-slice lunch spot during the weekdays, and after, it seemed like much more of a neighborhood joint that people enjoyed spending time at.
    button.next-page(v-on:click="next")
      span.up-next Up Next:
      span {{ nextPage }}
</template>

<script>
export default {
  name: 'CaseStudy5',
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
    background: desaturate(lighten($orange, 20%), 10%)
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
    color: darken(saturate($red, 10%), 10%)
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
