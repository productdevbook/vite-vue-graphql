import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/about.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../pages/contact.vue')
    }
  ]
})

export default router
