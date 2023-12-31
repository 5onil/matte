<template>
  <div class="overflow-hidden">
    <the-header />
    <RouterView />

    <footer-hills />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'

// Components
import TheHeader from './components/TheHeader.vue'
import FooterHills from './components/FooterHills.vue'
</script>

<style scoped></style>
