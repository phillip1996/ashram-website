import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import '@fortawesome/fontawesome-free/css/all.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 1000,
  easing: 'ease-out-cubic',
  once: true
})

createApp(App)
  .use(router)
  .mount('#app')
