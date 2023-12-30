<template>
  <confetti-effect />
  <div class="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50">
    <div>
      <h4 class="text-4xl text-center text-white">🥳 Du fick:</h4>
      <div class="flex justify-center items-center">
        <h1 class="text-9xl score text-center text-white">
          <span class="">{{ score }}</span>
        </h1>
        <p class="text-4xl">⭐️</p>
      </div>
      <button @click.prevent="restartGame" class="pushable">
        <span class="front"><icon-restart />Starta om</span>
      </button>
    </div>
  </div>
</template>

<script setup>
// Components
import ConfettiEffect from './ConfettiEffect.vue'
import IconRestart from './icons/IconRestart.vue'

const props = defineProps({
  score: {
    type: Number,
    default: '0'
  }
})

const emit = defineEmits(['restartGame'])

// Restart game
function restartGame() {
  emit('restartGame', true)
}
</script>

<style scoped>
.pushable {
  display: block;
  background-color: #000000;
  border-radius: 12px;
  border: none;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
}
.front {
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 1.25rem;
  border: 2px solid #000000;
  background-color: #f0003c;
  color: white;
  transform: translateY(-6px);
  transition: transform 0.1s linear;
}
.pushable:active .front {
  transition: transform 0.1s linear;
  transform: translateY(-2px);
}

.score span {
  color: #fdd835;
  -webkit-text-stroke: 2px #000; /* WebKit browsers */
  text-stroke: 2px #000;
}

/* Countdown pulse */
@keyframes bg-pulse {
  50% {
    background-color: #fff;
  }
}
</style>
