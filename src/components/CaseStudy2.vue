<template lang="pug">
  .page
    h1 Case Study #2 - Inline Quick View
    p.subtitle UX / UI / Product Management / Interaction Design
    .content
      .left
        p During a period of roadmapping tech strategy at Beautycounter, I realized we were looking at two years of work that didn't include one bit of a facelift to our current site - which I had found less than stellar from the get-go.  I find often that it's better to show rather than tell when you're trying to articulate the importance of a particular initiative, so I put together a small team to begin working on a redesign proof-of-concept, to show how much more elevated of a site we could have if we invested the resources.

        p As part of this, I considered the tech stack we were on, and decided to try to imagine an eCommerce flow as a single page app - no page reloads, no site slowness.  While we were wireframing this, I realized that it made the concept of a Category page as a means to get to a Product page somewhat irrelevant.  Part of this came with how we designed the Quick View experience.

        p This isn't a new feature by any means - usually it's a modal window that pops when you click "more details" from a category landing page.  But we wanted to do something that had a more sophisticated interaction - even if subtle - to further push the idea of the sophistication of the brand.

        p I've also included a .pdf of user personas we created to vet all design work against.  This was work that I collaborated with my Jr. UX Designer/Researcher on.  In lieu of actual data available, we worked through common consumer and user archetypes to at least establish a baseline.
      .right
        .video-container
          iframe(src="https://www.youtube.com/embed/2z-GexHyyl0?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen)
        p
          a(href="http://www.justinburrow.com/static-files/bc-user-personas.pdf" target="_blank") Download User Personas in .pdf format
    button.next-page(v-on:click="next")
      span.up-next Up Next:
      span {{ nextPage }}
</template>

<script>
export default {
  name: 'CaseStudy2',
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
    background: linear-gradient(135deg, $white 25%, transparent 25%) -50px 0, linear-gradient(225deg, $white 25%, transparent 25%) -50px 0, linear-gradient(315deg, $white 25%, transparent 25%), linear-gradient(45deg, $white 25%, transparent 25%)
    background-size: 100px 100px
    background-color: desaturate(lighten($lightblue, 50%), 40%)
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
    color: saturate(lighten($orange, 15%), 30%)
    margin-bottom: 15px
  p.subtitle
    text-transform: uppercase
    padding: 5px 10px
    background: white
    color: $darkblue
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
      flex: 0 0 38%
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
      flex: 0 0 57%
      position: relative
      @media (max-width: $mobile)
        flex: 0 0 100%
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
    border: 3px solid $white
    box-shadow: 0 2px 2px 2px rgba(0,0,0,0.05)
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
