<template>
  <footer class="bg-white">
    <div class="text-gray-800 border-t border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">

          <div class="lg:col-span-2">
            <div class="mb-8">
              <router-link to="/" class="inline-block">
                <img 
                  src="../assets/img/logo.png" 
                  alt="The Lekki Ashram" 
                  class="h-16 w-auto object-contain mb-2" 
                />
              </router-link>
            </div>
            
            <p class="text-gray-600 mb-8 leading-relaxed max-w-lg font-light">
              An apolitical civil society group dedicated to resolving the mysteries of life 
              through nature conservation, Advaita philosophy, and human evolution.
            </p>

            <div class="flex flex-wrap gap-3 mb-8">
              <div class="flex items-center gap-2 px-4 py-2 bg-white shadow-sm rounded-lg border border-gray-100">
                <i class="fa-solid fa-leaf text-emerald-600"></i>
                <span class="text-[11px] font-bold uppercase tracking-wider text-gray-700">Apolitical Group</span>
              </div>
              <div class="flex items-center gap-2 px-4 py-2 bg-white shadow-sm rounded-lg border border-gray-100">
                <i class="fa-solid fa-earth-africa text-blue-600"></i>
                <span class="text-[11px] font-bold uppercase tracking-wider text-gray-700">Nature First</span>
              </div>
              <div class="flex items-center gap-2 px-4 py-2 bg-white shadow-sm rounded-lg border border-gray-100">
                <i class="fa-solid fa-om text-orange-500"></i>
                <span class="text-[11px] font-bold uppercase tracking-wider text-gray-700">Advaita Framework</span>
              </div>
            </div>
          </div>

          <div>
            <h3 class="font-bold text-gray-900 text-xs uppercase tracking-[0.2em] mb-8">Philosophy</h3>
            <ul class="space-y-4">
              <li v-for="link in philosophyLinks" :key="link.name">
                <a href="#" class="group flex items-center gap-2 text-gray-500 hover:text-[#E1B137] transition-all duration-300">
                  <span class="h-px w-0 bg-[#E1B137] transition-all duration-300 group-hover:w-3"></span>
                  <span class="font-medium text-[15px]">{{ link.name }}</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold text-gray-900 text-xs uppercase tracking-[0.2em] mb-8">Affiliations</h3>
            <ul class="space-y-4">
              <li v-for="org in affiliations" :key="org">
                <a href="#" class="group flex items-center gap-2 text-gray-500 hover:text-[#E1B137] transition-all duration-300">
                  <span class="h-px w-0 bg-[#E1B137] transition-all duration-300 group-hover:w-3"></span>
                  <span class="font-medium text-[15px]">{{ org }}</span>
                  <span class="text-xs opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 ml-auto">→</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold text-gray-900 text-xs uppercase tracking-[0.2em] mb-8">Engagement</h3>
            <div class="space-y-3 mb-6">
              <a href="mailto:info@lekkiamshram.com" class="block p-4 rounded-xl bg-gray-50 border border-transparent hover:border-[#E1B137]/20 hover:bg-white hover:shadow-xl hover:shadow-[#E1B137]/5 transition-all group">
                <p class="text-[10px] font-bold text-[#E1B137] uppercase mb-1">Inquiries</p>
                <p class="text-gray-900 font-bold text-sm">info@lekkiamshram.com</p>
              </a>
              <a href="#" class="block p-4 rounded-xl bg-gray-50 border border-transparent hover:border-slate-200 hover:bg-white hover:shadow-xl hover:shadow-slate-500/5 transition-all group">
                <p class="text-[10px] font-bold text-slate-500 uppercase mb-1">Location</p>
                <p class="text-gray-900 font-bold text-sm">Lekki, Lagos, Nigeria</p>
              </a>
            </div>
            
            <button class="flex items-center justify-center w-full py-4 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-[#E1B137] transition-all shadow-lg active:scale-[0.98]">
              Join Community
            </button>
          </div>
        </div>

        <div class="mt-20 pt-12 border-t border-gray-100 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div class="lg:col-span-2">
            <h4 class="font-serif text-xl text-gray-900 mb-2 italic">Subscribe to Contemplations</h4>
            <p class="text-gray-500 mb-6 text-sm">Join our newsletter for weekly insights on consciousness and conservation.</p>
            <form class="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address"
                class="flex-1 px-5 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E1B137] focus:border-transparent shadow-sm"
              />
              <button class="px-8 py-3 bg-slate-900 text-white font-bold text-xs uppercase tracking-widest rounded-lg hover:shadow-lg hover:bg-[#E1B137] transition-all">
                Subscribe
              </button>
            </form>
          </div>

          <div>
            <h4 class="font-bold text-gray-900 text-xs uppercase tracking-widest mb-6">Connect With Us</h4>
            <div class="flex gap-4">
              <a v-for="social in socialLinks" :key="social.icon" href="#" 
                 class="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center hover:bg-white hover:scale-110 transition-all border border-gray-100 shadow-sm group">
                <i :class="[social.icon, 'text-gray-400 group-hover:text-[#E1B137] text-lg']"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-slate-950 text-white py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-[11px] uppercase tracking-[0.3em] opacity-60 font-light text-center md:text-left">
            © 2026 THE LEKKI ASHRAM. BEYOND RELIGION. BEYOND POLITICS.
          </p>
          <div class="flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] opacity-60">
            <a href="#" class="hover:text-[#E1B137] transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-[#E1B137] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const philosophyLinks = [
  { name: 'Our Vision' },
  { name: 'Advaita Study' },
  { name: 'Functional Medicine' },
  { name: 'Global Harmony' }
];

const affiliations = [
  'WWF International',
  'UNEP Observer',
  'NCF Nigeria',
  'Vedanta Society'
];

const socialLinks = [
  { icon: 'fa-brands fa-facebook-f' },
  { icon: 'fa-brands fa-instagram' },
  { icon: 'fa-brands fa-x-twitter' },
  { icon: 'fa-brands fa-youtube' }
];
</script>