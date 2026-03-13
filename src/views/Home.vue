<template>
  <div class="page-wrapper font-montserrat">

    <!-- Navbar & Hero already wrapped -->
    
    <Hero />

    <!-- =========================================================
         SECTION 1 — ABOUT STRIP
    ========================================================= -->
    <section class="py-20 md:py-28 bg-white">
      <div class="max-w-6xl mx-auto px-6 md:px-12">
        <div class="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          <!-- Image -->
          <div class="w-full lg:w-5/12 relative">
            <div class="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://media.istockphoto.com/id/2213698228/photo/two-female-friends-practicing-meditation-at-a-wellness-resort.webp?a=1&b=1&s=612x612&w=0&k=20&c=wXuR1mUf9VNtNpDaGNXbfa2LitqBdQn_IxI2wtgTMk0="
                alt="The Lekki Ashram"
                class="w-full h-80 md:h-[480px] object-cover"
              />
            </div>
            <!-- Gold accent border -->
            <div class="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#E1B137]/30 rounded-xl -z-10"></div>
            <!-- Years badge -->
            <div class="absolute -top-5 -left-5 w-24 h-24 bg-[#E1B137] rounded-full flex flex-col items-center justify-center shadow-xl z-10">
              <span class="text-white font-bold text-2xl leading-none font-serif">4+</span>
              <span class="text-white text-[9px] uppercase tracking-widest font-semibold mt-0.5 text-center leading-tight">Years of<br/>Wisdom</span>
            </div>
          </div>

          <!-- Text -->
          <div class="w-full lg:w-7/12 space-y-7">
            <div>
              <div class="flex items-center gap-3 mb-4">
                <div class="w-8 h-0.5 bg-[#E1B137]"></div>
                <span class="text-[#E1B137] text-[10px] font-bold uppercase tracking-[0.35em]">The Lekki Ashram</span>
              </div>
              <h2 class="text-4xl md:text-5xl font-serif font-medium text-[#2b4b58] leading-tight">
                A Sanctuary for<br/>
                <em class="not-italic text-[#E1B137]">Higher Living</em>
              </h2>
            </div>

            <p class="text-slate-500 text-base leading-relaxed">
              Founded on the principles of Advaita and natural preservation, The Lekki Ashram is more than a center — it is a movement toward human evolution, where ecological stewardship meets philosophical clarity.
            </p>

            <div class="grid grid-cols-2 gap-6 py-6 border-y border-slate-100">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <div class="w-4 h-0.5 bg-[#E1B137]"></div>
                  <p class="text-[10px] font-bold uppercase tracking-widest text-[#2b4b58]">Our Mission</p>
                </div>
                <p class="text-slate-500 text-sm leading-relaxed">Expand human capacity through mental clarity and ecological harmony.</p>
              </div>
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <div class="w-4 h-0.5 bg-[#E1B137]"></div>
                  <p class="text-[10px] font-bold uppercase tracking-widest text-[#2b4b58]">Our Vision</p>
                </div>
                <p class="text-slate-500 text-sm leading-relaxed">A global society operating in a state of high consciousness.</p>
              </div>
            </div>

            <router-link to="/about"
              class="inline-flex items-center gap-3 bg-[#2b4b58] text-white px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#E1B137] transition-all duration-300 group">
              Explore Our Path
              <i class="fa-solid fa-arrow-right-long group-hover:translate-x-1 transition-transform"></i>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================
         SECTION 2 — WHAT WE OFFER (5 pillars)
    ========================================================= -->
    <section class="py-20 md:py-28 bg-[#f8f7f4]">
      <div class="max-w-6xl mx-auto px-6 md:px-12">
        <div class="text-center mb-14">
          <div class="flex items-center justify-center gap-3 mb-4">
            <div class="w-8 h-0.5 bg-[#E1B137]"></div>
            <span class="text-[#E1B137] text-[10px] font-bold uppercase tracking-[0.35em]">Our Offerings</span>
            <div class="w-8 h-0.5 bg-[#E1B137]"></div>
          </div>
          <h2 class="text-4xl md:text-5xl font-serif font-medium text-[#2b4b58] leading-tight">
            Five Pillars of <em class="not-italic text-[#E1B137]">Transformation</em>
          </h2>
          <p class="text-slate-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Each pillar is a doorway — into stillness, into nature, into the self.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(pillar, i) in pillars" :key="i"
            class="group relative bg-white border border-slate-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-400 overflow-hidden">
            <!-- Gold line on hover -->
            <div class="absolute bottom-0 left-0 h-0.5 w-0 bg-[#E1B137] group-hover:w-full transition-all duration-500"></div>

            <div class="w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-colors duration-300"
              :class="i % 2 === 0 ? 'bg-[#E1B137]/10 group-hover:bg-[#E1B137]' : 'bg-[#2b4b58]/10 group-hover:bg-[#2b4b58]'">
              <i :class="[pillar.icon, 'text-xl transition-colors duration-300',
                i % 2 === 0 ? 'text-[#E1B137] group-hover:text-white' : 'text-[#2b4b58] group-hover:text-white']"></i>
            </div>

            <h3 class="text-[#2b4b58] font-serif text-xl font-medium mb-3 group-hover:text-[#E1B137] transition-colors">
              {{ pillar.title }}
            </h3>
            <p class="text-slate-400 text-sm leading-relaxed">{{ pillar.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================
         SECTION 3 — EXPERIENCE TIMELINE (dark)
    ========================================================= -->
    <section class="py-20 md:py-28 bg-[#2b4b58] relative overflow-hidden">
      <!-- Subtle dot pattern -->
      <div class="absolute inset-0 opacity-[0.04]"
        style="background-image: radial-gradient(circle, white 1px, transparent 1px); background-size: 28px 28px;"></div>

      <div class="relative max-w-6xl mx-auto px-6 md:px-12">
        <div class="text-center mb-14">
          <div class="flex items-center justify-center gap-3 mb-4">
            <div class="w-8 h-0.5 bg-[#E1B137]"></div>
            <span class="text-[#E1B137] text-[10px] font-bold uppercase tracking-[0.35em]">Our Journey</span>
            <div class="w-8 h-0.5 bg-[#E1B137]"></div>
          </div>
          <h2 class="text-4xl md:text-5xl font-serif font-medium text-white leading-tight">
            Experience that <em class="not-italic text-[#E1B137]">Shaped Us</em>
          </h2>
          <p class="text-white/50 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Our journey reflects deliberate growth — defined by ecological stewardship, philosophical clarity, and institutional responsibility.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="(item, i) in experiences" :key="i"
            class="group relative bg-white/5 border border-white/10 p-8 hover:border-[#E1B137]/40 hover:bg-white/10 transition-all duration-400">
            <div class="flex items-start gap-4 mb-5">
              <div class="w-12 h-12 bg-[#E1B137] flex items-center justify-center shrink-0">
                <span class="text-white font-bold font-serif text-base">{{ item.year.slice(2) }}</span>
              </div>
              <div>
                <p class="text-[#E1B137] text-[10px] font-bold uppercase tracking-widest">{{ item.year }}</p>
                <h3 class="text-white font-serif text-xl font-medium mt-0.5">{{ item.title }}</h3>
              </div>
            </div>
            <p class="text-white/50 text-sm leading-relaxed">{{ item.description }}</p>
            <!-- Bottom accent -->
            <div class="absolute bottom-0 left-0 h-0.5 w-0 bg-[#E1B137] group-hover:w-full transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================
         SECTION 4 — PODCAST / DIALOGUES
    ========================================================= -->
    <section class="py-20 md:py-28 bg-white">
      <div class="max-w-6xl mx-auto px-6 md:px-12">

        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="w-8 h-0.5 bg-[#E1B137]"></div>
              <span class="text-[#E1B137] text-[10px] font-bold uppercase tracking-[0.35em]">Wisdom Series</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-serif font-medium text-[#2b4b58] leading-tight">
              The Ashram <em class="not-italic text-[#E1B137]">Dialogues</em>
            </h2>
          </div>
          <p class="text-slate-400 max-w-xs text-sm leading-relaxed">
            Deep conversations on consciousness, ecology, and the architecture of inner peace.
          </p>
        </div>

        <!-- Podcast Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="podcast in visiblePodcasts" :key="podcast.id"
            class="group bg-white border border-slate-100 hover:shadow-xl transition-all duration-400 overflow-hidden">

            <!-- Thumbnail -->
            <div class="relative h-48 overflow-hidden">
              <img :src="podcast.thumbnail" :alt="podcast.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-[#2b4b58]/70 to-transparent"></div>

              <!-- Play button -->
              <button @click="playPodcast(podcast)"
                class="absolute bottom-3 right-3 w-11 h-11 flex items-center justify-center shadow-lg transition-all duration-200"
                :class="currentPlaying === podcast.id ? 'bg-[#E1B137]' : 'bg-white hover:bg-[#E1B137] group-hover:scale-105'">
                <i :class="[
                  'text-sm',
                  currentPlaying === podcast.id && isPlaying ? 'fa-solid fa-pause' : 'fa-solid fa-play ml-0.5',
                  currentPlaying === podcast.id ? 'text-white' : 'text-[#2b4b58] group-hover:text-white'
                ]"></i>
              </button>

              <div class="absolute top-3 left-3">
                <span class="bg-[#E1B137] text-white text-[9px] font-bold px-2.5 py-1 uppercase tracking-widest">
                  Ep. {{ podcast.episode }}
                </span>
              </div>
              <div class="absolute top-3 right-3 bg-black/50 text-white text-[10px] px-2 py-1 backdrop-blur-sm">
                {{ podcast.duration }}
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <div class="flex justify-between items-center mb-2">
                <span class="text-[#E1B137] text-[9px] font-bold uppercase tracking-[0.25em]">{{ podcast.category }}</span>
                <span class="text-slate-400 text-xs">{{ podcast.date }}</span>
              </div>
              <h3 class="font-serif text-[#2b4b58] text-lg font-medium mb-2 leading-snug group-hover:text-[#E1B137] transition-colors">
                {{ podcast.title }}
              </h3>
              <p class="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-2">{{ podcast.description }}</p>

              <div class="flex items-center justify-between pt-4 border-t border-slate-100">
                <div class="flex items-center gap-2.5">
                  <div class="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <img :src="podcast.speaker.avatar" :alt="podcast.speaker.name" class="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p class="text-[#2b4b58] text-xs font-semibold">{{ podcast.speaker.name }}</p>
                    <p class="text-slate-400 text-[10px]">{{ podcast.speaker.role }}</p>
                  </div>
                </div>
                <div class="flex items-center gap-3 text-slate-400">
                  <span class="text-xs flex items-center gap-1">
                    <i class="fa-solid fa-headphones text-[10px]"></i> {{ podcast.listens }}
                  </span>
                  <button @click="toggleBookmark(podcast)"
                    class="hover:text-[#E1B137] transition-colors p-1">
                    <i class="fa-solid fa-bookmark text-sm" :class="podcast.bookmarked ? 'text-[#E1B137]' : ''"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Toggle -->
        <div class="text-center mt-10 space-y-3">
          <p class="text-slate-400 text-xs">Showing {{ visiblePodcasts.length }} of {{ podcasts.length }} episodes</p>
          <button @click="toggleAllEpisodes"
            class="inline-flex items-center gap-2 border border-slate-300 text-slate-600 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#2b4b58] hover:text-white hover:border-[#2b4b58] transition-all group">
            {{ showAllEpisodes ? 'Show Less' : 'Browse All Episodes' }}
            <i class="fa-solid transition-all" :class="showAllEpisodes ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
          </button>
        </div>

        <!-- Sticky Player -->
        <transition name="player-up">
          <div v-if="currentPodcast"
            class="fixed bottom-5 left-1/2 -translate-x-1/2 w-[96vw] max-w-2xl z-50 bg-white border border-slate-200 shadow-2xl overflow-hidden">
            <!-- Progress -->
            <div class="h-0.5 bg-slate-100">
              <div class="h-full bg-[#E1B137] transition-all duration-300" :style="{ width: `${playbackProgress}%` }"></div>
            </div>
            <div class="flex items-center gap-4 px-4 py-3">
              <div class="w-12 h-12 overflow-hidden shrink-0">
                <img :src="currentPodcast.thumbnail" class="w-full h-full object-cover" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-[#2b4b58] text-sm font-semibold truncate font-serif">{{ currentPodcast.title }}</p>
                <p class="text-slate-400 text-xs truncate">{{ currentPodcast.speaker.name }} · {{ formatTime(currentTime) }} / {{ currentPodcast.duration }}</p>
              </div>
              <div class="flex items-center gap-1 shrink-0">
                <button @click="skipBackward" class="w-9 h-9 flex items-center justify-center text-slate-400 hover:text-[#2b4b58] transition-colors hover:bg-slate-100">
                  <i class="fa-solid fa-backward-step"></i>
                </button>
                <button @click="togglePlay"
                  class="w-10 h-10 flex items-center justify-center text-white transition-colors"
                  :class="isPlaying ? 'bg-[#E1B137] hover:bg-[#d4a52e]' : 'bg-[#2b4b58] hover:bg-[#E1B137]'">
                  <i class="fa-solid text-sm" :class="isPlaying ? 'fa-pause' : 'fa-play ml-0.5'"></i>
                </button>
                <button @click="skipForward" class="w-9 h-9 flex items-center justify-center text-slate-400 hover:text-[#2b4b58] transition-colors hover:bg-slate-100">
                  <i class="fa-solid fa-forward-step"></i>
                </button>
                <button @click="closePlayer" class="w-9 h-9 flex items-center justify-center text-slate-300 hover:text-slate-500 transition-colors hover:bg-slate-100 ml-1">
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </section>

    <!-- =========================================================
         SECTION 5 — LATEST INSIGHTS / BLOG
    ========================================================= -->
    <section class="py-20 md:py-28 bg-[#f8f7f4]">
      <div class="max-w-6xl mx-auto px-6 md:px-12">

        <div class="text-center mb-14">
          <div class="flex items-center justify-center gap-3 mb-4">
            <div class="w-8 h-0.5 bg-[#E1B137]"></div>
            <span class="text-[#E1B137] text-[10px] font-bold uppercase tracking-[0.35em]">Knowledge Base</span>
            <div class="w-8 h-0.5 bg-[#E1B137]"></div>
          </div>
          <h2 class="text-4xl md:text-5xl font-serif font-medium text-[#2b4b58]">
            Latest <em class="not-italic text-[#E1B137]">Insights</em>
          </h2>
          <p class="text-slate-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Reflections on the intersection of nature, consciousness, and social order.
          </p>
        </div>

        <!-- Featured Post -->
        <div class="bg-white border border-slate-100 overflow-hidden shadow-md hover:shadow-xl transition-all duration-400 mb-10">
          <div class="flex flex-col lg:flex-row">
            <div class="lg:w-5/12 relative overflow-hidden h-64 lg:h-auto">
              <img :src="concencrationImg" alt="Consecration"
                class="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              <div class="absolute top-4 left-4">
                <span class="bg-[#E1B137] text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest">Featured</span>
              </div>
            </div>
            <div class="lg:w-7/12 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <div class="flex items-center gap-3 text-slate-400 text-xs mb-4">
                <span><i class="fa-regular fa-calendar mr-1"></i>18 Oct 2025</span>
                <span class="w-1 h-1 rounded-full bg-slate-200"></span>
                <span class="text-[#E1B137] font-semibold">Editorial</span>
              </div>
              <h3 class="font-serif text-[#2b4b58] text-2xl md:text-3xl font-medium mb-4 leading-tight">
                The Consecration of The Lekki Ashram
              </h3>
              <p class="text-slate-500 text-sm leading-relaxed mb-6">
                A defining moment marking the formal consecration — establishing it as a sanctuary for higher living and ecological stewardship.
              </p>
              <ul class="space-y-2 mb-7">
                <li v-for="pt in featuredPoints" :key="pt" class="flex items-start gap-2.5 text-slate-600 text-sm">
                  <div class="w-1.5 h-1.5 bg-[#E1B137] mt-1.5 shrink-0"></div>
                  {{ pt }}
                </li>
              </ul>
              <router-link to="/blog/featured"
                class="inline-flex items-center gap-3 bg-[#2b4b58] text-white px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#E1B137] transition-all duration-300 self-start group">
                Read Full Article
                <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </router-link>
            </div>
          </div>
        </div>

        <!-- Articles Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="article in recentArticles" :key="article.title"
            class="group bg-white border border-slate-100 overflow-hidden hover:shadow-lg transition-all duration-400">
            <div class="h-44 overflow-hidden relative">
              <img :src="article.image" :alt="article.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-[#2b4b58]/20 to-transparent"></div>
            </div>
            <div class="p-6">
              <div class="flex justify-between items-center mb-2">
                <span class="text-[#E1B137] text-[9px] font-bold uppercase tracking-[0.25em]">{{ article.category }}</span>
                <span class="text-slate-400 text-xs">{{ article.date }}</span>
              </div>
              <h4 class="font-serif text-[#2b4b58] text-lg font-medium mb-2 group-hover:text-[#E1B137] transition-colors">
                {{ article.title }}
              </h4>
              <p class="text-slate-400 text-sm mb-4 line-clamp-2">{{ article.description }}</p>
              <div class="flex items-center justify-between pt-3 border-t border-slate-100">
                <router-link :to="article.link"
                  class="text-[#2b4b58] text-xs font-bold uppercase tracking-wider hover:text-[#E1B137] transition-colors inline-flex items-center gap-1.5">
                  Read More <i class="fa-solid fa-chevron-right text-[9px]"></i>
                </router-link>
                <span class="text-slate-400 text-xs">{{ article.readTime }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-10">
          <router-link to="/blog"
            class="inline-flex items-center gap-3 border border-slate-300 text-slate-600 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#2b4b58] hover:text-white hover:border-[#2b4b58] transition-all group">
            View All Articles
            <i class="fa-solid fa-arrow-right-long group-hover:translate-x-1 transition-transform"></i>
          </router-link>
        </div>
      </div>
    </section>

    <!-- =========================================================
         SECTION 6 — PARTNERS (Continuous Auto-sliding)
    ========================================================= -->
    <section class="py-20 md:py-28 bg-white border-t border-slate-100 overflow-hidden">
      <div class="max-w-6xl mx-auto px-6 md:px-12">
        <div class="text-center mb-14">
          <div class="flex items-center justify-center gap-3 mb-4">
            <div class="w-8 h-0.5 bg-[#E1B137]"></div>
            <span class="text-[#E1B137] text-[10px] font-bold uppercase tracking-[0.35em]">Global Network</span>
            <div class="w-8 h-0.5 bg-[#E1B137]"></div>
          </div>
          <h2 class="text-4xl md:text-5xl font-serif font-medium text-[#2b4b58]">
            Partners & <em class="not-italic text-[#E1B137]">Affiliations</em>
          </h2>
          <p class="text-slate-400 mt-4 text-sm">Collaborating with world-class organizations to foster ecological and social order.</p>
        </div>

        <!-- Auto-sliding carousel container -->
        <div class="relative">
          <!-- Gradient fade on edges -->
          <div class="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div class="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <!-- Sliding track - continuous animation -->
          <div class="overflow-hidden">
            <div 
              class="flex gap-5 py-4 sliding-track"
              :style="{ 
                transform: `translateX(-${slidePosition}px)`,
              }"
            >
              <!-- Quadruple duplicate partners for seamless infinite loop -->
              <div 
                v-for="(partner, index) in infinitePartners" 
                :key="index"
                class="group bg-[#f8f7f4] border border-slate-100 p-6 flex flex-col items-center gap-3 hover:border-[#E1B137]/40 hover:shadow-md transition-all duration-400 min-w-[200px]"
              >
                <img v-if="partner.logo" :src="partner.logo" :alt="partner.name"
                  class="h-16 w-auto object-contain" /> <!-- Original colors, no grayscale -->
                <div class="text-center">
                  <p class="text-[#2b4b58] text-xs font-semibold">{{ partner.name }}</p>
                  <p class="text-slate-400 text-[10px] uppercase tracking-widest mt-0.5">{{ partner.location }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================
         SECTION 7 — NEWS & UPDATES
    ========================================================= -->
    <section class="py-20 md:py-28 bg-[#f8f7f4]">
      <div class="max-w-6xl mx-auto px-6 md:px-12">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="w-8 h-0.5 bg-[#E1B137]"></div>
              <span class="text-[#E1B137] text-[10px] font-bold uppercase tracking-[0.35em]">Latest Information</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-serif font-medium text-[#2b4b58]">
              News & <em class="not-italic text-[#E1B137]">Updates</em>
            </h2>
          </div>
          <router-link to="/news"
            class="inline-flex items-center gap-2 bg-[#2b4b58] text-white px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#E1B137] transition-all duration-300 group">
            View More <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
          </router-link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="(news, i) in newsItems" :key="i"
            class="group bg-white border border-slate-100 overflow-hidden hover:shadow-lg transition-all duration-400">
            <div class="relative h-48 overflow-hidden">
              <img :src="news.image" :alt="news.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div class="absolute top-3 left-3">
                <span class="bg-white/90 text-[#2b4b58] text-[9px] font-bold px-2.5 py-1 uppercase tracking-widest shadow-sm">
                  {{ news.category }}
                </span>
              </div>
            </div>
            <div class="p-6">
              <div class="flex gap-2 text-slate-400 text-xs mb-3">
                <span>{{ news.date }}</span><span>·</span><span>{{ news.readTime }}</span>
              </div>
              <h3 class="font-serif text-[#2b4b58] text-lg font-medium mb-2 group-hover:text-[#E1B137] transition-colors">
                {{ news.title }}
              </h3>
              <p class="text-slate-400 text-sm mb-4 line-clamp-2">{{ news.description }}</p>
              <router-link :to="news.link"
                class="text-[#2b4b58] text-xs font-bold uppercase tracking-wider hover:text-[#E1B137] transition-colors inline-flex items-center gap-1.5">
                Read More <i class="fa-solid fa-chevron-right text-[9px]"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================
         SECTION 8 — VISIT US
    ========================================================= -->
    <section class="bg-white border-t border-slate-100">
      <div class="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-36">

        <div class="text-center mb-14">
          <div class="flex items-center justify-center gap-3 mb-5">
            <div class="w-8 h-px bg-[#E1B137]"></div>
            <span class="text-[#E1B137] text-[10px] font-bold uppercase tracking-[0.35em] font-display">Location</span>
            <div class="w-8 h-px bg-[#E1B137]"></div>
          </div>

          <h2 class="font-display text-4xl md:text-5xl text-[#2b4b58]">
            Find Your <em class="not-italic text-[#E1B137]">Sanctuary</em>
          </h2>

          <p class="text-slate-400 mt-4 max-w-md mx-auto text-sm leading-relaxed">
            Located in the heart of Lekki's ecological reserve, accessible to seekers from around the world.
          </p>
        </div>

        <!-- MAP -->
        <div class="overflow-hidden border border-slate-200 shadow-md h-[320px] md:h-[420px]">
          <iframe
            src="https://maps.google.com/maps?q=07%20Kayode%20I%20Micah%20Street%20Meadow%20View%20Estate%20Lekki%20Lagos%20Nigeria&z=17&output=embed"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy">
          </iframe>
        </div>

        <!-- Direction CTA -->
        <div class="text-center mt-8">
          <a
            href="https://www.google.com/maps/search/?api=1&query=07+Kayode+I+Micah+Street+Meadow+View+Estate+Lekki+Lagos+Nigeria"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-3 bg-[#2b4b58] text-white px-8 py-4 font-display font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-[#E1B137] hover:text-[#0d1e26] transition-all duration-300 group"
          >
            <i class="fa-solid fa-location-dot"></i>
            Get Directions
            <i class="fa-solid fa-arrow-right-long text-xs group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>

        <!-- Address -->
        <div class="text-center mt-6 text-slate-500 text-sm">
          <i class="fa-solid fa-map-pin text-[#E1B137] mr-2"></i>
          07, Kayode I Micah Street, Meadow View Estate off Abraham Adesanya-Ogombo Rd, Lekki, Scheme 2, Lagos, Nigeria
        </div>

      </div>
    </section>
    <!-- <Footer/> -->
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import Hero from '../components/Hero.vue'
import Footer from '../components/Footer.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Images
import unepLogo from '../assets/img/UNEP-logo.png'
import ncfLogo from '../assets/img/NCF-logo.png'
import vedantaLogo from '../assets/img/vendata-logo.png'
import WWFLogo from '../assets/img/WWF-logo.png'
import concencrationImg from '../assets/img/concencration.jpg'
import indianExpo from '../assets/img/Indian-Expo.jpg'

// Audio (optional - comment out if files don't exist)
import launchingAshramAudio from '../assets/audio/launching-ashram.mp3'

// ——— Static data ———
const pillars = [
  { icon: 'fa-solid fa-om',          title: 'Advaita & Self-Discovery',  description: 'Resolving the mysteries of life through the philosophical framework of Advaita and contemplation.' },
  { icon: 'fa-solid fa-spa',         title: 'Yoga & Awareness',          description: 'Practices focused on awareness, discipline and inner stillness through meditation and satsang.' },
  { icon: 'fa-solid fa-leaf',        title: 'Wildlife Conservation',     description: 'Guarding nature and climate for future generations through active ecological stewardship.' },
  { icon: 'fa-solid fa-heart-pulse', title: 'Functional Medicine',       description: 'Integrating science-based medicine with holistic wellness for root-cause healing.' },
  { icon: 'fa-solid fa-comments',    title: 'Consultancy & Therapy',     description: 'Empathy-driven consultancy for personal growth and professional clarity.' },
  { icon: 'fa-solid fa-globe',       title: 'Global Outreach',           description: 'Education, dialogue, and international collaborations toward a conscious society.' },
]

const experiences = [
  { year: '2024', title: 'Foundation',             description: 'Establishment of the Ashram as a conscious living institution rooted in Advaita and ecology.' },
  { year: '2025', title: 'Ecological Integration', description: 'Active conservation programs and global environmental partnerships with UNEP and WWF.' },
  { year: '2026', title: 'Global Outreach',        description: 'International education, philosophical dialogues, and cross-cultural collaborations.' }
]

const featuredPoints = [
  'Ceremonial rituals blending ancient wisdom with modern consciousness',
  'Community gathering of seekers and environmental stewards',
  'Blessings from spiritual leaders across traditions'
]

const recentArticles = [
  { title: 'Indian Professional Forum',   category: 'Meditation', date: '10 Dec 2025', description: 'Establishing a sacred morning routine for mental clarity and spiritual connection.',  image: indianExpo,      link: '/blog/morning-meditation', readTime: '5 min read' },
  { title: 'Water Conservation Practices', category: 'Ecology',    date: '08 Dec 2025', description: 'Traditional water conservation methods adapted for modern ecological stewardship.',    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=600', link: '/blog/water-conservation',  readTime: '7 min read' },
  { title: 'Dialogue with Modernity',      category: 'Philosophy', date: '05 Dec 2025', description: 'Bridging ancient wisdom with contemporary challenges in consciousness and society.',   image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=80&w=600', link: '/blog/modernity-dialogue', readTime: '6 min read' }
]

const partners = [
  { name: 'UNEP',                          logo: unepLogo,    location: 'Global'   },
  { name: 'Nigerian Conservation Foundation', logo: ncfLogo,  location: 'Nigeria'  },
  { name: 'Vedanta Society',               logo: vedantaLogo, location: 'New York' },
  { name: 'World Wildlife Fund',           logo: WWFLogo,     location: 'Canada'   }
]

// Quadruple duplicate partners for seamless infinite loop
const infinitePartners = computed(() => [...partners, ...partners, ...partners, ...partners])

const newsItems = [
  { title: 'Indian Professional Forum',      description: 'Join us for a week-long intensive meditation retreat focused on inner silence.',  date: '15 Jan 2026', category: 'EVENT',        readTime: '3 min read', image: indianExpo, link: '/news/meditation-retreat-2026' },
  { title: 'New Ecological Conservation Program', description: 'Launching our mangrove restoration project in partnership with NCF.',              date: '12 Jan 2026', category: 'CONSERVATION', readTime: '4 min read', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=600', link: '/news/mangrove-restoration'    },
  { title: 'Philosophy Lecture Series',           description: 'Monthly discourse on Advaita Vedanta and modern consciousness.',                   date: '10 Jan 2026', category: 'EDUCATION',    readTime: '5 min read', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600', link: '/news/philosophy-lectures'     }
]

const contactInfo = [
  { label: 'Address', icon: 'fa-solid fa-location-dot', accent: 'gold', value: 'The Lekki Ashram<br/>Ogombo Abraham Adesanya Ajah<br/>Lagos, Nigeria' },
  { label: 'Contact', icon: 'fa-solid fa-phone',        accent: 'teal', value: '+234 906 925 8377<br/>info@lekkiashram.com' },
  { label: 'Hours',   icon: 'fa-solid fa-clock',        accent: 'gold', value: 'Mon – Thurs: 10AM – 3PM<br/>Sunday: By appointment' }
]

// ——— Auto-sliding partners ———
const slidePosition = ref(0)
let slideInterval = null
const slideSpeed = 0.8 // pixels per frame - adjust for speed (higher = faster)

const startSliding = () => {
  if (slideInterval) return
  slideInterval = setInterval(() => {
    // Calculate width of one partner card including gap
    const cardWidth = 200 + 20 // card width + gap (20px)
    const totalWidth = partners.length * cardWidth
    
    slidePosition.value += slideSpeed
    
    // Reset when we've scrolled through one full set
    if (slidePosition.value >= totalWidth) {
      slidePosition.value = 0
    }
  }, 16) // ~60fps
}

// ——— Podcast player ———
// Create a placeholder audio URL or use empty string
const placeholderAudio = '' // Replace with actual audio file path when available

const podcasts = ref([
  { id: 1, episode: '01', title: 'Silence as Infrastructure', description: 'Why silence is necessary for societal stability and personal growth.', date: 'Jan 15, 2026', duration: '48:22', durationSeconds: 2902, category: 'CONSCIOUSNESS', thumbnail: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=800', audio: placeholderAudio, listens: '12.5K', bookmarked: true,  speaker: { name: 'Dr. Arjun Patel', role: 'Senior Philosopher',  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200' } },
  { id: 2, episode: '02', title: 'Nature as Governance',      description: 'Ecological systems as frameworks for human organization.',             date: 'Feb 22, 2026', duration: '52:10', durationSeconds: 3130, category: 'ECOLOGY',       thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800', audio: placeholderAudio, listens: '8.7K',  bookmarked: false, speaker: { name: 'Maya Sharma',     role: 'Ecological Director', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=200' } },
  { id: 3, episode: '03', title: 'The Inner Order',           description: 'Exploring the cost of psychological disorder and paths to mental harmony.', date: 'Mar 18, 2026', duration: '39:45', durationSeconds: 2385, category: 'PSYCHOLOGY',  thumbnail: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&q=80&w=800', audio: placeholderAudio, listens: '15.2K', bookmarked: true,  speaker: { name: 'Ravi Desai',      role: 'Mindfulness Guide',   avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200' } },
  { id: 4, episode: '04', title: 'The Art of Stillness',      description: 'Exploring the transformative power of silence in our chaotic modern world.', date: 'Apr 5, 2026',  duration: '45:30', durationSeconds: 2730, category: 'MEDITATION', thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800', audio: placeholderAudio, listens: '9.3K',  bookmarked: false, speaker: { name: 'Dr. Arjun Patel', role: 'Senior Philosopher',  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200' } },
  { id: 5, episode: '05', title: 'Ecological Consciousness',  description: 'How our relationship with nature shapes our inner and outer worlds.',     date: 'May 12, 2026', duration: '51:15', durationSeconds: 3075, category: 'ECOLOGY',    thumbnail: 'https://images.unsplash.com/photo-1426604966841-d7cdacbb7b8c?auto=format&fit=crop&q=80&w=800', audio: placeholderAudio, listens: '11.7K', bookmarked: true,  speaker: { name: 'Maya Sharma',     role: 'Ecological Director', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=200' } },
  { id: 6, episode: '06', title: 'The Architecture of Peace', description: 'Designing spaces that promote inner tranquility and social harmony.',     date: 'Jun 20, 2026', duration: '42:40', durationSeconds: 2560, category: 'PHILOSOPHY', thumbnail: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800', audio: placeholderAudio, listens: '13.2K', bookmarked: false, speaker: { name: 'Ravi Desai',      role: 'Mindfulness Guide',   avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200' } }
])

const showAllEpisodes  = ref(false)
const currentPlaying   = ref(null)
const currentPodcast   = ref(null)
const isPlaying        = ref(false)
const volume           = ref(0.7)
const currentTime      = ref(0)
const playbackProgress = ref(0)
const audioElement     = ref(null)

const visiblePodcasts   = computed(() => showAllEpisodes.value ? podcasts.value : podcasts.value.slice(0, 3))
const toggleAllEpisodes = () => { showAllEpisodes.value = !showAllEpisodes.value }

const playPodcast = async (podcast) => {
  if (currentPlaying.value === podcast.id) { togglePlay(); return }
  
  // If no audio source, just simulate or show message
  if (!podcast.audio) {
    console.log('Audio file not available')
    return
  }
  
  audioElement.value?.pause()
  if (audioElement.value) audioElement.value.currentTime = 0
  currentPlaying.value = podcast.id
  currentPodcast.value = podcast
  audioElement.value.src = podcast.audio
  try { 
    await audioElement.value.play(); 
    isPlaying.value = true 
  } catch (e) { 
    console.error('Playback failed:', e) 
  }
}

const togglePlay = async () => {
  if (!audioElement.value || !currentPodcast.value) return
  if (isPlaying.value) { 
    audioElement.value.pause(); 
    isPlaying.value = false 
  } else { 
    try { 
      await audioElement.value.play(); 
      isPlaying.value = true 
    } catch (e) { 
      console.error('Playback failed:', e) 
    } 
  }
}

const closePlayer    = () => { 
  audioElement.value?.pause(); 
  isPlaying.value = false; 
  currentPlaying.value = null; 
  currentPodcast.value = null; 
  currentTime.value = 0; 
  playbackProgress.value = 0 
}

const skipBackward   = () => { 
  if (audioElement.value) 
    audioElement.value.currentTime = Math.max(0, audioElement.value.currentTime - 15) 
}

const skipForward    = () => { 
  if (audioElement.value) 
    audioElement.value.currentTime = Math.min(audioElement.value.duration || 0, audioElement.value.currentTime + 30) 
}

const toggleBookmark = (podcast) => { 
  podcast.bookmarked = !podcast.bookmarked 
}

const updateProgress = () => {
  if (!audioElement.value || !currentPodcast.value) return
  currentTime.value = audioElement.value.currentTime
  playbackProgress.value = (currentTime.value / currentPodcast.value.durationSeconds) * 100
}

const formatTime = (s) => {
  if (!s && s !== 0) return '0:00'
  const minutes = Math.floor(s / 60)
  const seconds = Math.floor(s % 60)
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

watch(volume, (v) => { 
  if (audioElement.value) 
    audioElement.value.volume = v 
})

// ——— Lifecycle ———
onMounted(() => {
  AOS.init({ duration: 800, once: true, offset: 40, easing: 'ease-out' })
  audioElement.value = new Audio()
  audioElement.value.volume = volume.value
  audioElement.value.addEventListener('timeupdate', updateProgress)
  audioElement.value.addEventListener('ended', () => {
    isPlaying.value = false
    playbackProgress.value = 0
    currentTime.value = 0
  })
  
  // Start auto-sliding continuously
  startSliding()
})

onUnmounted(() => {
  if (audioElement.value) { 
    audioElement.value.pause(); 
    audioElement.value.src = '' 
  }
  if (slideInterval) {
    clearInterval(slideInterval)
    slideInterval = null
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800&display=swap');

.font-montserrat { font-family: 'Montserrat', sans-serif; }

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Player transition */
.player-up-enter-active,
.player-up-leave-active {
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.player-up-enter-from,
.player-up-leave-to {
  transform: translate(-50%, 120%);
  opacity: 0;
}

/* Auto-sliding partners */
.min-w-\[200px\] {
  min-width: 200px;
}

/* Continuous smooth sliding */
.sliding-track {
  will-change: transform;
  transition: transform 0.05s linear; /* Ultra smooth */
}

/* Optional: slow down on hover - remove if not wanted */
.sliding-track:hover {
  animation-play-state: paused;
}
</style>