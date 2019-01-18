import Vue from 'vue'
import Section from '@/components/Section'
import Router from 'vue-router'
import Home from '@/components/Home'
import Intro from '@/components/Intro'
import SkillSet from '@/components/SkillSet'
import IdealJob from '@/components/IdealJob'
import Conclusion from '@/components/Conclusion'
import CaseStudy1 from '@/components/CaseStudy1'
import CaseStudy2 from '@/components/CaseStudy2'
import CaseStudy3 from '@/components/CaseStudy3'
import CaseStudy4 from '@/components/CaseStudy4'
import CaseStudy5 from '@/components/CaseStudy5'
import CaseStudy6 from '@/components/CaseStudy6'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/page',
      name: 'Section',
      component: Section,
      children: [
        {
          path: '/page/intro',
          name: 'Intro',
          component: Intro,
          meta: { id: 1, prettyName: 'Intro' }
        },
        {
          path: '/page/casestudy1',
          name: 'CaseStudy1',
          component: CaseStudy1,
          meta: { id: 2, prettyName: 'Case Study #1' }
        },
        {
          path: '/page/skillset',
          name: 'SkillSet',
          component: SkillSet,
          meta: { id: 3, prettyName: 'My Skill Set' }
        },
        {
          path: '/page/casestudy2',
          name: 'CaseStudy2',
          component: CaseStudy2,
          meta: { id: 4, prettyName: 'Case Study #2' }
        },
        {
          path: '/page/casestudy3',
          name: 'CaseStudy3',
          component: CaseStudy3,
          meta: { id: 5, prettyName: 'Case Study #3' }
        },
        {
          path: '/page/casestudy4',
          name: 'CaseStudy4',
          component: CaseStudy4,
          meta: { id: 6, prettyName: 'Case Study #4' }
        },
        {
          path: '/page/casestudy5',
          name: 'CaseStudy5',
          component: CaseStudy5,
          meta: { id: 7, prettyName: 'Case Study #5' }
        },
        {
          path: '/page/casestudy6',
          name: 'CaseStudy6',
          component: CaseStudy6,
          meta: { id: 8, prettyName: 'Case Study #6' }
        },
        {
          path: '/page/idealposition',
          name: 'IdealJob',
          component: IdealJob,
          meta: { id: 9, prettyName: 'My Ideal Position' }
        },
        {
          path: '/page/conclusion',
          name: 'Conclusion',
          component: Conclusion,
          meta: { id: 10, prettyName: 'Conclusion' }
        }
      ]
    }
  ]
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router
