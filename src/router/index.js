import { createRouter, createWebHistory } from 'vue-router'
import TheProjectArea from '../views/TheProjectArea.vue'
import TheHome from '../views/TheHome.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: TheHome,
  },
  {
    path: '/project-area',
    name: 'ProjectArea',
    component: TheProjectArea,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
