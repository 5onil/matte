<template>
  <div class="eyes">
    <div class="eye-left"><div class="pupiles"></div></div>
    <div class="eye-right"><div class="pupiles"></div></div>
  </div>
</template>

<style scoped>
.eyes {
  position: absolute;
  display: flex;
  gap: 6px;
  top: 71px;
  left: 59px;
  z-index: 2;
  animation: blink 10s linear both; /* Define the animation */
  animation-duration: 10s; /* Duration of the animation */
  animation-iteration-count: infinite; /* Make the animation repeat infinitely */
  animation-delay: 4s; /* Delay the start of the animation by 8 seconds */
}
.eye-left,
.eye-right {
  height: 46px;
  width: 39px;
  background-color: #ffffff;
  border-radius: 50%;
}
.pupiles {
  position: relative;
  top: 11px;
  left: 11px;
  height: 33px;
  width: 23px;
  background-color: #000000;
  border-radius: 50%;
}
.pupiles:after {
  content: '';
  position: absolute;
  width: 12px;
  height: 9px;
  border-radius: 50%;
  background-color: #fff;
  top: 8px;
  right: -2px;
}

/* Blink */
@keyframes blink {
  0% {
    transform: scaleY(1);
  }
  49% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0);
  }
  51% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(1);
  }
}
</style>
