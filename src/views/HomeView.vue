<template>
  <main class="flex justify-center items-center">
    <nav class="flex gap-6">
      <RouterLink
        to="/plus-minus"
        class="bg-red-600 p-10 rounded-md text-white w-48 text-center relative z-10"
        >Plus och Minus</RouterLink
      >
      <RouterLink
        to="/multiplikation"
        class="bg-red-600 p-10 rounded-md text-white w-48 text-center relative z-10"
        >Multiplikation</RouterLink
      >
    </nav>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
main {
  height: calc(100dvh - 206.5px);
}
</style>
