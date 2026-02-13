<template>
  <nav
    class="fixed top-0 left-0 w-full z-50 transition-all duration-500 font-montserrat"
    :class="[
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm border-b border-slate-200/50' 
        : 'bg-transparent py-5 border-b border-transparent'
    ]"
  >
    <div class="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
      
      <!-- Logo - Left -->
      <div class="flex-1 flex justify-start">
        <router-link to="/" class="flex items-center">
          <img src="../assets/img/logo.png" alt="Lekki Ashram" class="h-10 w-auto object-contain" />
        </router-link>
      </div>

      <!-- Navigation - Center with Dropdown -->
      <div class="hidden md:flex items-center justify-center flex-2">
        <ul class="nav-links flex items-center gap-10 text-[#2b4b58] text-[13px] font-bold uppercase tracking-[0.15em]">
          <li><router-link to="/" class="nav-item">Home</router-link></li>
          <li><router-link to="/about" class="nav-item">About</router-link></li>
          
          <!-- Category Dropdown -->
          <li class="relative dropdown-group">
            <div
              class="nav-item flex items-center gap-1 cursor-pointer"
              @mouseenter="openDropdown"
              @mouseleave="closeDropdown"
            >
              Category
              <i class="fa-solid fa-chevron-down text-[9px] transition-all duration-300" 
                 :class="{ 'rotate-180': isDropdownOpen }"></i>
            </div>
            
            <!-- Clean Minimal Dropdown -->
            <transition 
              @enter="enter"
              @leave="leave"
            >
              <div 
                v-show="isDropdownOpen"
                class="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white shadow-xl border border-slate-100 py-2"
                @mouseenter="openDropdown"
                @mouseleave="closeDropdown"
              >
                <router-link 
                  to="/category/wisdom-series" 
                  class="dropdown-item block px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#2b4b58] hover:text-[#E1B137] hover:bg-slate-50 transition-all"
                  @click="closeDropdown"
                >
                  <span class="flex items-center justify-between">
                    Wisdom Series
                    <i class="fa-solid fa-arrow-right text-[10px] opacity-0 group-hover:opacity-100 transition-all transform translate-x-0 group-hover:translate-x-1"></i>
                  </span>
                </router-link>
                <router-link 
                  to="/category/recent-articles" 
                  class="dropdown-item block px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#2b4b58] hover:text-[#E1B137] hover:bg-slate-50 transition-all"
                  @click="closeDropdown"
                >
                  <span class="flex items-center justify-between">
                    Recent Articles
                    <i class="fa-solid fa-arrow-right text-[10px] opacity-0 group-hover:opacity-100 transition-all transform translate-x-0 group-hover:translate-x-1"></i>
                  </span>
                </router-link>
                <router-link 
                  to="/category/news-updates" 
                  class="dropdown-item block px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#2b4b58] hover:text-[#E1B137] hover:bg-slate-50 transition-all"
                  @click="closeDropdown"
                >
                  <span class="flex items-center justify-between">
                    News & Update
                    <i class="fa-solid fa-arrow-right text-[10px] opacity-0 group-hover:opacity-100 transition-all transform translate-x-0 group-hover:translate-x-1"></i>
                  </span>
                </router-link>
              </div>
            </transition>
          </li>
          
          <li><router-link to="/contact" class="nav-item">Contact</router-link></li>
        </ul>
      </div>

      <!-- Social Icons & Mobile Menu Button - Right -->
      <div class="flex items-center justify-end gap-5 flex-1 text-slate-400">
        <a href="https://x.com/AshramLekki" class="social-link text-base"><i class="fa-brands fa-x-twitter"></i></a>
        <a href="https://wwww.facebook.com/share/1CkSnfWiCn/" class="social-link text-base"><i class="fa-brands fa-facebook"></i></a>
        <a href="#" class="social-link text-base"><i class="fa-brands fa-instagram"></i></a>
        <a href="#" class="social-link text-base"><i class="fa-brands fa-linkedin-in"></i></a>
        
        <button class="md:hidden text-[#2B4B58] text-2xl z-50 ml-2" @click="isMenuOpen = !isMenuOpen">
          <i :class="isMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div v-if="isMenuOpen" class="absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl p-8 md:hidden">
        <ul class="flex flex-col gap-5 text-[#2b4b58] font-bold uppercase tracking-widest text-sm">
          <li><router-link to="/" @click="closeMenu">Home</router-link></li>
          <li><router-link to="/about" @click="closeMenu">About</router-link></li>
          
          <!-- Mobile Dropdown -->
          <li>
            <div class="flex items-center justify-between w-full py-2" @click="toggleMobileDropdown">
              <span class="text-[#2b4b58] font-bold uppercase tracking-widest text-sm">Category</span>
              <i class="fa-solid fa-chevron-down text-[#2b4b58] text-xs transition-all duration-300" 
                 :class="{ 'rotate-180': isMobileDropdownOpen }"></i>
            </div>
            
            <transition name="slide">
              <div v-if="isMobileDropdownOpen" class="mt-2 ml-4 space-y-1">
                <router-link 
                  to="/category/wisdom-series" 
                  class="block py-3 px-2 text-sm text-slate-600 hover:text-[#E1B137] uppercase tracking-wider"
                  @click="closeMenu"
                >
                  <span class="flex items-center justify-between">
                    Wisdom Series
                    <i class="fa-solid fa-arrow-right text-[10px] opacity-0 group-hover:opacity-100 transition-all"></i>
                  </span>
                </router-link>
                <router-link 
                  to="/category/recent-articles" 
                  class="block py-3 px-2 text-sm text-slate-600 hover:text-[#E1B137] uppercase tracking-wider"
                  @click="closeMenu"
                >
                  <span class="flex items-center justify-between">
                    Recent Articles
                    <i class="fa-solid fa-arrow-right text-[10px] opacity-0 group-hover:opacity-100 transition-all"></i>
                  </span>
                </router-link>
                <router-link 
                  to="/category/news-updates" 
                  class="block py-3 px-2 text-sm text-slate-600 hover:text-[#E1B137] uppercase tracking-wider"
                  @click="closeMenu"
                >
                  <span class="flex items-center justify-between">
                    News & Update
                    <i class="fa-solid fa-arrow-right text-[10px] opacity-0 group-hover:opacity-100 transition-all"></i>
                  </span>
                </router-link>
              </div>
            </transition>
          </li>
          
          <li><router-link to="/contact" @click="closeMenu">Contact</router-link></li>
        </ul>
        
        <!-- Mobile Social Links -->
        <div class="flex items-center gap-5 text-slate-400 border-t border-slate-100 mt-6 pt-6">
          <a href="https://x.com/AshramLekki" class="social-link text-base"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="https://wwww.facebook.com/share/1CkSnfWiCn/" class="social-link text-base"><i class="fa-brands fa-facebook"></i></a>
          <a href="#" class="social-link text-base"><i class="fa-brands fa-instagram"></i></a>
          <a href="#" class="social-link text-base"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isMobileDropdownOpen = ref(false)
const isScrolled = ref(false)
const isDropdownOpen = ref(false)

let dropdownTimeout = null

const closeMenu = () => {
  isMenuOpen.value = false
  isMobileDropdownOpen.value = false
}

const toggleMobileDropdown = () => {
  isMobileDropdownOpen.value = !isMobileDropdownOpen.value
}

// Desktop dropdown handlers
const openDropdown = () => {
  clearTimeout(dropdownTimeout)
  isDropdownOpen.value = true
}

const closeDropdown = () => {
  dropdownTimeout = setTimeout(() => {
    isDropdownOpen.value = false
  }, 150)
}

// Smooth enter/leave animations
const enter = (el) => {
  el.style.opacity = 0
  el.style.transform = 'translateY(-8px)'
  
  setTimeout(() => {
    el.style.transition = 'opacity 0.2s ease, transform 0.2s ease'
    el.style.opacity = 1
    el.style.transform = 'translateY(0)'
  }, 30)
}

const leave = (el) => {
  el.style.transition = 'opacity 0.15s ease, transform 0.15s ease'
  el.style.opacity = 0
  el.style.transform = 'translateY(-8px)'
}

const onScroll = () => {
  isScrolled.value = window.scrollY > 30
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  clearTimeout(dropdownTimeout)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800&display=swap');

.font-montserrat { font-family: 'Montserrat', sans-serif; }

.nav-item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 0;
  transition: 0.3s;
}

/* Hover underline effect */
.nav-item::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 50%;
  background-color: #E1B137;
  transition: all 0.3s ease-in-out;
  transform: translateX(-50%);
}

.nav-item:hover::after,
.router-link-active.nav-item::after {
  width: 100%;
}

.nav-item:hover,
.router-link-active.nav-item {
  color: #E1B137;
}

/* Dropdown item with arrow on hover */
.dropdown-item {
  display: block;
}

.dropdown-item span {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.dropdown-item i {
  opacity: 0;
  transform: translateX(0);
  transition: all 0.2s ease;
  color: #E1B137;
}

.dropdown-item:hover i {
  opacity: 1 !important;
  transform: translateX(4px);
}

/* For mobile items */
.router-link-active span i {
  opacity: 0;
}

/* Rotate chevron */
.rotate-180 {
  transform: rotate(180deg);
}

/* Social Links */
.social-link {
  transition: all 0.3s ease;
}
.social-link:hover {
  color: #E1B137;
  transform: translateY(-2px);
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Slide transition for mobile dropdown */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>