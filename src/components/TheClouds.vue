<template>
  <div class="cloud flying"></div>
  <div class="cloud flying"></div>
  <div class="cloud flying"></div>
  <div class="cloud flying"></div>
  <div class="cloud flying"></div>
  <div class="cloud flying"></div>
  <div class="cloud flying"></div>
  <div class="cloud flying"></div>
  <div class="cloud flying"></div>
  <div class="cloud flying"></div>
  <div class="cloud flying"></div>
</template>

<style scoped>
.flying {
  animation: fly 120s linear infinite;
}
.cloud {
  transform: translateX(-160px);
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 1em;
  height: 1em;
  position: absolute;
  width: 3em;
  filter: drop-shadow(0 2px 3px hsla(0, 0%, 0%, 0.25));
}
.cloud::before {
  content: '';
  position: absolute;
  z-index: 2;
  height: 1.6em;
  left: 0.3em;
  top: -0.75em;
  width: 1.9em;
  border: 2px solid #000;
  background-color: #fff;
  border-radius: 100%;
}
.cloud::after {
  border-radius: 1em;
  content: '';
  position: absolute;
  z-index: 4;
  width: 100%;
  height: 100%;
  background-color: #fff;
}

.cloud:nth-child(1) {
  animation-delay: 5s;
  top: 30%;
}
.cloud:nth-child(2) {
  animation-delay: 10s;
  top: 50%;
  transform: translateX(-160px);
  scale: 2;
}
.cloud:nth-child(3) {
  animation-delay: 18s;
  top: 70%;
  transform: translateX(-160px);
  scale: 1.2;
}
.cloud:nth-child(4) {
  animation-delay: 30s;
  top: 30%;
}
.cloud:nth-child(5) {
  animation-delay: 38s;
  top: 50%;
  transform: translateX(-160px);
  scale: 2;
}
.cloud:nth-child(6) {
  animation-delay: 49s;
  top: 20%;
}
.cloud:nth-child(7) {
  animation-delay: 50s;
  top: 60%;
  transform: translateX(-160px);
  scale: 1.6;
}
.cloud:nth-child(8) {
  animation-delay: 58s;
  top: 20%;
  transform: translateX(-160px);
}
.cloud:nth-child(9) {
  animation-delay: 68s;
  top: 80%;
  transform: translateX(-160px);
}
.cloud:nth-child(10) {
  animation-delay: 85s;
  top: 30%;
  transform: scale(2) translateX(-160px);
  scale: 2.2;
}
.cloud:nth-child(11) {
  animation-delay: 98s;
  top: 50%;
  transform: translateX(-160px);
}

@keyframes fly {
  0% {
    transform: translateX(-160px);
  }
  100% {
    transform: translateX(calc(100dvw + 160px));
  }
}
</style>
