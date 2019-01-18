<template lang="pug">
  .page
    h1 Case Study #3 - CPG Photo Shoot
    p.subtitle Art Direction
    .content
      .left
        img(src="~@/assets/gen-shadows.jpg" alt="Fun Photo Art Direction")
      .right
        p At Genexa, our team was incredibly small and I became the sole UX, digital design, and development resource.  As a result, I found myself thrown into art directing photo shoots.

        p We had plenty of front-on, white background images, and prior attempts to do lifestyle shoots had fallen a little flat, so I decided to try something a little more engaging with colors and shadows - with the thought that it would translate well for Social.

        p With the help of a great freelance photographer, we were able to create fun images of otherwise pedestrian CPG products in a one-day photoshoot, using very inexpensive materials.

        p While the brand itself was still needing a more intentional focus, these images helped provide a fun interim playfulness that seemed to work well on our social platforms.

    button.next-page(v-on:click="next")
      span.up-next Up Next:
      span {{ nextPage }}
</template>

<script>
export default {
  name: 'CaseStudy3',
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
