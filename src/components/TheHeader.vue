<template>
  <header class="flex items-center gap-4 relative">
    <happy-sun-logo class="flex-grow" />

    <!-- Navigation -->
    <nav class="flex gap-4">
      <RouterLink to="/" class="pushable"
        ><span class="front home"><icon-home /></span
      ></RouterLink>
      <RouterLink to="/plus" class="pushable"><span class="front">Plus</span></RouterLink>
      <RouterLink to="/minus" class="pushable"><span class="front">Minus</span></RouterLink>
    </nav>

    <!-- Play music -->
    <button @click.prevent="playMusic" class="pushable mr-4">
      <span class="front music" :class="startPlayer ? 'activated' : 'deactivated'"
        ><icon-music
      /></span>
    </button>

    <!-- Clouds -->
    <the-clouds />
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

// Components
import HappySunLogo from './logo/HappySunLogo.vue'
import TheClouds from './TheClouds.vue'
import BackgroundMusicOne from '../assets/sound/bouncy-background.mp3'
import IconMusic from './icons/IconMusic.vue'
import IconHome from './icons/IconHome.vue'

const musicOne = new Audio(BackgroundMusicOne)
const startPlayer = ref(false)

function playMusic() {
  startPlayer.value = !startPlayer.value
  if (startPlayer.value) {
    musicOne.play()
    musicOne.loop = true
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
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 1.25rem;
  border: 2px solid #000000;
  background-color: #f0003c;
  color: white;
  transform: translateY(-6px);
  transition: transform 0.1s linear;
}

.home {
  background-color: #fdd836;
}

.music {
  background-color: #c8c8c8;
}

.activated,
.router-link-exact-active span {
  transform: translateY(0px);
  transition: transform 0.1s linear;
}
.activated :deep(svg) {
  filter: invert(1);
  animation: bouncer 1s infinite;
}
.deactivated :deep(svg) {
  opacity: 0.5;
}

.pushable:active .front {
  transition: transform 0.1s linear;
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
