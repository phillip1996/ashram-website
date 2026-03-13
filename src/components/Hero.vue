<template>
  <section class="relative w-full overflow-hidden bg-black">
    <swiper
      :modules="modules"
      :loop="true"
      effect="fade"
      :fade-effect="{ crossFade: true }"
      :speed="1800"
      :autoplay="{ delay: 7000, disableOnInteraction: false }"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      class="ashram-hero-slider w-full h-full"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="relative w-full h-[80vh] md:h-[95vh] flex items-center justify-center overflow-hidden">

          <!-- VIDEO BACKGROUND -->
          <video
            autoplay
            muted
            loop
            playsinline
            preload="auto"
            class="hero-video"
          >
            <source :src="slide.video" type="video/mp4" />
          </video>

          <!-- Dark Overlay -->
          <div class="absolute inset-0 bg-black/30 z-10"></div>
          <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50 z-10"></div>

          <!-- CONTENT -->
          <div class="relative z-20 container mx-auto px-6 text-center">
            <span class="inline-block px-6 py-2 border border-white/40 bg-black/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.4em] mb-6">
              {{ slide.category }}
            </span>

            <h1 class="text-3xl md:text-5xl lg:text-7xl font-serif font-medium text-white mb-6 max-w-5xl mx-auto leading-tight">
              {{ slide.title }}
            </h1>

            <p class="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-12 font-light italic leading-relaxed">
              {{ slide.subtitle }}
            </p>

            <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
              <!-- Philosophy Button - unique per slide -->
              <router-link 
                :to="slide.philosophyLink"
                class="w-full sm:w-auto px-10 py-4 bg-[#E1B137] text-white font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 text-center"
              >
                {{ slide.philosophyText }}
              </router-link>

              <!-- Support Button - unique per slide -->
              <router-link 
                :to="slide.supportLink"
                class="w-full sm:w-auto px-10 py-4 border border-white text-white font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 text-center"
              >
                {{ slide.supportText }}
              </router-link>
            </div>
          </div>
        </div>
      </swiper-slide>

      <div class="swiper-button-prev story-nav"></div>
      <div class="swiper-button-next story-nav"></div>
    </swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay, EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

import advaitaVideo from '../assets/videos/Non - Dualism.mp4'
import yogaVideo from '../assets/videos/Yoga & Awareness.mp4'
import wildLifeConservation from '../assets/videos/wild - life.mp4'
import functionalMedicine from '../assets/videos/functional-medicine.mp4'
import consultancy from '../assets/videos/consultancy.mp4'

const modules = [Navigation, Autoplay, EffectFade]

const slides = [
  {
    category: 'Advaita & Self-Discovery',
    title: 'Non-Dualism / Advaita',
    subtitle: 'Resolving the mysteries of life through the philosophical framework of Advaita and contemplation.',
    video: advaitaVideo,
    // Unique buttons for this slide
    philosophyText: 'Advaita Philosophy ',
    philosophyLink: '/philosophy/advaita',
    supportText: 'Support Meditation',
    supportLink: '/support/meditation-programs'
  },
  {
    category: 'Yoga & Awareness',
    title: 'Satsangs, Meditation & Consciousness',
    subtitle: 'Practices focused on awareness, discipline and inner stillness.',
    video: yogaVideo,
    philosophyText: 'Yoga Philosophy',
    philosophyLink: '/philosophy/yoga',
    supportText: 'Join Satsang',
    supportLink: '/support/satsang'
  },
  {
    category: 'Wildlife Conservation',
    title: 'Environmental Sustainability',
    subtitle: 'Guarding nature and climate for future generations.',
    video: wildLifeConservation,
    philosophyText: 'Eco-Philosophy',
    philosophyLink: '/philosophy/ecology',
    supportText: 'Support Conservation',
    supportLink: '/support/conservation'
  },
  {
    category: 'Functional Medicine',
    title: 'Root-Cause Healing',
    subtitle: 'Integrating science-based medicine with holistic wellness.',
    video: functionalMedicine,
    philosophyText: 'Healing Philosophy',
    philosophyLink: '/philosophy/functional-medicine',
    supportText: 'Support Wellness',
    supportLink: '/support/wellness'
  },
  {
    category: 'Consultancy & Therapy',
    title: 'Professional Guidance',
    subtitle: 'Empathy-driven consultancy for growth and clarity.',
    video: consultancy,
    philosophyText: 'Guidance Philosophy',
    philosophyLink: '/philosophy/consultancy',
    supportText: 'Book Session',
    supportLink: '/support/therapy'
  }
]
</script>

<style scoped>
.ashram-hero-slider {
  --swiper-navigation-color: #ffffff;
}

/* Cinematic slow zoom */
.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: slowZoom 20s ease-in-out infinite alternate;
  filter: brightness(1);
  z-index: 0;
}

@keyframes slowZoom {
  from { transform: scale(1); }
  to { transform: scale(1.08); }
}

:deep(.story-nav) {
  width: 70px !important;
  height: 70px !important;
  z-index: 50 !important;
}

:deep(.story-nav::after) {
  font-size: 26px !important;
  color: #ffffff !important;
  transition: all 0.4s ease;
}

:deep(.story-nav:hover::after) {
  color: #E1B137 !important;
  transform: scale(1.2);
}

@media (max-width: 768px) {
  :deep(.story-nav) {
    display: none !important;
  }
}
</style>