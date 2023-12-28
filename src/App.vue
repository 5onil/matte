<template>
  <div class="overflow-hidden">
    <header class="flex items-center gap-6 relative">
      <happy-sun-logo class="flex-grow" />
      <RouterLink to="/" class="pushable"
        ><span class="front home"><icon-home /></span
      ></RouterLink>
      <button @click.prevent="playMusic" class="pushable mr-6">
        <span class="front music" :class="startPlayer ? 'activated' : 'deactivated'"
          ><icon-music
        /></span>
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
import IconMusic from './components/icons/IconMusic.vue'
import IconHome from './components/icons/IconHome.vue'

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
  background-color: #f0003c;
  color: white;
  transform: translateY(-6px);
}

.home {
  background-color: #83cdff;
}

.music {
  background-color: #c8c8c8;
}

.activated {
  background-color: #f0003c;
  transform: translateY(-2px);
}
.activated :deep(svg) {
  animation: bouncer 1s infinite;
}
.deactivated :deep(svg) {
  opacity: 0.5;
}

.pushable:active .front {
  transform: translateY(-2px);
}

/* Bouncing */
@keyframes bouncer {
  0%,
  100% {
    transform: translateX(8%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateX(-8%);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>
