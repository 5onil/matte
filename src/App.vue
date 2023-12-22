<template>
  <div class="overflow-hidden">
    <header class="flex items-center gap-6 relative">
      <RouterLink to="/"><happy-sun-logo /></RouterLink>
      <the-clouds />
    </header>

    <RouterView />

    <footer-hills />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

// Components
import HappySunLogo from './components/logo/HappySunLogo.vue'
import TheClouds from './components/TheClouds.vue'
import FooterHills from './components/FooterHills.vue'
</script>

<style scoped>
header {
  background-color: #c8ebff;
}
</style>
