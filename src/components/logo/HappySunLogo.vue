<template>
  <div class="relative p-10 logo">
    <div class="sun-rays-container">
      <happy-sun-rays class="sun-rays animate-spin" />
    </div>
    <happy-sun-arms-legs class="arms-legs" />
    <happy-sun-eyes />
    <happy-sun-mouth-two class="mouth" />
    <div class="sun">
      <div class="round"></div>
    </div>
  </div>
</template>

<script setup>
import HappySunMouthTwo from './HappySunMouthTwo.vue'
import HappySunEyes from './HappySunEyes.vue'
import HappySunRays from './HappySunRays.vue'
import HappySunArmsLegs from './HappySunArmsLegs.vue'
</script>

<style scoped>
.logo {
  animation: bouncer 1s infinite;
}
.arms-legs {
  position: absolute;
  width: 354px;
  top: -21px;
  left: -4px;
}
.sun-rays-container {
  position: absolute;
  width: 100dvw;
  height: 100dvh;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
.sun-rays {
  position: absolute;
  z-index: 2;
  width: 2000px;
  left: -907px;
  top: -894px;
  opacity: 0.4;
  animation-duration: 60s;
}
.sun {
  position: relative;
  width: 120px;
  -webkit-animation: spin 50s linear infinite;
  animation: spin 50s linear infinite;
}
.sun:after {
  content: '';
  background-color: #fdd835;
  height: 120px;
  width: 120px;
  border-radius: 5px;
  display: inline-block;
  box-shadow: 1px 0px 5px RGBA(0, 0, 0, 0.33);
}
.sun:before {
  content: '';
  background-color: #fdd835;
  height: 120px;
  width: 120px;
  border-radius: 5px;
  display: inline-block;
  box-shadow: 1px 0px 5px RGBA(0, 0, 0, 0.33);
  position: absolute;
  top: 0;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.round {
  position: absolute;
}
.round:before {
  content: '';
  background-color: #fdd835;
  height: 120px;
  width: 120px;
  border-radius: 5px;
  display: block;
}
.round::after {
  content: '';
  background-color: #fdd835;
  height: 120px;
  width: 120px;
  border-radius: 100%;
  border: 4px solid #000000;
  display: block;
  position: absolute;
  top: 0;
}

.mouth {
  width: 38px;
  position: absolute;
  top: 108px;
  left: 81px;
  z-index: 2;
}
/* Spin sun */
@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

/* Happy Bounce */
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
