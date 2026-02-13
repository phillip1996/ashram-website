<template>
  <main class="min-h-screen bg-gray-50 font-sans"> <!-- Global font applied -->

    <!-- ================= HERO / PAGE HEADER ================= -->
    <section 
      class="relative h-96 md:h-[500px] flex items-center bg-center bg-cover"
      :style="{ backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1661763911173-f2f7becc70b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29udGFjdCUyMHVzfGVufDB8fDB8fHww)', backgroundAttachment: 'fixed' }"
    >
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="container mx-auto px-4 md:px-6 lg:px-8 relative text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-2 text-white">Contact Us</h1>
        <p class="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto">
          Reach out to explore retreats, workshops, or mindful programs tailored for your growth.
        </p>
      </div>
    </section>

    <!-- ================= CONTACT FORM & INFO ================= -->
    <section class="py-20 bg-gray-100">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-start">

          <!-- ================= CONTACT FORM ================= -->
          <div data-aos="fade-right">
            <div class="bg-white p-10 rounded-2xl shadow-xl">
              <h2 class="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form @submit.prevent="submitForm" class="space-y-6 font-sans">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name" 
                    required
                    placeholder="Enter your full name"
                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none font-sans"
                  />
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email" 
                    required
                    placeholder="Enter your email address"
                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none font-sans"
                  />
                </div>
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    v-model="form.message" 
                    required
                    placeholder="Say hello to us"
                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none font-sans"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  class="w-full bg-yellow-400 text-gray-900 font-semibold py-3 rounded-lg hover:bg-yellow-500 transition-all font-sans"
                >
                  Send Message
                </button>
              </form>
              <p v-if="successMessage" class="mt-4 text-green-600 font-medium font-sans">{{ successMessage }}</p>
            </div>
          </div>

          <!-- ================= CONTACT INFO / SIDE ================= -->
          <div data-aos="fade-left" class="space-y-8">

            <div class="bg-white p-8 rounded-2xl shadow-xl font-sans">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Contact Info</h2>
              <div class="space-y-4 text-gray-700">
                <div>
                  <h3 class="font-semibold text-gray-900">Lekki Ashram</h3>
                  <p class="text-gray-700">Ogombo – Abraham Adesanya, Lagos, Nigeria</p>
                  <p class="mt-1 font-medium text-gray-900">+234 800 123 4567</p>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Email</h3>
                  <p class="mt-1 font-medium text-gray-900">info@lekkiashram.org</p>
                </div>
              </div>
            </div>

            <div class="bg-white p-8 rounded-2xl shadow-xl font-sans">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">More Info</h2>
              <p class="text-gray-700">
                An apolitical civil society group dedicated to resolving the mysteries of life through nature conservation, Advaita philosophy, and human evolution.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const successMessage = ref('')

function submitForm() {
  successMessage.value = 'Your message has been sent successfully!'
  form.value.name = ''
  form.value.email = ''
  form.value.message = ''
}
</script>

<style scoped>
/* Simple fade animation */
[data-aos] {
  opacity: 0;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

[data-aos].aos-animate {
  opacity: 1;
  transform: translateY(0);
}
</style>
