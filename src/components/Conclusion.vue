<template lang="pug">
  .page
    .content
      img(src="~@/assets/giphy.gif")
      h2 Thanks for your time.
      p Resumes and portfolios are great, but I wanted to take the time to package up something that showcased all the elements that I think are important in the role that you are looking to staff for.  My hope is that this digital presentation was successful in demonstrating my ability to execute creative solutions.

      p The tech involved is Vue.js for the single page application handling and routing, and Webpack for packaging it all up.

      p My contact information and downloadable .pdf resume is included below.  Thanks again, and I look forward to hearing from you soon.

      p #[a.resume(href="http://www.justinburrow.com/static-files/resume-jburrow-2019.pdf" target="_blank") #[img.document(src="~@/assets/document.svg")]#[span.bold Download My Resume]]

      div.contact
        p
          | #[span.bold Justin Burrow]
          | 650 S. Spring St, Unit PH9
          | Los Angeles, CA 90014
          | tel: 562-714-3965
          | e: #[a(href="mailto:justinburrow@gmail.com") justinburrow@gmail.com]
</template>

<script>
export default {
  name: 'Conclusion'
}
</script>

<style scoped lang="sass">
  @import '~@/variables.scss'
  .page
    padding: 100px 30px 160px 30px
    height: auto
    @media (max-width: $mobile)
      padding: 70px 15px 100px 15px
  h2
    font-size: 80px
    font-weight: 500
    text-transform: uppercase
    letter-spacing: 2px
    padding-bottom: 30px
    line-height: 1
    margin-bottom: 20px
    color: $lightblue
    @media (max-width: $mobile)
      font-size: 55px
      line-height: 1.2
      padding-bottom: 15px
  .content
    text-align: center
    img
      margin-bottom: 40px
      @media (max-width: $mobile)
        max-width: 100%
      &.document
        width: 15px
        display: inline
        margin-bottom: 0
        margin-right: 15px
        position: relative
        top: 2px
    p
      font-size: 18px
      line-height: 1.6
      margin-bottom: 30px
      width: 70%
      margin: 0 auto 30px auto
      @media (max-width: $mobile)
        width: 100%
      .bold
        font-weight: bold
      a
        color: $orange
      img
        max-width: 100%
    .contact
      p
        white-space: pre
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
</style>
