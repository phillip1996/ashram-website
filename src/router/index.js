import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

// Routes configuration
const routes = [
  { 
    path: '/', 
    name: 'Home',
    component: Home 
  },
  { 
    path: '/about', 
    name: 'About',
    // Lazy Loading for performance
    component: () => import('../views/About.vue') 
  },
  { 
    path: '/contact', 
    name: 'Contact',
    // Lazy Loading the new Contact page
    component: () => import('../views/Contact.vue')
  },
  // You can add more routes here in the future
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' } // Smooth scroll to top on route change
    }
  }
})

export default router
