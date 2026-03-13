<template>
  <section class="bg-white">

    <!-- HERO HEADER -->
    <div class="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
      <!-- Dark overlay -->
      <div class="absolute inset-0 bg-black/50"></div>

      <div class="relative z-10 px-6 max-w-4xl">
        <h1 class="text-4xl md:text-6xl font-serif text-white mb-6">
          Consultancy & Therapy
        </h1>

        <p class="text-white/80 text-lg md:text-xl italic">
          Professional guidance and empathetic therapy sessions tailored to your growth.
        </p>
      </div>
    </div>

    <!-- PAGE CONTENT -->
    <div class="max-w-4xl mx-auto px-6 py-20 space-y-10">

      <h2 class="text-3xl font-serif text-[#2b4b58]">
        Personal Guidance for Clarity
      </h2>

      <p class="text-slate-600 leading-relaxed">
        Our consultancy and therapy sessions provide one-on-one guidance to address challenges, 
        foster self-understanding, and promote emotional and mental well-being.
      </p>

      <p class="text-slate-600 leading-relaxed">
        Sessions are tailored to individual needs, integrating mindfulness, reflective inquiry, 
        and practical strategies for personal growth.
      </p>

      <!-- Quote -->
      <div class="border-l-4 border-[#E1B137] pl-6 italic text-slate-500 my-10">
        “Clarity and transformation begin with a single step of understanding yourself.”
      </div>

      <!-- CTA BUTTONS -->
      <div class="flex flex-col sm:flex-row gap-6 mt-10">
        <router-link
          to="/support/meditation-programs"
          class="px-8 py-4 bg-[#E1B137] text-white uppercase text-[11px] tracking-[0.2em] font-bold hover:bg-[#2b4b58] transition text-center"
        >
          Explore Meditation
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