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
  
  // =============================================
  // PHILOSOPHY PAGES - One for each hero slide
  // =============================================
  { 
    path: '/philosophy/advaita', 
    name: 'AdvaitaPhilosophy',
    component: () => import('../views/philosophy/Advaita.vue')
  },
  { 
    path: '/philosophy/yoga', 
    name: 'YogaPhilosophy',
    component: () => import('../views/philosophy/Yoga.vue')
  },
  { 
    path: '/philosophy/ecology', 
    name: 'EcologyPhilosophy',
    component: () => import('../views/philosophy/Ecology.vue')
  },
  { 
    path: '/philosophy/functional-medicine', 
    name: 'FunctionalMedicinePhilosophy',
    component: () => import('../views/philosophy/FunctionalMedicine.vue')
  },
  { 
    path: '/philosophy/consultancy', 
    name: 'ConsultancyPhilosophy',
    component: () => import('../views/philosophy/Consultancy.vue')
  },
  
  // =============================================
  // SUPPORT PAGES - One for each hero slide
  // =============================================
  { 
    path: '/support/meditation-programs', 
    name: 'MeditationPrograms',
    component: () => import('../views/support/MeditationPrograms.vue')
  },
  { 
    path: '/support/satsang', 
    name: 'Satsang',
    component: () => import('../views/support/Satsang.vue')
  },
  { 
    path: '/support/conservation', 
    name: 'Conservation',
    component: () => import('../views/support/Conservation.vue')
  },
  { 
    path: '/support/wellness', 
    name: 'Wellness',
    component: () => import('../views/support/Wellness.vue')
  },
  { 
    path: '/support/therapy', 
    name: 'Therapy',
    component: () => import('../views/support/Therapy.vue')
  },
  
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