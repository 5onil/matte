<template>
  <div class="overflow-hidden">
    <header class="flex items-center gap-6 relative">
      <happy-sun-logo class="flex-grow" />
      <RouterLink to="/" class="pushable"><span class="front">🏠</span></RouterLink>
      <button @click.prevent="playMusic" class="pushable mr-6">
        <span class="front">🎧</span>
      </button>
      <the-clouds />
    </header>

    <RouterView />

    <footer-hills />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

// Components
import HappySunLogo from './components/logo/HappySunLogo.vue'
import TheClouds from './components/TheClouds.vue'
import FooterHills from './components/FooterHills.vue'
import BackgroundMusicOne from './assets/sound/bouncy-background.mp3'

const musicOne = new Audio(BackgroundMusicOne)
const startPlayer = ref(false)

function playMusic() {
  startPlayer.value = !startPlayer.value
  if (startPlayer.value) {
    musicOne.play()
  } else {
    musicOne.pause()
    musicOne.currentTime = 0
  }
}
</script>

<style scoped>
header {
  background-color: #c8ebff;
}

.pushable {
  background-color: #000000;
  border-radius: 12px;
  border: none;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
}
.front {
  display: block;
  padding: 12px 42px;
  border-radius: 12px;
  font-size: 1.25rem;
  border: 2px solid #000000;
  background-color: hsl(345deg 100% 47%);
  color: white;
  transform: translateY(-6px);
}
.pushable:active .front {
  transform: translateY(-2px);
}
</style>
