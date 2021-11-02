import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/Layout.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
