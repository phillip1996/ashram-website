<template>
  <div class="antialiased font-sans min-h-screen flex flex-col">
    <Navbar />

    <main class="flex-1 pt-20">
       <router-view />
    </main>
    <Footer/>
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue"
</script>