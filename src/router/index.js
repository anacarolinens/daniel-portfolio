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
  scrollBehavior(to, from, savedPosition) {
    // 1) botão “Veja mais aqui” em /project-area → topo
    if (to.name === 'ProjectArea') {
      return { left: 0, top: 0, behavior: 'smooth' }
    }
    // 2) voltar/back do browser
    if (savedPosition) {
      return savedPosition
    }
    // 3) links internos com hash → rola até o id correspondente
    if (to.hash) {
      return { el: to.hash, top: 0, behavior: 'smooth' }
    }
    // 4) qualquer outra rota → topo suave
    return { left: 0, top: 0, behavior: 'smooth' }
  },
})

export default router
