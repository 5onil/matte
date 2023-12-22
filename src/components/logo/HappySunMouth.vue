<template>
  <div class="mouth">
    <div class="teeth"></div>
    <div class="tongue"></div>
  </div>
</template>

<style scoped>
/* Styling for the mouth */
.mouth {
  width: 61px;
  height: 23px;
  background-color: black;
  border-radius: 0 0 50% 50% / 0 0 100% 100%;
  overflow: hidden;
  position: absolute;
  z-index: 2;
  top: 122px;
  left: 72px;
}

/* Styling for the tongue */
.tongue {
  position: absolute;
  bottom: -20px;
  width: 40px;
  height: 31px;
  background-color: #cf2424;
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
}

/* Styling for the teeth */
.teeth {
  position: absolute;
  top: 0;
  left: 20px;
  width: 24px;
  height: 6px;
}

/* Styling for individual teeth */
.teeth::before {
  content: '';
  position: absolute;
  border-radius: 0 0 6px 6px;
  width: 10px; /* Adjust width of individual teeth */
  height: 100%;
  left: 0;
  background-color: white;
}
.teeth::after {
  content: '';
  position: absolute;
  border-radius: 0 0 6px 6px;
  width: 10px; /* Adjust width of individual teeth */
  height: 100%;
  right: 0;
  background-color: white;
}
</style>
