<template>
  <section class="bg-white">

    <!-- HERO HEADER -->
    <div class="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">

      <!-- <img
        src="/images/advaita-hero.jpg"
        class="absolute inset-0 w-full h-full object-cover"
      /> -->

      <div class="absolute inset-0 bg-black/50"></div>

      <div class="relative z-10 px-6 max-w-4xl">
        <h1 class="text-4xl md:text-6xl font-serif text-white mb-6">
          Advaita — The Philosophy of Non-Duality
        </h1>

        <p class="text-white/80 text-lg md:text-xl italic">
          Discover the ancient wisdom pointing to the indivisible nature of existence.
        </p>
      </div>

    </div>


    <!-- CONTENT -->
    <div class="max-w-4xl mx-auto px-6 py-20 space-y-10">

      <h2 class="text-3xl font-serif text-[#2b4b58]">
        Understanding Non-Dual Awareness
      </h2>

      <p class="text-slate-600 leading-relaxed">
        Advaita teaches that the true nature of reality is non-dual. 
        The apparent separation between the observer and the observed 
        dissolves through deep inquiry and meditation.
      </p>

      <p class="text-slate-600 leading-relaxed">
        At the Ashram, teachings and satsangs explore how awareness itself 
        is the foundation of experience. Through contemplation and guidance,
        seekers learn to recognize their original nature beyond identity and form.
      </p>


      <!-- Quote -->
      <div class="border-l-4 border-[#E1B137] pl-6 italic text-slate-500">
        “When the illusion of separation dissolves, what remains is pure awareness.”
      </div>


      <!-- CTA -->
      <div class="pt-10 flex gap-6">

        <router-link
          to="/support/meditation-programs"
          class="px-8 py-4 bg-[#E1B137] text-white uppercase text-[11px] tracking-[0.2em] font-bold hover:bg-[#2b4b58] transition"
        >
          Join Meditation
        </router-link>

        <router-link
          to="/"
          class="px-8 py-4 border border-[#2b4b58] text-[#2b4b58] uppercase text-[11px] tracking-[0.2em] font-bold hover:bg-[#2b4b58] hover:text-white transition"
        >
          Back to Home
        </router-link>

      </div>

    </div>

  </section>
</template>