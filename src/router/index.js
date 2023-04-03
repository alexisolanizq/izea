import { createRouter, createWebHistory } from 'vue-router'
import dashboardRoutes from '@/router/dashboardRoutes'
import authRoutes from '@/router/authRoutes'
import useMainStore from '@/stores'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)',
      component: () => import('@/views/ErrorPage.vue')
    },
    {
      path: '/',
      meta: {
        requiresAuth: false
      },
      component: () => import('@/views/HomeView.vue')
    },
    dashboardRoutes,
    authRoutes
  ]
})

router.beforeEach((to, from, next) => {
  const needsAuth = to.matched.some((record) => record.meta.requiresAuth)
  const { isAuth } = useMainStore()
  if (!needsAuth && isAuth && to.name !== 'login') return next({ name: 'dashboard' })
  if (!needsAuth && isAuth && to.name === ('login' || 'register')) return next({ name: 'dashboard' })
  if (needsAuth && !isAuth) return next({ name: 'login' })
  else next()
})

export default router
