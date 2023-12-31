import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/plus',
      name: 'plus',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PlusView.vue')
    },
    {
      path: '/multiplikation',
      name: 'multiplikation',
      component: () => import('../views/MultiplicationView.vue')
    },
    {
      path: '/minus',
      name: 'minus',
      component: () => import('../views/MinusView.vue')
    }
  ]
})

export default router
