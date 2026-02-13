<template>
  <main class="min-h-screen bg-white">
    <!-- ================= HERO SECTION ================= -->
    <section class="relative min-h-[85vh] overflow-hidden bg-black">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img 
          :src="heroImage" 
          alt="The Lekki Ashram - The Art of Living Center"
          class="w-full h-full object-cover"
        />
        <!-- Cinematic Overlay (Left Focused) -->
        <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
      </div>

      <!-- Hero Content -->
      <div class="relative min-h-[85vh] flex items-center">
        <div class="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div 
            class="max-w-3xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <!-- Accent Line + Tag -->
            <div class="flex items-center gap-4 mb-8">
              <div class="w-14 h-[1px] bg-[#E1B137]"></div>
              <h4 class="text-[#E1B137] font-semibold uppercase tracking-[0.4em] text-xs">
                The Art of Living Center
              </h4>
            </div>

            <!-- Main Heading -->
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-8">
              A Journey Into <br>
              <span class="italic text-[#E1B137]">
                Higher Living
              </span>
            </h1>

            <!-- Description -->
            <p class="text-base sm:text-lg md:text-xl text-white/85 font-light max-w-xl leading-relaxed mb-10">
              Rooted in Advaita wisdom, we cultivate stillness, awareness,
              and conscious transformation in a sacred community space.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-wrap items-center gap-5">
              <router-link 
                to="/category"
                class="px-8 py-3 bg-[#E1B137] text-black font-medium tracking-wide hover:bg-[#cfa12f] transition-all duration-300"
              >
                Explore Programs
              </router-link>

              <button 
                @click="openScheduleModal"
                class="px-8 py-3 border border-white/40 text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                Visit the Ashram
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div class="w-6 h-10 border border-white/40 rounded-full flex items-start justify-center p-1">
          <div class="w-1 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>

    <!-- ================= QUICK FACTS BAR ================= -->
    <section class="py-8 bg-slate-900 border-b border-slate-800">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="text-3xl font-bold text-white mb-1">15+</div>
            <div class="text-xs text-slate-300 uppercase tracking-widest">Years of Service</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-white mb-1">500+</div>
            <div class="text-xs text-slate-300 uppercase tracking-widest">Retreats Conducted</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-white mb-1">6</div>
            <div class="text-xs text-slate-300 uppercase tracking-widest">Trustees</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-white mb-1">4</div>
            <div class="text-xs text-slate-300 uppercase tracking-widest">Global Partners</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= OUR STORY ================= -->
    <section class="py-16 md:py-24 lg:py-28 bg-white">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Image Section -->
          <div class="relative" data-aos="fade-right">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                :src="meditationHallImage" 
                alt="The Lekki Ashram Meditation Hall" 
                class="w-full h-[400px] md:h-[500px] object-cover" 
              />
            </div>
            <!-- Accent Element -->
            <div class="absolute -top-4 -right-4 w-24 h-24 bg-[#E1B137] rounded-full flex items-center justify-center z-10 shadow-xl">
              <i class="fa-solid fa-om text-white text-3xl"></i>
            </div>
          </div>

          <!-- Content Section -->
          <div class="space-y-6" data-aos="fade-left">
            <div>
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-0.5 bg-[#3291d6]"></div>
                <h4 class="text-[#3291d6] font-bold uppercase tracking-[0.3em] text-xs">Our Identity</h4>
              </div>
              <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-900 mb-4">
                The <span class="italic text-[#E1B137]">Lekki Ashram</span> Story
              </h2>
              <p class="text-slate-500 text-base md:text-lg leading-relaxed">
                Operating as "The Lekki Ashram" - the spiritual name of our registered civil society organization "The Art of Living Center, Lekki-Nigeria." We are a global movement for inner transformation rooted in the profound wisdom of non-dualism (Advaita).
              </p>
            </div>

            <!-- Mission & Vision Cards -->
            <div class="grid md:grid-cols-2 gap-6">
              <!-- Mission Card -->
              <div class="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-[#3291d6]/20 transition-all duration-300">
                <div class="w-12 h-12 rounded-lg bg-[#3291d6]/10 flex items-center justify-center mb-4">
                  <i class="fa-solid fa-bullseye text-[#3291d6] text-xl"></i>
                </div>
                <h3 class="text-lg font-serif text-slate-900 mb-2">Our Mission</h3>
                <p class="text-slate-500 text-sm leading-relaxed">
                  To inspire purposeful living through Advaita wisdom, fostering clarity and compassion worldwide.
                </p>
              </div>

              <!-- Vision Card -->
              <div class="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-[#E1B137]/20 transition-all duration-300">
                <div class="w-12 h-12 rounded-lg bg-[#E1B137]/10 flex items-center justify-center mb-4">
                  <i class="fa-solid fa-eye text-[#E1B137] text-xl"></i>
                </div>
                <h3 class="text-lg font-serif text-slate-900 mb-2">Our Vision</h3>
                <p class="text-slate-500 text-sm leading-relaxed">
                  A world where consciousness and nature thrive in harmony through Advaita wisdom.
                </p>
              </div>
            </div>

            <!-- Back to Home Link -->
            <div class="pt-4">
              <router-link to="/" class="inline-flex items-center gap-2 text-[#3291d6] hover:text-[#E1B137] transition-colors group">
                <i class="fa-solid fa-arrow-left text-sm group-hover:-translate-x-1 transition-transform"></i>
                <span class="text-sm font-medium">Back to Homepage</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= CORE VALUES ================= -->
    <section class="py-24 lg:py-32 bg-[#f8f7f4]">
      <div class="max-w-6xl mx-auto px-6 lg:px-12">
        <!-- Section Header -->
        <div class="text-center max-w-2xl mx-auto mb-20">
          <!-- Decorative Title Line -->
          <div class="flex items-center justify-center gap-3 mb-6">
            <div class="w-12 h-[1px] bg-[#3291d6]"></div>
            <h4 class="text-[#3291d6] font-semibold uppercase tracking-[0.35em] text-xs">
              Our Foundation
            </h4>
            <div class="w-12 h-[1px] bg-[#3291d6]"></div>
          </div>

          <!-- Main Title -->
          <h2 class="text-4xl md:text-5xl font-serif text-slate-900">
            Core <span class="italic text-[#E1B137]">Principles</span>
          </h2>

          <!-- Subtitle -->
          <p class="mt-6 text-lg text-slate-600 leading-relaxed">
            Rooted in Advaita philosophy and ecological harmony, these principles guide
            our collective growth and conscious evolution.
          </p>
        </div>

        <!-- Values Grid -->
        <div class="grid md:grid-cols-3 gap-14 md:gap-16">
          <!-- Principle 1 -->
          <div class="text-center group transition-all duration-500">
            <div class="mx-auto w-20 h-20 rounded-full border border-[#3291d6]/30 
                        flex items-center justify-center 
                        transition-all duration-500
                        group-hover:bg-[#3291d6]/10
                        group-hover:border-[#3291d6]/60">
              <i class="fa-solid fa-infinity text-3xl text-[#3291d6] transition-transform duration-500 group-hover:scale-110"></i>
            </div>
            <h3 class="mt-8 text-xl font-serif text-slate-900">
              Non-Dual Awareness
            </h3>
            <p class="mt-4 text-slate-600 leading-relaxed max-w-sm mx-auto">
              Recognizing the indivisible nature of existence — where self and world are
              expressions of one unified reality.
            </p>
          </div>

          <!-- Principle 2 -->
          <div class="text-center group transition-all duration-500">
            <div class="mx-auto w-20 h-20 rounded-full border border-[#E1B137]/30 
                        flex items-center justify-center 
                        transition-all duration-500
                        group-hover:bg-[#E1B137]/10
                        group-hover:border-[#E1B137]/60">
              <i class="fa-solid fa-eye text-3xl text-[#E1B137] transition-transform duration-500 group-hover:scale-110"></i>
            </div>
            <h3 class="mt-8 text-xl font-serif text-slate-900">
              Conscious Inquiry
            </h3>
            <p class="mt-4 text-slate-600 leading-relaxed max-w-sm mx-auto">
              Cultivating clarity through disciplined reflection, philosophical study,
              and courageous questioning.
            </p>
          </div>

          <!-- Principle 3 -->
          <div class="text-center group transition-all duration-500">
            <div class="mx-auto w-20 h-20 rounded-full border border-[#3291d6]/30 
                        flex items-center justify-center 
                        transition-all duration-500
                        group-hover:bg-[#3291d6]/10
                        group-hover:border-[#3291d6]/60">
              <i class="fa-solid fa-seedling text-3xl text-[#3291d6] transition-transform duration-500 group-hover:scale-110"></i>
            </div>
            <h3 class="mt-8 text-xl font-serif text-slate-900">
              Ecological Compassion
            </h3>
            <p class="mt-4 text-slate-600 leading-relaxed max-w-sm mx-auto">
              Acting from unity — nurturing humanity and nature as sacred dimensions
              of one evolving consciousness.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= FOUNDER ================= -->
    <section class="py-16 md:py-24 lg:py-28 bg-white">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Founder Image -->
          <div class="relative" data-aos="fade-right">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                :src="founderImage" 
                alt="Iyke OHAEGBU  - Founder & Spiritual Director"
                class="w-full h-[400px] md:h-[500px] object-cover"
              />
              <!-- Accent Badge -->
              <div class="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                <div class="text-center">
                  <div class="text-2xl font-bold text-slate-900">15+</div>
                  <div class="text-xs text-slate-600 uppercase tracking-widest">Years Teaching</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Founder Content -->
          <div class="space-y-6" data-aos="fade-left">
            <div>
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-0.5 bg-[#E1B137]"></div>
                <h4 class="text-[#E1B137] font-bold uppercase tracking-[0.3em] text-xs">Spiritual Leadership</h4>
              </div>
              <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-900 mb-4">
                Iyke<span class="italic text-[#3291d6]"> OHAEGBU</span>
              </h2>
              <p class="text-slate-500 text-base md:text-lg leading-relaxed mb-6">
                Spiritual Director of The Art of Living Center (The Lekki Ashram), Iyke Ohaegbu has dedicated over 15 years to teaching Advaita Vedanta and guiding individuals toward self-realization. His teachings blend ancient wisdom with contemporary understanding.
              </p>
            </div>

            <!-- Accomplishments -->
            <div class="space-y-4">
              <h3 class="text-xl font-serif text-slate-900">Key Contributions</h3>
              <div class="grid sm:grid-cols-2 gap-4">
                <div class="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                  <div class="w-6 h-6 rounded-full bg-[#3291d6]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <i class="fa-solid fa-check text-[#3291d6] text-xs"></i>
                  </div>
                  <p class="text-slate-600 text-sm">Founded The Art of Living Center in 2010</p>
                </div>
                <div class="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                  <div class="w-6 h-6 rounded-full bg-[#3291d6]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <i class="fa-solid fa-check text-[#3291d6] text-xs"></i>
                  </div>
                  <p class="text-slate-600 text-sm">Authored 3 books on Advaita philosophy</p>
                </div>
                <div class="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                  <div class="w-6 h-6 rounded-full bg-[#3291d6]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <i class="fa-solid fa-check text-[#3291d6] text-xs"></i>
                  </div>
                  <p class="text-slate-600 text-sm">Led 500+ meditation retreats worldwide</p>
                </div>
                <div class="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                  <div class="w-6 h-6 rounded-full bg-[#3291d6]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <i class="fa-solid fa-check text-[#3291d6] text-xs"></i>
                  </div>
                  <p class="text-slate-600 text-sm">Established UNEP partnership in 2018</p>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="pt-4">
              <div class="flex items-center gap-4">
                <span class="text-slate-500 text-sm">Connect:</span>
                <div class="flex gap-3">
                  <a href="https://linkedin.com/in/swamiatmananda" target="_blank"
                    class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#0077B5] hover:text-white transition-all">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="https://twitter.com/SwamiAtmananda" target="_blank"
                    class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#1DA1F2] hover:text-white transition-all">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="mailto:swami@lekkiashram.org"
                    class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#3291d6] hover:text-white transition-all">
                    <i class="fa-solid fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= BOARD OF TRUSTEES ================= -->
    <section class="py-16 md:py-24 lg:py-28 bg-slate-50">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="max-w-3xl mx-auto text-center mb-12 md:mb-16" data-aos="fade-up">
          <div class="flex items-center justify-center gap-3 mb-4">
            <div class="w-10 h-0.5 bg-[#3291d6]"></div>
            <h4 class="text-[#3291d6] font-bold uppercase tracking-[0.3em] text-xs">Governance</h4>
            <div class="w-10 h-0.5 bg-[#3291d6]"></div>
          </div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-900 mb-4">
            Board of <span class="italic text-[#E1B137]">Trustees</span>
          </h2>
          <p class="text-slate-500 text-base md:text-lg">
            Six dedicated individuals who oversee our mission and ensure sustainable growth.
          </p>
        </div>

        <!-- Trustees Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div class="group" v-for="(trustee, index) in trustees" :key="index" :data-aos="'fade-up'" :data-aos-delay="(index % 3) * 100">
            <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <!-- Image -->
              <div class="relative h-48 overflow-hidden">
                <img 
                  :src="trustee.image" 
                  :alt="trustee.name"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>
              
              <!-- Content -->
              <div class="p-6 flex-1 flex flex-col">
                <div class="mb-4">
                  <h3 class="text-lg font-serif text-slate-900 mb-1">{{ trustee.name }}</h3>
                  <p class="text-sm text-slate-500 mb-2">{{ trustee.role }}</p>
                  <div class="flex items-center gap-2">
                    <span class="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600">{{ trustee.expertise }}</span>
                  </div>
                </div>
                
                <p class="text-slate-500 text-sm mb-6 flex-1">
                  {{ trustee.bio }}
                </p>
                
                <!-- Social Links -->
                <div class="flex gap-3 pt-4 border-t border-slate-100">
                  <a v-if="trustee.linkedin" :href="trustee.linkedin" target="_blank"
                    class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#0077B5] hover:text-white transition-all text-sm">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a v-if="trustee.twitter" :href="trustee.twitter" target="_blank"
                    class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#1DA1F2] hover:text-white transition-all text-sm">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a :href="`mailto:${trustee.email}`"
                    class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-[#3291d6] hover:text-white transition-all text-sm">
                    <i class="fa-solid fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= CTA SECTION ================= -->
    <section class="py-16 md:py-24 lg:py-28 bg-slate-900">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center" data-aos="fade-up">
          <div class="flex items-center justify-center gap-3 mb-4">
            <div class="w-10 h-0.5 bg-[#E1B137]"></div>
            <h4 class="text-[#E1B137] font-bold uppercase tracking-[0.3em] text-xs">Join Our Community</h4>
            <div class="w-10 h-0.5 bg-[#E1B137]"></div>
          </div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6">
            Ready to <span class="italic text-[#E1B137]">Begin</span> Your Journey?
          </h2>
          <p class="text-slate-300 text-lg mb-8">
            Whether you're seeking meditation guidance, ecological involvement, or philosophical study, we welcome you to our community.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <!-- Schedule via Modal -->
            <button 
              @click="openScheduleModal" 
              class="px-8 py-4 bg-[#E1B137] text-slate-900 font-medium rounded-lg hover:bg-[#d4a42f] transition-all flex items-center justify-center gap-3"
            >
              <i class="fa-solid fa-calendar-check"></i>
              Schedule a Visit
            </button>
            
            <!-- WhatsApp Option -->
            <a 
              :href="`https://wa.me/2348129050431?text=${encodeURIComponent(whatsappMessage)}`"
              target="_blank"
              class="px-8 py-4 bg-[#25D366] text-white font-medium rounded-lg hover:bg-[#128C7E] transition-all flex items-center justify-center gap-3"
            >
              <i class="fa-brands fa-whatsapp"></i>
              WhatsApp Us
            </a>
            
            <!-- View Programs -->
            <router-link to="/programs" 
              class="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-3"
            >
              <i class="fa-solid fa-book-open"></i>
              View Programs
            </router-link>
          </div>
          
          <!-- Quick Contact Info -->
          <div class="mt-8 pt-8 border-t border-slate-800 flex flex-wrap justify-center gap-6 text-sm">
            <a href="tel:+2348129050431" class="text-slate-300 hover:text-white transition-colors flex items-center gap-2">
              <i class="fa-solid fa-phone text-[#E1B137]"></i>
              +234 812 905 0431
            </a>
            <a href="mailto:visits@lekkiashram.org" class="text-slate-300 hover:text-white transition-colors flex items-center gap-2">
              <i class="fa-solid fa-envelope text-[#E1B137]"></i>
              info@lekkiashram.org
            </a>
            <span class="text-slate-300 flex items-center gap-2">
              <i class="fa-solid fa-clock text-[#E1B137]"></i>
              Mon-Sat: 9AM-6PM
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= SCHEDULE VISIT MODAL ================= -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="showScheduleModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" @click.self="closeScheduleModal">
          <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            <!-- Modal Header -->
            <div class="flex items-center justify-between p-6 border-b border-slate-100">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-[#E1B137]/10 flex items-center justify-center">
                  <i class="fa-solid fa-calendar-check text-[#E1B137]"></i>
                </div>
                <div>
                  <h3 class="text-xl font-serif text-slate-900">Schedule Your Visit</h3>
                  <p class="text-sm text-slate-500">Experience the Ashram in person</p>
                </div>
              </div>
              <button 
                @click="closeScheduleModal"
                class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors"
              >
                <i class="fa-solid fa-xmark text-xl"></i>
              </button>
            </div>
            
            <!-- Modal Content -->
            <div class="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <form @submit.prevent="submitScheduleRequest" class="space-y-6">
                <!-- Visit Type -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">Type of Visit *</label>
                  <div class="grid grid-cols-2 gap-3">
                    <button 
                      type="button"
                      @click="scheduleData.visitType = 'meditation'"
                      class="p-4 border rounded-xl text-left transition-all"
                      :class="scheduleData.visitType === 'meditation' ? 'border-[#3291d6] bg-[#3291d6]/5' : 'border-slate-200 hover:border-[#3291d6]/30'"
                    >
                      <i class="fa-solid fa-om text-lg mb-2" :class="scheduleData.visitType === 'meditation' ? 'text-[#3291d6]' : 'text-slate-400'"></i>
                      <h4 class="font-medium text-slate-900">Meditation Session</h4>
                      <p class="text-xs text-slate-500">Group meditation & guidance</p>
                    </button>
                    <button 
                      type="button"
                      @click="scheduleData.visitType = 'retreat'"
                      class="p-4 border rounded-xl text-left transition-all"
                      :class="scheduleData.visitType === 'retreat' ? 'border-[#E1B137] bg-[#E1B137]/5' : 'border-slate-200 hover:border-[#E1B137]/30'"
                    >
                      <i class="fa-solid fa-leaf text-lg mb-2" :class="scheduleData.visitType === 'retreat' ? 'text-[#E1B137]' : 'text-slate-400'"></i>
                      <h4 class="font-medium text-slate-900">Personal Retreat</h4>
                      <p class="text-xs text-slate-500">1-on-1 guidance</p>
                    </button>
                  </div>
                </div>

                <!-- Date Selection -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">Preferred Date *</label>
                  <input 
                    type="date" 
                    v-model="scheduleData.date"
                    :min="minDate"
                    class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3291d6]/20 focus:border-[#3291d6]"
                    required
                  >
                </div>

                <!-- Time Selection -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">Preferred Time *</label>
                  <select 
                    v-model="scheduleData.time"
                    class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3291d6]/20 focus:border-[#3291d6]"
                    required
                  >
                    <option value="">Select a time</option>
                    <option value="09:00">9:00 AM - 10:00 AM</option>
                    <option value="11:00">11:00 AM - Midday Session</option>
                    <option value="14:00">2:00 PM - 3:00 PM</option>
                    <option value="16:00">4:00 PM - Evening Session</option>
                  </select>
                </div>

                <!-- Personal Information -->
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      v-model="scheduleData.name"
                      placeholder="John Doe"
                      class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3291d6]/20 focus:border-[#3291d6]"
                      required
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                    <input 
                      type="email" 
                      v-model="scheduleData.email"
                      placeholder="john@example.com"
                      class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3291d6]/20 focus:border-[#3291d6]"
                      required
                    >
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    v-model="scheduleData.phone"
                    placeholder="+234 XXX XXX XXXX"
                    class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3291d6]/20 focus:border-[#3291d6]"
                  >
                </div>

                <!-- Number of Guests -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">Number of Guests</label>
                  <select 
                    v-model="scheduleData.guests"
                    class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3291d6]/20 focus:border-[#3291d6]"
                  >
                    <option value="1">Just myself</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                    <option value="5">5+ people (group)</option>
                  </select>
                </div>

                <!-- Special Requests -->
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-2">Special Requests</label>
                  <textarea 
                    v-model="scheduleData.requests"
                    rows="3"
                    placeholder="Any specific requirements or questions..."
                    class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3291d6]/20 focus:border-[#3291d6]"
                  ></textarea>
                </div>

                <!-- Submit Button -->
                <button 
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full py-4 bg-[#E1B137] text-slate-900 font-medium rounded-xl hover:bg-[#d4a42f] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <i class="fa-solid" :class="isSubmitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'"></i>
                  {{ isSubmitting ? 'Scheduling...' : 'Request Visit' }}
                </button>

                <p class="text-xs text-slate-400 text-center">
                  We'll confirm your visit within 24 hours. You can also call us at <a href="tel:+2348129050431" class="text-[#3291d6] hover:underline">+234 812 905 0431</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </main>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Import Hero Image (keep your local image)
import heroImage from '../assets/img/our-journey-img.jpg'

// Provide fallback images so nothing is undefined
const meditationHallImage =
  'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1600'

const founderImage =
  'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&q=80&w=1600'

// Schedule Modal State
const showScheduleModal = ref(false)
const isSubmitting = ref(false)

// Schedule Form Data
const scheduleData = reactive({
  visitType: 'meditation',
  date: '',
  time: '',
  name: '',
  email: '',
  phone: '',
  guests: '1',
  requests: ''
})

// Minimum date for scheduling (today)
const minDate = computed(() => {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
})

// WhatsApp message template
const whatsappMessage = `Hello, I'm interested in visiting The Lekki Ashram.

I'd like to:
- [ ] Schedule a meditation session
- [ ] Book a personal retreat
- [ ] Take a general tour
- [ ] Learn more about programs

Preferred date: [DD/MM/YYYY]
Preferred time: [Morning/Afternoon]

My name is: [Your Name]

Thank you!`

// Initialize AOS
onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  })
})

// Open schedule modal
const openScheduleModal = () => {
  showScheduleModal.value = true
  // Prevent body scroll
  document.body.style.overflow = 'hidden'
}

// Close schedule modal
const closeScheduleModal = () => {
  showScheduleModal.value = false
  document.body.style.overflow = 'auto'
}

// Submit schedule request
const submitScheduleRequest = async () => {
  isSubmitting.value = true
  
  try {
    // Format the date for display
    const formattedDate = new Date(scheduleData.date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    
    // Create email content
    const emailBody = `
      New Visit Request from The Lekki Ashram Website
      
      Visit Details:
      - Type: ${scheduleData.visitType === 'meditation' ? 'Meditation Session' : 'Personal Retreat'}
      - Date: ${formattedDate}
      - Time: ${scheduleData.time}
      - Number of Guests: ${scheduleData.guests === '1' ? 'Just myself' : scheduleData.guests === '5' ? '5+ people (group)' : scheduleData.guests + ' people'}
      
      Personal Information:
      - Name: ${scheduleData.name}
      - Email: ${scheduleData.email}
      - Phone: ${scheduleData.phone || 'Not provided'}
      
      Special Requests:
      ${scheduleData.requests || 'None'}
      
      Submitted on: ${new Date().toLocaleString()}
    `
    
    // Option 1: Send to your backend (uncomment when backend is ready)
    /*
    const response = await fetch('/api/schedule-visit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(scheduleData)
    })
    
    if (response.ok) {
      // Success
      alert('Thank you! We\'ll confirm your visit within 24 hours.')
      closeScheduleModal()
      
      // Reset form
      Object.assign(scheduleData, {
        visitType: 'meditation',
        date: '',
        time: '',
        name: '',
        email: '',
        phone: '',
        guests: '1',
        requests: ''
      })
    } else {
      throw new Error('Failed to schedule')
    }
    */
    
    // Option 2: Send email using mailto (currently active)
    const mailtoLink = `mailto:visits@lekkiashram.org?subject=Visit Request from ${scheduleData.name}&body=${encodeURIComponent(emailBody)}`
    window.location.href = mailtoLink
    
    // Show success message
    setTimeout(() => {
      alert('Thank you! Your email client will open. Please send the email to complete your request.')
      closeScheduleModal()
      
      // Reset form
      Object.assign(scheduleData, {
        visitType: 'meditation',
        date: '',
        time: '',
        name: '',
        email: '',
        phone: '',
        guests: '1',
        requests: ''
      })
    }, 500)
    
  } catch (error) {
    console.error('Error scheduling visit:', error)
    alert('Sorry, there was an error scheduling your visit. Please try again or call us directly.')
  } finally {
    isSubmitting.value = false
  }
}

// Trustees Data
const trustees = [
  {
    name: 'Dr. Chinedu Okoro',
    role: 'Chairperson',
    expertise: 'Environmental Policy',
    bio: 'Former UNEP consultant with 20+ years in environmental policy and sustainable development.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
    linkedin: 'https://linkedin.com/in/chineduokoro',
    twitter: 'https://twitter.com/chineduokoro',
    email: 'chinedu@lekkiashram.org'
  },
  {
    name: 'Prof. Amina Ibrahim',
    role: 'Secretary',
    expertise: 'Eastern Philosophy',
    bio: 'Head of Philosophy Department at University of Lagos, specializing in Eastern philosophy.',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=800',
    linkedin: 'https://linkedin.com/in/aminaibrahim',
    twitter: 'https://twitter.com/profamina',
    email: 'amina@lekkiashram.org'
  },
  {
    name: 'Mr. Femi Adekunle',
    role: 'Treasurer',
    expertise: 'Financial Strategy',
    bio: 'CFO of Green Energy Solutions, bringing financial expertise to sustainable initiatives.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    linkedin: 'https://linkedin.com/in/femiadekunle',
    twitter: 'https://twitter.com/femi_adekunle',
    email: 'femi@lekkiashram.org'
  },
  {
    name: 'Dr. Sarah Johnson',
    role: 'Conservation Specialist',
    expertise: 'Wildlife Conservation',
    bio: 'Former WWF Africa Director with expertise in wildlife conservation and habitat protection.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=800',
    linkedin: 'https://linkedin.com/in/sarahjohnson',
    twitter: 'https://twitter.com/drsarahj',
    email: 'sarah@lekkiashram.org'
  },
  {
    name: 'Mr. Raj Patel',
    role: 'International Relations',
    expertise: 'Global Partnerships',
    bio: 'Facilitates global partnerships with Vedanta Society and other international organizations.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800',
    linkedin: 'https://linkedin.com/in/rajpatel',
    twitter: 'https://twitter.com/raj_patel',
    email: 'raj@lekkiashram.org'
  },
  {
    name: 'Mrs. Ngozi Chukwu',
    role: 'Community Development',
    expertise: 'Local Outreach',
    bio: 'Leads local outreach programs and community engagement initiatives across Lagos.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800',
    linkedin: 'https://linkedin.com/in/ngozichukwu',
    twitter: 'https://twitter.com/ngozi_c',
    email: 'ngozi@lekkiashram.org'
  }
]
</script>

<style scoped>
/* Custom styles for the About page */

/* Smooth animations */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Card hover effects */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

/* Responsive typography */
@media (max-width: 640px) {
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 2rem;
  }
}

/* Custom scroll animation */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: bounce 1s infinite;
}

/* Netflix-style hero image responsive behavior */
@media (max-width: 640px) {
  .hero-image {
    object-fit: contain;
  }
}

/* Modal transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .bg-white,
.modal-leave-active .bg-white {
  transition: transform 0.3s ease;
}

.modal-enter-from .bg-white,
.modal-leave-to .bg-white {
  transform: scale(0.95);
}

/* Form input focus styles */
input:focus, select:focus, textarea:focus {
  outline: none;
  ring: 2px solid #3291d6;
  ring-opacity: 0.2;
}

/* Disable body scroll when modal is open */
:global(body.modal-open) {
  overflow: hidden;
}
</style>