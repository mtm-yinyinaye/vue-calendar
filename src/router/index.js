import { createRouter, createWebHistory } from 'vue-router'
import SampleCalender from '../components/SampleCalender.vue'
import FullCalender from '../components/FullCalender.vue'

const routes = [
  {
    path: '/',
    name: 'SampleCalender',
    component: SampleCalender
  },
  {
    path: '/fullcalender',
    name: 'FullCalender',
    component: FullCalender
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
