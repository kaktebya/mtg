import { createRouter, createWebHistory } from 'vue-router'
import myRoutes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: myRoutes,
})

export default router
