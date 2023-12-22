<template>
  <footer class="relative">
    <bouncing-trees />

    <div class="container-hills">
      <div
        class="hill-one w-3/5 h-96 absolute -bottom-48 bg-green-700 -left-20 border-4 border-black"
      ></div>
      <div
        class="hill-two w-3/5 h-96 absolute -bottom-44 bg-green-700 -right-20 border-4 border-black"
      ></div>
    </div>
  </footer>
</template>

<script setup>
import BouncingTrees from './BouncingTrees.vue'
</script>

<style scoped>
.container-hills {
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 226px;
}
.hill-one {
  border-top-right-radius: 79% 100%;
  border-top-left-radius: 54% 100%;
}
.hill-two {
  border-top-right-radius: 45% 31%;
  border-top-left-radius: 86% 100%;
}

@keyframes bouncer {
  0%,
  100% {
    transform: translateY(8%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: none;
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
.animate-bouncer {
  animation: bouncer 1s infinite;
}
</style>
