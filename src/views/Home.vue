<template>
  <main class="min-h-screen bg-white">
    <Hero />

    <!-- ================= ABOUT ================= -->
    <section class="py-16 md:py-24 lg:py-28 bg-white overflow-hidden">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div class="w-full lg:w-1/2 relative" data-aos="fade-right" data-aos-duration="1400">
            <div class="relative z-10 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.01]">
              <img 
                src="https://media.istockphoto.com/id/2213698228/photo/two-female-friends-practicing-meditation-at-a-wellness-resort.webp?a=1&b=1&s=612x612&w=0&k=20&c=wXuR1mUf9VNtNpDaGNXbfa2LitqBdQn_IxI2wtgTMk0=" 
                alt="The Lekki Ashram" 
                class="w-full h-64 md:h-96 lg:h-[500px] object-cover" 
              />
            </div>
            <div class="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-full h-full border-2 border-[#E1B137]/20 rounded-2xl z-0"></div>
            <div class="absolute -top-6 -left-6 md:-top-10 md:-left-10 bg-[#E1B137] text-white p-6 md:p-8 rounded-full z-20 shadow-xl">
              <div class="text-center">
                <span class="block text-2xl md:text-3xl font-bold">4+</span>
                <span class="text-[9px] md:text-[10px] uppercase tracking-widest font-medium">Years of Wisdom</span>
              </div>
            </div>
          </div>

          <div class="w-full lg:w-1/2 space-y-6 md:space-y-8" data-aos="fade-left" data-aos-duration="1400">
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-0.5 bg-[#3291d6]"></div>
                <h4 class="text-[#3291d6] font-bold uppercase tracking-[0.3em] text-[11px]">The Lekki Ashram</h4>
              </div>
              <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-900 leading-tight">
                A Sanctuary for <span class="italic text-[#E1B137]">Higher Living</span>
              </h2>
              <p class="text-slate-500 text-base md:text-lg leading-relaxed font-light">
                Founded on the principles of Advaita and natural preservation, The Lekki Ashram is more than a center—it is a movement toward human evolution.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 py-4 border-y border-slate-100">
              <div class="space-y-2">
                <div class="flex items-center gap-3">
                  <div class="w-6 h-px bg-[#E1B137]"></div>
                  <span class="text-[11px] font-bold uppercase tracking-widest text-slate-900">Our Mission</span>
                </div>
                <p class="text-slate-500 text-sm leading-relaxed">
                  To expand human capacity through mental clarity and ecological harmony.
                </p>
              </div>
              <div class="space-y-2">
                <div class="flex items-center gap-3">
                  <div class="w-6 h-px bg-[#E1B137]"></div>
                  <span class="text-[11px] font-bold uppercase tracking-widest text-slate-900">Our Vision</span>
                </div>
                <p class="text-slate-500 text-sm leading-relaxed">
                  A global society operating in a state of high consciousness.
                </p>
              </div>
            </div>

            <div class="pt-4">
              <router-link to="/about"
                class="inline-flex items-center gap-3 md:gap-4 bg-slate-900 text-white px-8 py-4 md:px-10 md:py-5 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all hover:bg-[#E1B137] hover:gap-5 md:hover:gap-6 shadow-lg active:scale-95 group">
                Explore Our Path
                <i class="fa-solid fa-arrow-right-long text-sm transition-transform group-hover:translate-x-1"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= EXPERIENCE ================= -->
    <section class="relative py-16 md:py-24 lg:py-28 text-white overflow-hidden">
      <div
        class="absolute inset-0 bg-fixed bg-cover bg-center"
        :style="`background-image: url('${parallaxImage}')`">
        <div class="absolute inset-0 bg-slate-900/70"></div>
      </div>

      <div class="relative container mx-auto px-4 md:px-6 lg:px-8">
        <div class="max-w-3xl mb-12 md:mb-16">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif">
            Experience that <span class="italic text-[#E1B137]">Shaped Us</span>
          </h2>
          <p class="text-slate-300 font-light mt-4 md:mt-6">
            Our journey reflects deliberate growth—defined by ecological stewardship,
            philosophical clarity, and institutional responsibility.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          <div
            v-for="(item, i) in experiences"
            :key="i"
            class="bg-white/5 border border-white/10 p-6 md:p-8 lg:p-10 rounded-2xl hover:border-[#E1B137]/40 transition-all duration-500">
            <span class="text-[#E1B137] text-xs font-bold tracking-widest">{{ item.year }}</span>
            <h3 class="text-lg md:text-xl font-serif mt-3 md:mt-4 mb-3 md:mb-4">{{ item.title }}</h3>
            <p class="text-slate-300 text-sm font-light">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= PODCAST ================= -->
    <section class="py-16 md:py-24 lg:py-28 bg-slate-50">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="max-w-3xl mb-12 md:mb-16">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-0.5 bg-[#3291d6]"></div>
            <h4 class="text-[#3291d6] font-bold uppercase tracking-[0.3em] text-[11px]">Wisdom Series</h4>
          </div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-900">
            The Ashram <span class="italic text-[#E1B137]">Dialogues</span>
          </h2>
          <p class="text-slate-500 font-light mt-3 md:mt-4">
            Deep conversations exploring consciousness, ecology, and the architecture of inner peace.
          </p>
        </div>

        <!-- Podcast Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <!-- Initial Episodes (always visible) -->
          <div 
            v-for="(podcast, i) in initialPodcasts" 
            :key="'initial-'+i"
            :id="'initial-episode-' + podcast.id"
            class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-slate-100"
          >
            <!-- Podcast Thumbnail -->
            <div class="relative overflow-hidden h-48 md:h-56">
              <img 
                :src="podcast.thumbnail" 
                :alt="podcast.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent flex items-center justify-center">
                <button 
                  @click="playPodcast(podcast)"
                  class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group/play transform transition-all duration-300 hover:scale-110 hover:bg-white shadow-2xl"
                  :class="{ 'bg-[#E1B137]/90': currentPlaying === podcast.id }"
                >
                  <i 
                    class="text-2xl transition-all duration-300"
                    :class="currentPlaying === podcast.id ? 'fa-solid fa-pause text-slate-900' : 'fa-solid fa-play text-slate-900 group-hover/play:text-[#3291d6]'"
                  ></i>
                </button>
              </div>
              
              <!-- Episode Badge -->
              <div class="absolute top-4 left-4">
                <span class="bg-[#3291d6] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                  Episode {{ podcast.episode }}
                </span>
              </div>
              
              <!-- Duration Badge -->
              <div class="absolute top-4 right-4 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
                {{ podcast.duration }}
              </div>
            </div>

            <!-- Podcast Content -->
            <div class="p-6 md:p-8">
              <div class="flex items-center justify-between mb-3">
                <span class="text-[10px] md:text-xs uppercase tracking-widest text-[#E1B137] font-bold">
                  {{ podcast.category }}
                </span>
                <span class="text-xs text-slate-400">{{ podcast.date }}</span>
              </div>
              
              <h3 class="text-xl font-serif text-slate-900 mb-3 leading-tight group-hover:text-[#3291d6] transition-colors">
                {{ podcast.title }}
              </h3>
              
              <p class="text-slate-500 text-sm font-light mb-6 line-clamp-2">
                {{ podcast.description }}
              </p>
              
              <!-- Speaker Info -->
              <div class="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
                <div class="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                  <img 
                    :src="podcast.speaker.avatar" 
                    :alt="podcast.speaker.name"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p class="text-sm font-medium text-slate-900">{{ podcast.speaker.name }}</p>
                  <p class="text-xs text-slate-400">{{ podcast.speaker.role }}</p>
                </div>
              </div>
              
              <!-- Podcast Stats & Actions -->
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-4 text-slate-400">
                  <div class="flex items-center gap-2">
                    <i class="fa-solid fa-headphones text-sm"></i>
                    <span class="text-xs">{{ podcast.listens }}+ Listens</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <i class="fa-solid fa-heart text-sm"></i>
                    <span class="text-xs">{{ podcast.likes }}</span>
                  </div>
                </div>
                
                <div class="flex gap-2">
                  <button 
                    @click="sharePodcast(podcast)"
                    class="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#3291d6] hover:border-[#3291d6] transition-all"
                    title="Share episode"
                  >
                    <i class="fa-solid fa-share-nodes text-sm"></i>
                  </button>
                  <button 
                    @click="toggleBookmark(podcast)"
                    class="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#E1B137] hover:border-[#E1B137] transition-all"
                    :title="podcast.bookmarked ? 'Remove bookmark' : 'Bookmark episode'"
                  >
                    <i 
                      class="fa-solid text-sm transition-all"
                      :class="podcast.bookmarked ? 'fa-bookmark text-[#E1B137]' : 'fa-bookmark'"
                    ></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Additional Episodes (visible when expanded) -->
          <template v-if="showAllEpisodes">
            <div 
              v-for="(podcast, i) in additionalPodcasts" 
              :key="'additional-'+i"
              :id="'additional-episode-' + podcast.id"
              class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-slate-100 animate-fadeIn"
            >
              <!-- Podcast Thumbnail -->
              <div class="relative overflow-hidden h-48 md:h-56">
                <img 
                  :src="podcast.thumbnail" 
                  :alt="podcast.title"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent flex items-center justify-center">
                  <button 
                    @click="playPodcast(podcast)"
                    class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group/play transform transition-all duration-300 hover:scale-110 hover:bg-white shadow-2xl"
                    :class="{ 'bg-[#E1B137]/90': currentPlaying === podcast.id }"
                  >
                    <i 
                      class="text-2xl transition-all duration-300"
                      :class="currentPlaying === podcast.id ? 'fa-solid fa-pause text-slate-900' : 'fa-solid fa-play text-slate-900 group-hover/play:text-[#3291d6]'"
                    ></i>
                  </button>
                </div>
                
                <!-- Episode Badge -->
                <div class="absolute top-4 left-4">
                  <span class="bg-[#3291d6] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                    Episode {{ podcast.episode }}
                  </span>
                </div>
                
                <!-- Duration Badge -->
                <div class="absolute top-4 right-4 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {{ podcast.duration }}
                </div>
              </div>

              <!-- Podcast Content -->
              <div class="p-6 md:p-8">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-[10px] md:text-xs uppercase tracking-widest text-[#E1B137] font-bold">
                    {{ podcast.category }}
                  </span>
                  <span class="text-xs text-slate-400">{{ podcast.date }}</span>
                </div>
                
                <h3 class="text-xl font-serif text-slate-900 mb-3 leading-tight group-hover:text-[#3291d6] transition-colors">
                  {{ podcast.title }}
                </h3>
                
                <p class="text-slate-500 text-sm font-light mb-6 line-clamp-2">
                  {{ podcast.description }}
                </p>
                
                <!-- Speaker Info -->
                <div class="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
                  <div class="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <img 
                      :src="podcast.speaker.avatar" 
                      :alt="podcast.speaker.name"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p class="text-sm font-medium text-slate-900">{{ podcast.speaker.name }}</p>
                    <p class="text-xs text-slate-400">{{ podcast.speaker.role }}</p>
                  </div>
                </div>
                
                <!-- Podcast Stats & Actions -->
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-4 text-slate-400">
                    <div class="flex items-center gap-2">
                      <i class="fa-solid fa-headphones text-sm"></i>
                      <span class="text-xs">{{ podcast.listens }}+ Listens</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <i class="fa-solid fa-heart text-sm"></i>
                      <span class="text-xs">{{ podcast.likes }}</span>
                    </div>
                  </div>
                  
                  <div class="flex gap-2">
                    <button 
                      @click="sharePodcast(podcast)"
                      class="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#3291d6] hover:border-[#3291d6] transition-all"
                      title="Share episode"
                    >
                      <i class="fa-solid fa-share-nodes text-sm"></i>
                    </button>
                    <button 
                      @click="toggleBookmark(podcast)"
                      class="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#E1B137] hover:border-[#E1B137] transition-all"
                      :title="podcast.bookmarked ? 'Remove bookmark' : 'Bookmark episode'"
                    >
                      <i 
                        class="fa-solid text-sm transition-all"
                        :class="podcast.bookmarked ? 'fa-bookmark text-[#E1B137]' : 'fa-bookmark'"
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>

        <!-- Episode Count Indicator -->
        <div class="text-center mt-8">
          <p class="text-sm text-slate-400">
            Showing {{ initialPodcasts.length }} of {{ podcasts.length }} episodes
          </p>
        </div>

        <!-- Browse / Show Less Button -->
        <div class="text-center mt-6 md:mt-8">
          <button 
            @click="toggleAllEpisodes"
            class="inline-flex items-center gap-3 px-8 py-4 bg-transparent text-slate-900 border-2 border-slate-200 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all hover:bg-slate-900 hover:text-white hover:border-slate-900 group"
          >
            <span>{{ showAllEpisodes ? 'Show Less Episodes' : 'Browse All Episodes' }}</span>
            <i 
              class="fa-solid text-sm transition-all duration-300"
              :class="showAllEpisodes ? 'fa-arrow-up-long' : 'fa-arrow-right-long'"
            ></i>
          </button>
        </div>

        <!-- Scroll to Top Button (appears when expanded) -->
        <transition name="fade">
          <div 
            v-if="showAllEpisodes" 
            class="fixed bottom-24 right-6 z-40"
          >
            <button 
              @click="scrollToPodcastTop"
              class="w-12 h-12 bg-[#3291d6] text-white rounded-full shadow-lg hover:bg-[#E1B137] transition-all flex items-center justify-center hover:scale-110 group"
              title="Scroll to top"
            >
              <i class="fa-solid fa-arrow-up group-hover:-translate-y-1 transition-transform"></i>
            </button>
          </div>
        </transition>

        <!-- Featured Player -->
        <div 
          v-if="currentPodcast"
          class="mt-12 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden sticky bottom-6 md:bottom-8 z-50"
        >
          <!-- Player Header with Close Button -->
          <div class="flex items-center justify-between px-6 pt-6 pb-4 border-b border-slate-100">
            <div class="flex items-center gap-3">
              <div class="w-3 h-3 rounded-full bg-[#E1B137] animate-pulse"></div>
              <span class="text-xs font-bold uppercase tracking-widest text-slate-500">Now Playing</span>
            </div>
            <button 
              @click="closePlayer"
              class="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all duration-200 group/close"
              title="Close player"
            >
              <i class="fa-solid fa-xmark text-sm group-hover/close:rotate-90 transition-transform"></i>
            </button>
          </div>
          
          <!-- Player Content -->
          <div class="flex flex-col md:flex-row items-center gap-6 p-6">
            <!-- Thumbnail -->
            <div class="relative">
              <div class="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shrink-0 shadow-md">
                <img 
                  :src="currentPodcast.thumbnail" 
                  :alt="currentPodcast.title"
                  class="w-full h-full object-cover"
                />
              </div>
              <!-- Play/Pause indicator on thumbnail -->
              <div v-if="isPlaying" class="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#3291d6] flex items-center justify-center animate-pulse">
                <i class="fa-solid fa-play text-xs text-white"></i>
              </div>
            </div>
            
            <!-- Player Info -->
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between mb-2">
                <h4 class="text-lg font-serif text-slate-900 truncate">{{ currentPodcast.title }}</h4>
                <span class="text-xs text-slate-400 shrink-0">{{ currentPodcast.duration }}</span>
              </div>
              <div class="flex items-center gap-2 mb-3">
                <div class="w-6 h-6 rounded-full overflow-hidden border border-slate-200">
                  <img 
                    :src="currentPodcast.speaker.avatar" 
                    :alt="currentPodcast.speaker.name"
                    class="w-full h-full object-cover"
                  />
                </div>
                <p class="text-sm text-slate-500 truncate">{{ currentPodcast.speaker.name }}</p>
              </div>
              
              <!-- Progress Bar -->
              <div class="mb-4">
                <div class="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    class="h-full bg-gradient-to-r from-[#3291d6] to-[#E1B137] rounded-full transition-all duration-300"
                    :style="{ width: `${playbackProgress}%` }"
                  ></div>
                </div>
                <div class="flex justify-between text-xs text-slate-400 mt-1">
                  <span>{{ formatTime(currentTime) }}</span>
                  <span>{{ formatTime(currentPodcast.durationSeconds) }}</span>
                </div>
              </div>
              
              <!-- Player Controls -->
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-4">
                  <button 
                    @click="skipBackward"
                    class="text-slate-400 hover:text-slate-900 transition-colors group/skip"
                    title="Skip 15s back"
                  >
                    <i class="fa-solid fa-backward-step text-lg group-hover/skip:scale-110 transition-transform"></i>
                  </button>
                  <button 
                    @click="togglePlay"
                    class="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-[#3291d6] transition-all group/play"
                    :class="{ 'bg-[#E1B137]': isPlaying }"
                  >
                    <i class="fa-solid text-xl transition-transform group-hover/play:scale-110" :class="isPlaying ? 'fa-pause' : 'fa-play'"></i>
                  </button>
                  <button 
                    @click="skipForward"
                    class="text-slate-400 hover:text-slate-900 transition-colors group/skip"
                    title="Skip 30s forward"
                  >
                    <i class="fa-solid fa-forward-step text-lg group-hover/skip:scale-110 transition-transform"></i>
                  </button>
                </div>
                
                <div class="flex items-center gap-4">
                  <button 
                    @click="toggleMute"
                    class="text-slate-400 hover:text-slate-900 transition-colors group/mute"
                    :title="isMuted ? 'Unmute' : 'Mute'"
                  >
                    <i class="fa-solid text-lg group-hover/mute:scale-110 transition-transform" :class="isMuted ? 'fa-volume-xmark' : 'fa-volume-high'"></i>
                  </button>
                  <div class="w-32">
                    <input 
                      type="range" 
                      min="0" 
                      max="1" 
                      step="0.01"
                      v-model="volume"
                      class="w-full accent-[#3291d6] hover:accent-[#E1B137] transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= LATEST INSIGHTS ================= -->
    <section class="py-16 md:py-24 lg:py-28 bg-white">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-12 md:mb-16">
          <div class="flex items-center justify-center gap-3 mb-4">
            <div class="w-10 h-0.5 bg-[#3291d6]"></div>
            <h4 class="text-[#3291d6] font-bold uppercase tracking-[0.3em] text-[11px]">Knowledge Base</h4>
            <div class="w-10 h-0.5 bg-[#3291d6]"></div>
          </div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-900 mb-4 md:mb-6">
            Latest <span class="italic text-[#E1B137]">Insights</span>
          </h2>
          <p class="text-slate-500 font-light max-w-2xl mx-auto text-base md:text-lg">
            Reflections on the intersection of nature, consciousness, and social order.
          </p>
        </div>

        <!-- Featured Post -->
        <div class="mb-12 md:mb-16">
          <div class="bg-slate-50 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="flex flex-col lg:flex-row">
              <!-- Featured Image -->
              <div class="lg:w-1/2 relative overflow-hidden">
                <img 
                  :src="concencrationImg" 
                  alt="The Consecration of The Lekki Ashram"
                  class="w-full h-64 md:h-96 lg:h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div class="absolute top-4 left-4">
                  <span class="bg-[#3291d6] text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                    Featured
                  </span>
                </div>
              </div>
              
              <!-- Featured Content -->
              <div class="lg:w-1/2 p-8 md:p-10 lg:p-12">
                <div class="flex items-center gap-4 text-slate-500 text-sm mb-4">
                  <span class="flex items-center gap-2">
                    <i class="fa-regular fa-calendar"></i>
                    18 Oct 2025
                  </span>
                  <span class="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span class="text-[#E1B137] font-medium">Editorial</span>
                </div>
                
                <h3 class="text-2xl md:text-3xl lg:text-4xl font-serif text-slate-900 mb-4 leading-tight">
                  The Consecration of The Lekki Ashram
                </h3>
                
                <p class="text-slate-500 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
                  A defining moment marking the formal consecration of The Lekki Ashram, establishing it as a sanctuary for higher living and ecological stewardship.
                </p>
                
                <div class="space-y-4 mb-8">
                  <div class="flex items-start gap-3">
                    <div class="w-2 h-2 rounded-full bg-[#E1B137] mt-2"></div>
                    <p class="text-slate-600">Ceremonial rituals blending ancient wisdom with modern consciousness</p>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="w-2 h-2 rounded-full bg-[#E1B137] mt-2"></div>
                    <p class="text-slate-600">Community gathering of seekers and environmental stewards</p>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="w-2 h-2 rounded-full bg-[#E1B137] mt-2"></div>
                    <p class="text-slate-600">Blessings from spiritual leaders across traditions</p>
                  </div>
                </div>
                
                <router-link 
                  to="/blog/featured"
                  class="inline-flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-[#E1B137] transition-all group"
                >
                  Read Full Article
                  <i class="fa-solid fa-arrow-right transition-transform group-hover:translate-x-2"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Articles Grid -->
        <div>
          <h3 class="text-2xl md:text-3xl font-serif text-slate-900 mb-8 md:mb-12 text-center">
            Recent <span class="text-[#3291d6]">Articles</span>
          </h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <!-- Article 1 -->
            <div class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100">
              <div class="relative overflow-hidden h-48">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600"
                  alt="Morning Meditation Rituals"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>
              
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs text-[#E1B137] font-medium uppercase tracking-widest">Meditation</span>
                  <span class="text-xs text-slate-400">10 Dec 2025</span>
                </div>
                
                <h4 class="text-xl font-serif text-slate-900 mb-3 group-hover:text-[#3291d6] transition-colors">
                  Morning Meditation Rituals
                </h4>
                
                <p class="text-slate-500 text-sm mb-4 line-clamp-2">
                  Establishing a sacred morning routine for mental clarity and spiritual connection.
                </p>
                
                <div class="flex items-center justify-between">
                  <router-link 
                    to="/blog/morning-meditation"
                    class="text-sm text-[#3291d6] font-medium hover:text-[#E1B137] transition-colors inline-flex items-center gap-2"
                  >
                    Read More
                    <i class="fa-solid fa-chevron-right text-xs"></i>
                  </router-link>
                  <span class="text-xs text-slate-400">5 min read</span>
                </div>
              </div>
            </div>

            <!-- Article 2 -->
            <div class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100">
              <div class="relative overflow-hidden h-48">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=600"
                  alt="Water Conservation Practices"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>
              
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs text-[#E1B137] font-medium uppercase tracking-widest">Ecology</span>
                  <span class="text-xs text-slate-400">08 Dec 2025</span>
                </div>
                
                <h4 class="text-xl font-serif text-slate-900 mb-3 group-hover:text-[#3291d6] transition-colors">
                  Water Conservation Practices
                </h4>
                
                <p class="text-slate-500 text-sm mb-4 line-clamp-2">
                  Traditional water conservation methods adapted for modern ecological stewardship.
                </p>
                
                <div class="flex items-center justify-between">
                  <router-link 
                    to="/blog/water-conservation"
                    class="text-sm text-[#3291d6] font-medium hover:text-[#E1B137] transition-colors inline-flex items-center gap-2"
                  >
                    Read More
                    <i class="fa-solid fa-chevron-right text-xs"></i>
                  </router-link>
                  <span class="text-xs text-slate-400">7 min read</span>
                </div>
              </div>
            </div>

            <!-- Article 3 -->
            <div class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100">
              <div class="relative overflow-hidden h-48">
                <img 
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=80&w=600"
                  alt="Dialogue with Modernity"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>
              
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-xs text-[#E1B137] font-medium uppercase tracking-widest">Philosophy</span>
                  <span class="text-xs text-slate-400">05 Dec 2025</span>
                </div>
                
                <h4 class="text-xl font-serif text-slate-900 mb-3 group-hover:text-[#3291d6] transition-colors">
                  Dialogue with Modernity
                </h4>
                
                <p class="text-slate-500 text-sm mb-4 line-clamp-2">
                  Bridging ancient wisdom with contemporary challenges in consciousness.
                </p>
                
                <div class="flex items-center justify-between">
                  <router-link 
                    to="/blog/modernity-dialogue"
                    class="text-sm text-[#3291d6] font-medium hover:text-[#E1B137] transition-colors inline-flex items-center gap-2"
                  >
                    Read More
                    <i class="fa-solid fa-chevron-right text-xs"></i>
                  </router-link>
                  <span class="text-xs text-slate-400">6 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- View All Button -->
        <div class="text-center mt-12 md:mt-16">
          <router-link 
            to="/blog"
            class="inline-flex items-center gap-3 px-8 py-4 bg-transparent text-slate-900 border-2 border-slate-200 rounded-full text-sm font-medium hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all group"
          >
            View All Articles
            <i class="fa-solid fa-arrow-right-long transition-transform group-hover:translate-x-2"></i>
          </router-link>
        </div>
      </div>
    </section>

    <!-- ================= PARTNERS ================= -->
    <section class="py-16 md:py-24 lg:py-28 bg-slate-50 border-t border-slate-100">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <div class="flex items-center justify-center gap-3 mb-4">
            <div class="w-10 h-0.5 bg-[#3291d6]"></div>
            <h4 class="text-[#3291d6] font-bold uppercase tracking-[0.3em] text-[11px]">Global Network</h4>
            <div class="w-10 h-0.5 bg-[#3291d6]"></div>
          </div>
          <h2 class="text-3xl md:text-4xl font-serif text-slate-900 mb-4">
            Partners & <span class="italic text-[#E1B137]">Affiliations</span>
          </h2>
          <p class="text-slate-500 text-base">
            Collaborating with world-class organizations to foster ecological and social order.
          </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div v-for="partner in partners" :key="partner.name" class="flex flex-col items-center group">
            <div class="w-full h-24 md:h-32 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 flex items-center justify-center">
              <img 
                v-if="partner.logo" 
                :src="partner.logo" 
                :alt="partner.name" 
                class="h-12 md:h-16 w-auto object-contain opacity-80 group-hover:opacity-100 transition-all group-hover:scale-105"
              />
            </div>
            <div class="mt-4 text-center">
              <h4 class="font-medium text-slate-900">{{ partner.name }}</h4>
              <p class="text-xs text-slate-400 mt-1">{{ partner.location }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= NEWS & UPDATES ================= -->
    <section class="py-16 md:py-24 lg:py-28 bg-white">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <div class="w-10 h-0.5 bg-[#3291d6]"></div>
              <h4 class="text-[#3291d6] font-bold uppercase tracking-[0.3em] text-[11px]">Latest Information</h4>
            </div>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-900">
              News & <span class="text-[#E1B137]">Update</span>
            </h2>
          </div>
          
          <router-link to="/news" class="px-8 py-3 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-[#E1B137] transition-all inline-flex items-center gap-2">
            View More
            <i class="fa-solid fa-arrow-right"></i>
          </router-link>
        </div>

        <!-- News Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div v-for="(news, index) in newsItems" :key="index" class="group">
            <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
              <!-- News Image -->
              <div class="relative overflow-hidden h-48">
                <img 
                  :src="news.image" 
                  :alt="news.title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute top-4 left-4">
                  <span class="bg-white/90 text-slate-900 text-xs font-medium px-3 py-1.5 rounded-full uppercase tracking-widest">
                    {{ news.category }}
                  </span>
                </div>
              </div>
              
              <!-- News Content -->
              <div class="p-6">
                <div class="flex items-center gap-3 text-slate-500 text-sm mb-3">
                  <span>{{ news.date }}</span>
                  <span class="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span>{{ news.readTime }}</span>
                </div>
                
                <h3 class="text-xl font-serif text-slate-900 mb-3 group-hover:text-[#3291d6] transition-colors">
                  {{ news.title }}
                </h3>
                
                <p class="text-slate-500 text-sm mb-4 line-clamp-2">
                  {{ news.description }}
                </p>
                
                <router-link :to="news.link" class="text-sm text-[#3291d6] font-medium hover:text-[#E1B137] transition-colors inline-flex items-center gap-2">
                  Read More
                  <i class="fa-solid fa-chevron-right text-xs"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= VISIT US ================= -->
    <section class="py-16 md:py-24 lg:py-28 bg-slate-50">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <div class="flex items-center justify-center gap-3 mb-4">
            <div class="w-10 h-0.5 bg-[#3291d6]"></div>
            <h4 class="text-[#3291d6] font-bold uppercase tracking-[0.3em] text-[11px]">Visit The Ashram</h4>
            <div class="w-10 h-0.5 bg-[#3291d6]"></div>
          </div>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-900 mb-4">
            Find Your <span class="italic text-[#E1B137]">Sanctuary</span>
          </h2>
          <p class="text-slate-500 text-base">
            Located in the heart of Lekki's ecological reserve, accessible to seekers from around the world.
          </p>
        </div>

        <!-- Map -->
        <div class="relative rounded-2xl overflow-hidden shadow-xl h-[300px] md:h-[400px] mb-12">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.622535414225!2d3.535258315721698!3d6.441629295339537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf752ca5197e3%3A0x1a79c6baa00c4d40!2sLekki%20Conservation%20Centre!5e0!3m2!1sen!2sng!4v1647887654321!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="absolute inset-0"
          ></iframe>
        </div>

        <!-- Contact Info -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <!-- Address -->
          <div class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div class="flex flex-col items-center text-center">
              <div class="w-16 h-16 rounded-full bg-[#3291d6]/10 flex items-center justify-center mb-4">
                <i class="fa-solid fa-location-dot text-2xl text-[#3291d6]"></i>
              </div>
              <h4 class="text-lg font-medium text-slate-900 mb-3">Address</h4>
              <p class="text-slate-600">
                The Lekki Ashram<br>
                Ogombo Abraham Adesanya Ajah<br>
                Lagos, Nigeria
              </p>
            </div>
          </div>

          <!-- Contact -->
          <div class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div class="flex flex-col items-center text-center">
              <div class="w-16 h-16 rounded-full bg-[#E1B137]/10 flex items-center justify-center mb-4">
                <i class="fa-solid fa-phone text-2xl text-[#E1B137]"></i>
              </div>
              <h4 class="text-lg font-medium text-slate-900 mb-3">Contact</h4>
              <div class="space-y-2 text-slate-600">
                <p>+234 812 905 0431</p>
                <p>info@lekkiashram.com</p>
              </div>
            </div>
          </div>

          <!-- Hours -->
          <div class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div class="flex flex-col items-center text-center">
              <div class="w-16 h-16 rounded-full bg-[#3291d6]/10 flex items-center justify-center mb-4">
                <i class="fa-solid fa-clock text-2xl text-[#3291d6]"></i>
              </div>
              <h4 class="text-lg font-medium text-slate-900 mb-3">Visiting Hours</h4>
              <div class="text-slate-600">
                <p>Mon-Sat: 9AM-5PM</p>
                <p>Sun: By appointment</p>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="text-center mt-12">
          <router-link to="/contact"
            class="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#E1B137] transition-all shadow-lg hover:shadow-xl group">
            Schedule a Visit
            <i class="fa-solid fa-calendar-check transition-transform group-hover:scale-110"></i>
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, reactive, onMounted, watch, computed } from 'vue'
import Hero from '../components/Hero.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Import images
import unepLogo from '../assets/img/UNEP-logo.png'
import ncfLogo from '../assets/img/NCF-logo.png'
import vedantaLogo from '../assets/img/vendata-logo.png'
import WWFLogo from '../assets/img/WWF-logo.png'
import concencrationImg from '../assets/img/concencration.jpg'
import parallaxImage from '../assets/img/parallax-img.jpg'

// Import audio files
import launchingAshramAudio from '../assets/audio/launching-ashram.mp3'

// Podcast Player State
const currentPlaying = ref(null)
const currentPodcast = ref(null)
const isPlaying = ref(false)
const isMuted = ref(false)
const volume = ref(0.7)
const currentTime = ref(0)
const playbackProgress = ref(0)

// Episode expansion state
const showAllEpisodes = ref(false)
const initialEpisodesCount = 3

// Audio element reference
const audioElement = ref(null)

onMounted(() => {
  AOS.init({ 
    duration: 1000, 
    once: true,
    offset: 50,
    easing: 'ease-out'
  })
  
  // Initialize audio element
  audioElement.value = new Audio()
  audioElement.value.volume = volume.value
  
  // Add event listeners
  audioElement.value.addEventListener('timeupdate', updateAudioProgress)
  audioElement.value.addEventListener('ended', onAudioEnded)
  audioElement.value.addEventListener('error', handleAudioError)
  audioElement.value.addEventListener('loadedmetadata', onAudioLoaded)
})

const experiences = [
  {
    year: '2024',
    title: 'Foundation',
    description: 'Establishment of the Ashram as a conscious living institution.'
  },
  {
    year: '2025',
    title: 'Ecological Integration',
    description: 'Active conservation and global environmental partnerships.'
  },
  {
    year: '2026',
    title: 'Global Outreach',
    description: 'Education, dialogue, and international collaborations.'
  }
]

const podcasts = [
  {
    id: 1,
    episode: '01',
    title: 'Silence as Infrastructure',
    description: 'Why silence is necessary for societal stability and personal growth. A deep dive into the architecture of quiet.',
    date: 'Jan 15, 2026',
    duration: '48:22',
    durationSeconds: 2902,
    category: 'CONSCIOUSNESS',
    thumbnail: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=800',
    audio: launchingAshramAudio,
    listens: '12.5K',
    likes: '845',
    bookmarked: true,
    speaker: {
      name: 'Dr. Arjun Patel',
      role: 'Senior Philosopher',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    }
  },
  {
    id: 2,
    episode: '02',
    title: 'Nature as Governance',
    description: 'Ecological systems as frameworks for human organization and social harmony.',
    date: 'Feb 22, 2026',
    duration: '52:10',
    durationSeconds: 3130,
    category: 'ECOLOGY',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800',
    listens: '8.7K',
    likes: '621',
    bookmarked: false,
    speaker: {
      name: 'Maya Sharma',
      role: 'Ecological Director',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=200'
    }
  },
  {
    id: 3,
    episode: '03',
    title: 'The Inner Order',
    description: 'Exploring the cost of psychological disorder and paths to mental harmony.',
    date: 'Mar 18, 2026',
    duration: '39:45',
    durationSeconds: 2385,
    category: 'PSYCHOLOGY',
    thumbnail: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&q=80&w=800',
    listens: '15.2K',
    likes: '1.2K',
    bookmarked: true,
    speaker: {
      name: 'Ravi Desai',
      role: 'Mindfulness Guide',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
    }
  },
  {
    id: 4,
    episode: '04',
    title: 'The Art of Stillness',
    description: 'Exploring the transformative power of silence in our chaotic modern world.',
    date: 'Apr 5, 2026',
    duration: '45:30',
    durationSeconds: 2730,
    category: 'MEDITATION',
    thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
    audio: launchingAshramAudio,
    listens: '9.3K',
    likes: '742',
    bookmarked: false,
    speaker: {
      name: 'Dr. Arjun Patel',
      role: 'Senior Philosopher',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    }
  },
  {
    id: 5,
    episode: '05',
    title: 'Ecological Consciousness',
    description: 'How our relationship with nature shapes our inner and outer worlds.',
    date: 'May 12, 2026',
    duration: '51:15',
    durationSeconds: 3075,
    category: 'ECOLOGY',
    thumbnail: 'https://images.unsplash.com/photo-1426604966841-d7cdacbb7b8c?auto=format&fit=crop&q=80&w=800',
    listens: '11.7K',
    likes: '934',
    bookmarked: true,
    speaker: {
      name: 'Maya Sharma',
      role: 'Ecological Director',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=200'
    }
  },
  {
    id: 6,
    episode: '06',
    title: 'The Architecture of Peace',
    description: 'Designing spaces that promote inner tranquility and social harmony.',
    date: 'Jun 20, 2026',
    duration: '42:40',
    durationSeconds: 2560,
    category: 'PHILOSOPHY',
    thumbnail: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800',
    listens: '13.2K',
    likes: '1.1K',
    bookmarked: false,
    speaker: {
      name: 'Ravi Desai',
      role: 'Mindfulness Guide',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
    }
  }
]

// Computed properties for episodes
const initialPodcasts = computed(() => {
  return podcasts.slice(0, initialEpisodesCount)
})

const additionalPodcasts = computed(() => {
  return podcasts.slice(initialEpisodesCount)
})

// Enhanced toggle function with precise scroll behavior
const toggleAllEpisodes = () => {
  const podcastSection = document.querySelector('.bg-slate-50')
  
  if (!showAllEpisodes.value) {
    // Expanding - show more episodes
    showAllEpisodes.value = true
    
    // Wait for DOM to update with new episodes
    setTimeout(() => {
      // Get the first additional episode card
      const additionalCards = document.querySelectorAll('[id^="additional-episode-"]')
      
      if (additionalCards.length > 0) {
        // Calculate position for first new episode
        const firstNewCard = additionalCards[0]
        const cardPosition = firstNewCard.getBoundingClientRect().top + window.scrollY
        
        // Get header height for offset (adjust based on your layout)
        const headerHeight = 80 // Adjust this value based on your header
        
        // Scroll to show the first new episode nicely
        window.scrollTo({
          top: cardPosition - headerHeight - 20,
          behavior: 'smooth'
        })
        
        // Optional: Add a subtle highlight effect to new episodes
        additionalCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('ring-2', 'ring-[#E1B137]', 'ring-opacity-50', 'transition-all', 'duration-500')
            setTimeout(() => {
              card.classList.remove('ring-2', 'ring-[#E1B137]', 'ring-opacity-50')
            }, 1500)
          }, index * 100) // Stagger the highlight effect
        })
      }
    }, 150)
  } else {
    // Collapsing - hide additional episodes
    showAllEpisodes.value = false
    
    // Scroll back to the podcast section title
    setTimeout(() => {
      if (podcastSection) {
        const sectionHeader = podcastSection.querySelector('.max-w-3xl')
        if (sectionHeader) {
          const headerPosition = sectionHeader.getBoundingClientRect().top + window.scrollY
          const headerOffset = 40
          
          window.scrollTo({
            top: headerPosition - headerOffset,
            behavior: 'smooth'
          })
        }
      }
    }, 50)
  }
}

// Scroll to top of podcast section
const scrollToPodcastTop = () => {
  const podcastSection = document.querySelector('.bg-slate-50')
  if (podcastSection) {
    const sectionHeader = podcastSection.querySelector('.max-w-3xl')
    if (sectionHeader) {
      const headerPosition = sectionHeader.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: headerPosition - 40,
        behavior: 'smooth'
      })
    }
  }
}

const partners = [
  { name: 'UNEP', logo: unepLogo, location: 'GLOBAL' },
  { name: 'Nigerian Conservation Foundation', logo: ncfLogo, location: 'NIGERIA' },
  { name: 'Vedanta Society', logo: vedantaLogo, location: 'NEW YORK' },
  { name: 'World Wildlife Fund', logo: WWFLogo, location: 'CANADA' },
]

const newsItems = [
  {
    title: 'Annual Meditation Retreat 2026',
    description: 'Join us for a week-long intensive meditation retreat focused on inner silence.',
    date: '15 Jan 2026',
    category: 'EVENT',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600',
    link: '/news/meditation-retreat-2026'
  },
  {
    title: 'New Ecological Conservation Program',
    description: 'Launching our mangrove restoration project in partnership with NCF.',
    date: '12 Jan 2026',
    category: 'CONSERVATION',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=600',
    link: '/news/mangrove-restoration'
  },
  {
    title: 'Philosophy Lecture Series',
    description: 'Monthly discourse on Advaita Vedanta and modern consciousness.',
    date: '10 Jan 2026',
    category: 'EDUCATION',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600',
    link: '/news/philosophy-lectures'
  }
]

// Audio Player Functions
const playPodcast = async (podcast) => {
  if (currentPlaying.value === podcast.id) {
    togglePlay()
    return
  }
  
  try {
    // Stop current audio
    if (audioElement.value) {
      audioElement.value.pause()
      audioElement.value.currentTime = 0
    }
    
    // Set current podcast
    currentPlaying.value = podcast.id
    currentPodcast.value = podcast
    
    // Set audio source
    audioElement.value.src = podcast.audio
    
    // Play audio
    await audioElement.value.play()
    isPlaying.value = true
    
  } catch (error) {
    console.error('Error playing audio:', error)
    alert(`Could not play audio: ${error.message}. Please check if the audio file exists.`)
  }
}

const closePlayer = () => {
  // Stop playback
  if (audioElement.value) {
    audioElement.value.pause()
    audioElement.value.currentTime = 0
  }
  
  // Reset player state
  isPlaying.value = false
  currentPlaying.value = null
  currentPodcast.value = null
  currentTime.value = 0
  playbackProgress.value = 0
}

const togglePlay = async () => {
  if (!audioElement.value || !currentPodcast.value) return
  
  try {
    if (isPlaying.value) {
      audioElement.value.pause()
      isPlaying.value = false
    } else {
      await audioElement.value.play()
      isPlaying.value = true
    }
  } catch (error) {
    console.error('Error toggling play:', error)
  }
}

const toggleMute = () => {
  if (!audioElement.value) return
  isMuted.value = !isMuted.value
  audioElement.value.muted = isMuted.value
}

const toggleBookmark = (podcast) => {
  podcast.bookmarked = !podcast.bookmarked
}

const sharePodcast = async (podcast) => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: podcast.title,
        text: podcast.description,
        url: window.location.origin + '/podcast/' + podcast.id
      })
    } catch (error) {
      console.error('Error sharing:', error)
    }
  } else {
    // Fallback: Copy to clipboard
    try {
      await navigator.clipboard.writeText(window.location.origin + '/podcast/' + podcast.id)
      alert('Link copied to clipboard!')
    } catch (error) {
      console.error('Error copying to clipboard:', error)
      alert('Could not copy link. Please try again.')
    }
  }
}

const skipBackward = () => {
  if (!audioElement.value) return
  audioElement.value.currentTime = Math.max(0, audioElement.value.currentTime - 15)
}

const skipForward = () => {
  if (!audioElement.value) return
  audioElement.value.currentTime = Math.min(
    audioElement.value.duration, 
    audioElement.value.currentTime + 30
  )
}

const formatTime = (seconds) => {
  if (!seconds && seconds !== 0) return '0:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

const updateAudioProgress = () => {
  if (!audioElement.value || !currentPodcast.value) return
  
  currentTime.value = audioElement.value.currentTime
  playbackProgress.value = (currentTime.value / currentPodcast.value.durationSeconds) * 100
}

const onAudioEnded = () => {
  isPlaying.value = false
  currentTime.value = 0
  playbackProgress.value = 0
}

const handleAudioError = (event) => {
  console.error('Audio error:', event.target.error)
  const error = event.target.error
  let message = 'Failed to load audio file.'
  
  switch(error.code) {
    case error.MEDIA_ERR_ABORTED:
      message = 'Audio playback was aborted.'
      break
    case error.MEDIA_ERR_NETWORK:
      message = 'Network error occurred while loading audio.'
      break
    case error.MEDIA_ERR_DECODE:
      message = 'Audio playback was aborted due to a corruption problem or unsupported features.'
      break
    case error.MEDIA_ERR_SRC_NOT_SUPPORTED:
      message = 'Audio format not supported or file not found.'
      break
  }
  
  alert(`${message}\n\nPlease check if the audio file exists in src/assets/audio/`)
}

const onAudioLoaded = () => {
  console.log('Audio loaded successfully, duration:', audioElement.value.duration)
}

// Watch for volume changes
watch(volume, (newVolume) => {
  if (audioElement.value) {
    audioElement.value.volume = newVolume
  }
})

// Cleanup on unmount
import { onUnmounted } from 'vue'
onUnmounted(() => {
  if (audioElement.value) {
    audioElement.value.pause()
    audioElement.value.src = ''
    audioElement.value = null
  }
})
</script>

<style scoped>
h2, h3 { 
  letter-spacing: -0.02em; 
  line-height: 1.2;
}

.bg-fixed { 
  background-attachment: fixed; 
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Fade in animation for new episodes */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-out forwards;
}

/* Fade transition for scroll button */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive typography */
@media (max-width: 640px) {
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.5rem;
  }
}

/* Custom range input */
input[type="range"] {
  -webkit-appearance: none;
  height: 4px;
  background: #e5e7eb;
  border-radius: 2px;
  outline: none;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  background: #3291d6;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

input[type="range"]::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  background: #2680c2;
}

/* Sticky player animation */
.sticky {
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Animation for playing indicator */
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}

/* Ring animation for highlights */
.ring-2 {
  box-shadow: 0 0 0 2px rgba(225, 177, 55, 0.5);
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Card hover effects */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.group:hover .group-hover\:translate-x-2 {
  transform: translateX(0.5rem);
}

.group:hover .group-hover\:-translate-y-1 {
  transform: translateY(-0.25rem);
}
</style>