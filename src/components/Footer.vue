<template>
  <footer class="font-montserrat">

    <div class="bg-[#1e3540] text-white">
      <div class="max-w-6xl mx-auto px-6 md:px-12 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        <!-- Brand -->
        <div class="md:col-span-2 space-y-5">
          <img src="../assets/img/logo.png" alt="The Lekki Ashram" class="h-10 w-auto brightness-0 invert" />
          <p class="text-white/50 text-sm leading-relaxed max-w-sm">
            A sanctuary for higher living — founded on the principles of Advaita, ecological stewardship, and human evolution.
          </p>
          <div class="flex gap-3 pt-1">
            <a href="https://x.com/AshramLekki" class="footer-social"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="https://www.facebook.com/share/1CkSnfWiCn/" class="footer-social"><i class="fa-brands fa-facebook"></i></a>
            <a href="#" class="footer-social"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" class="footer-social"><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="space-y-4">
          <h4 class="text-[#E1B137] text-[10px] font-bold uppercase tracking-[0.3em]">Quick Links</h4>
          <ul class="space-y-3 text-sm text-white/50">
            <li><router-link to="/"        class="hover:text-[#E1B137] transition-colors">Home</router-link></li>
            <li><router-link to="/about"   class="hover:text-[#E1B137] transition-colors">About</router-link></li>
            <li><router-link to="/blog"    class="hover:text-[#E1B137] transition-colors">Insights</router-link></li>
            <li><router-link to="/news"    class="hover:text-[#E1B137] transition-colors">News</router-link></li>
            <li><router-link to="/contact" class="hover:text-[#E1B137] transition-colors">Contact</router-link></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="space-y-4">
  <h4 class="text-[#E1B137] text-[10px] font-bold uppercase tracking-[0.3em]">Contact</h4>

  <ul class="space-y-3 text-sm text-white/50">

    <li class="flex items-start gap-2">
      <i class="fa-solid fa-location-dot text-[#E1B137] mt-0.5 shrink-0"></i>
      <span>
        07, Kayode I Micah Street, Ogombo off Abraham Adesanya Rd, Lekki, Lagos.
      </span>
    </li>

    <li class="flex items-center gap-2">
      <i class="fa-solid fa-phone text-[#E1B137] shrink-0"></i>
      <span>+234 906 925 8377</span>
    </li>

    <li class="flex items-center gap-2">
      <i class="fa-solid fa-envelope text-[#E1B137] shrink-0"></i>
      <span>info@lekkiashram.com</span>
    </li>

  </ul>
</div>

      </div>

      <!-- Subscribe -->
      <div class="border-t border-white/10">
        <div class="max-w-6xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p class="text-white font-medium text-sm mb-1">Subscribe to Contemplations</p>
            <p class="text-white/40 text-xs">Weekly insights on consciousness, ecology and the path within.</p>
          </div>
          <form class="flex gap-3 w-full md:w-auto" @submit.prevent="handleSubscribe">
            <input
              v-model="email"
              type="email"
              placeholder="Your email address"
              class="flex-1 md:w-64 px-4 py-3 bg-white/5 border border-white/15 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#E1B137] transition-colors"
            />
            <button
              type="submit"
              class="px-6 py-3 bg-[#E1B137] text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#d4a52e] transition-all shrink-0 active:scale-95"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="bg-slate-950 text-white py-5">
      <div class="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-3">
        <p class="text-white/30 text-xs">© 2026 The Lekki Ashram. All rights reserved.</p>
        <div class="flex gap-5 text-white/30 text-xs">
          <a href="#" class="hover:text-[#E1B137] transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-[#E1B137] transition-colors">Terms of Use</a>
        </div>
      </div>
    </div>

  </footer>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

const handleSubscribe = () => {
  if (!email.value) return
  // Wire up to your newsletter service here
  console.log('Subscribed:', email.value)
  email.value = ''
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800&display=swap');

.font-montserrat { font-family: 'Montserrat', sans-serif; }

.footer-social {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.4);
  transition: all 0.3s ease;
}
.footer-social:hover {
  background: #E1B137;
  border-color: #E1B137;
  color: white;
  transform: translateY(-2px);
}
</style>