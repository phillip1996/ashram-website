<template>
  <section class="bg-white">

    <!-- HERO HEADER -->
    <div class="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
      <!-- Dark overlay -->
      <div class="absolute inset-0 bg-black/50"></div>

      <div class="relative z-10 px-6 max-w-4xl">
        <h1 class="text-4xl md:text-6xl font-serif text-white mb-6">
          Professional Guidance
        </h1>

        <p class="text-white/80 text-lg md:text-xl italic">
          Empathy-driven consultancy for growth and clarity.
        </p>
      </div>
    </div>

    <!-- PAGE CONTENT -->
    <div class="max-w-4xl mx-auto px-6 py-20 space-y-10">

      <h2 class="text-3xl font-serif text-[#2b4b58]">
        Expert Support for Your Journey
      </h2>

      <p class="text-slate-600 leading-relaxed">
        Our consultancy services provide empathetic guidance to individuals seeking 
        clarity, personal growth, and professional support. Through tailored sessions, 
        we help uncover solutions and navigate life’s challenges.
      </p>

      <p class="text-slate-600 leading-relaxed">
        At the Ashram, therapy and guidance integrate mindfulness and holistic approaches 
        to ensure every session is meaningful and transformative.
      </p>

      <!-- Quote -->
      <div class="border-l-4 border-[#E1B137] pl-6 italic text-slate-500 my-10">
        “Clarity comes when guidance meets understanding and empathy.”
      </div>

      <!-- CTA BUTTONS -->
      <div class="flex flex-col sm:flex-row gap-6 mt-10">
        <router-link
          to="/support/therapy"
          class="px-8 py-4 bg-[#E1B137] text-white uppercase text-[11px] tracking-[0.2em] font-bold hover:bg-[#2b4b58] transition text-center"
        >
          Book Session
        </router-link>

        <router-link
          to="/"
          class="px-8 py-4 border border-[#2b4b58] text-[#2b4b58] uppercase text-[11px] tracking-[0.2em] font-bold hover:bg-[#2b4b58] hover:text-white transition text-center"
        >
          Back to Home
        </router-link>
      </div>

    </div>

  </section>
</template>