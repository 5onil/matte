<template>
  <div>
    <p
      class="game-time bg-slate-300 border-2 border-black w-48 inline-block text-center py-2"
      :class="gameCountdownHolder < 10 && gameCountdownHolder > 0 ? 'countdown-danger' : ''"
    >
      Sekunder kvar: <strong>{{ gameCountdownHolder }}</strong>
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

defineExpose({ updateCountdown })

// Props
const props = defineProps({
  gameCountdown: {
    type: Number,
    default: 30
  }
})

// Emits
const emit = defineEmits(['gameOver'])

// Game countdown
const gameCountdownHolder = ref(null)
let countdownInterval = null

function updateCountdown(seconds) {
  gameCountdownHolder.value = seconds
  countdownInterval = setInterval(() => {
    if (gameCountdownHolder.value === 0) {
      clearInterval(countdownInterval)
      emit('gameOver', true)
    } else {
      gameCountdownHolder.value--
    }
  }, 1000)
}

onMounted(() => {
  // Start countdown with seconds as parameter
  updateCountdown(props.gameCountdown)
})
</script>

<style scoped>
/* Countdown pulse */
@keyframes bg-pulse {
  50% {
    background-color: #f0003c;
  }
}
.countdown-danger {
  animation: bg-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
