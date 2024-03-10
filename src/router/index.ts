import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: ProfileView
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Check if user is authenticated, redirect to login if not
    if (isAuthenticated()) {
      next()
    } else {
      next('/login')
    }
  } else {
    next() // Continue to the next route
  }
})

function isAuthenticated(): boolean {
  // Implement your authentication logic here (e.g., check for a valid token)
  return localStorage.getItem('token') !== null
}
export default router
