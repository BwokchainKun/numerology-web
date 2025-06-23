import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import NumerologyCalculator from '../components/NumerologyCalculator.vue'
import ZodiacAndAstrology from '../components/ZodiacAndAstrology.vue'
import Aries from '../zodiac/Aries.vue'
import Taurus from '../zodiac/Taurus.vue'
import Gemini from '../zodiac/Gemini.vue'
import Cancer from '../zodiac/Cancer.vue'
import Leo from '../zodiac/Leo.vue'
import Virgo from '../zodiac/Virgo.vue'
import Libra from '../zodiac/Libra.vue'
import Scorpio from '../zodiac/Scorpio.vue'
import Sagittarius from '../zodiac/Sagittarius.vue'
import Capricorn from '../zodiac/Capricorn.vue'
import Aquarius from '../zodiac/Aquarius.vue'
import Pisces from '../zodiac/Pisces.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    meta: { title: 'Home Page' }
  },
  {
    path: '/numerologyCalculator',
    name: 'NumerologyCalculator',
    component: NumerologyCalculator,
    meta: { title: 'Numerology Calculator' }
  },
  {
    path: '/zodiac&astrology',
    name: 'ZodiacAndAstrology',
    component: ZodiacAndAstrology,
    meta: { title: 'Zodiac & Astrology' }
  },
  {
    path: '/Aries',
    name: 'Aries',
    component: Aries,
    meta: { title: 'Aries' }
  },
  {
    path: '/Taurus',
    name: 'Taurus',
    component: Taurus,
    meta: { title: 'Taurus' }
  },
  {
    path: '/Gemini',
    name: 'Gemini',
    component: Gemini,
    meta: { title: 'Gemini' }
  },
  {
    path: '/Cancer',
    name: 'Cancer',
    component: Cancer,
    meta: { title: 'Cancer' }
  },
  {
    path: '/Leo',
    name: 'Leo',
    component: Leo,
    meta: { title: 'Leo' }
  },
  {
    path: '/Virgo',
    name: 'Virgo',
    component: Virgo,
    meta: { title: 'Virgo' }
  },
  {
    path: '/Libra',
    name: 'Libra',
    component: Libra,
    meta: { title: 'Libra' }
  },
  {
    path: '/Scorpio',
    name: 'Scorpio',
    component: Scorpio,
    meta: { title: 'Scorpio' }
  },
  {
    path: '/Sagittarius',
    name: 'Sagittarius',
    component: Sagittarius,
    meta: { title: 'Sagittarius' }
  },
  {
    path: '/Capricorn',
    name: 'Capricorn',
    component: Capricorn,
    meta: { title: 'Capricorn' }
  },
  {
    path: '/Aquarius',
    name: 'Aquarius',
    component: Aquarius,
    meta: { title: 'Aquarius' }
  },
  {
    path: '/Pisces',
    name: 'Pisces',
    component: Pisces,
    meta: { title: 'Pisces' }
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
