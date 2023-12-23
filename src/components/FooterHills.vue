<template>
  <footer class="fixed bottom-0 left-0 right-0">
    <bouncing-trees />
    <div class="svg-container">
      <svg
        class="svg-content"
        width="1794"
        height="295"
        viewBox="0 0 1794 295"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M407.5 50.0752C526.584 50.0752 713.84 92.4533 927.953 293H1.99097V168.714C72.9398 109.565 207.014 50.0752 407.5 50.0752Z"
          fill="#5CB107"
          stroke="black"
          stroke-width="4"
          vector-effect="non-scaling-stroke"
        />
        <mask
          id="mask0_26_13"
          style="mask-type: alpha"
          maskUnits="userSpaceOnUse"
          x="-1"
          y="48"
          width="934"
          height="247"
        >
          <path
            d="M407.5 50.0752C526.584 50.0752 713.84 92.4533 927.953 293H1.99097V168.714C72.9398 109.565 207.014 50.0752 407.5 50.0752Z"
            fill="#5CB107"
            stroke="black"
            stroke-width="4"
            vector-effect="non-scaling-stroke"
          />
        </mask>
        <g mask="url(#mask0_26_13)">
          <path
            d="M696 87.1387C768.837 87.1387 827.372 89.5168 869.582 93.0794C890.69 94.861 907.688 96.9365 920.338 99.1529C926.665 100.261 931.876 101.4 935.958 102.547C940.077 103.704 942.907 104.833 944.566 105.868C945.402 106.39 945.785 106.793 945.932 107.025C945.949 107.052 945.961 107.073 945.969 107.09C945.914 107.191 945.729 107.452 945.194 107.835C944.572 108.28 943.633 108.776 942.312 109.301C936.971 111.424 926.756 113.485 911.209 115.269C880.23 118.825 828.851 121.204 755 121.204C680.82 121.204 625.943 137.772 585.381 162.743C544.819 187.714 518.696 221.012 501.902 254.278C485.116 287.529 477.646 320.755 474.369 345.651C472.729 358.103 472.137 368.485 471.955 375.762C471.865 379.342 471.875 382.172 471.908 384.129L343.897 331.384C343.984 331.078 344.084 330.731 344.198 330.345C344.723 328.557 345.534 325.925 346.671 322.57C348.944 315.858 352.521 306.254 357.722 294.722C368.125 271.654 385.018 240.894 410.966 210.139C462.821 148.678 550.909 87.1386 696 87.1387Z"
            fill="#BDB38E"
            stroke="black"
            stroke-width="4"
            vector-effect="non-scaling-stroke"
          />
        </g>
        <path
          d="M407.5 50.0752C526.584 50.0752 713.84 92.4533 927.953 293H1.99097V168.714C72.9398 109.565 207.014 50.0752 407.5 50.0752Z"
          stroke="black"
          stroke-width="4"
          vector-effect="non-scaling-stroke"
        />
        <path
          d="M1052.41 77.8881C946.49 124.333 838.674 195.123 770.704 293H1792L1792 188.132L1792 150.369L1792 139.548L1792 136.67V136.649C1775.22 123.546 1748.35 109.094 1714.77 94.7539C1680.71 80.2102 1639.86 65.83 1595.86 53.1206C1507.84 27.695 1407.37 9 1323.58 9C1264.3 9 1159.47 30.9446 1052.41 77.8881Z"
          fill="#5CB107"
          stroke="black"
          stroke-width="4"
          vector-effect="non-scaling-stroke"
        />
      </svg>
    </div>
  </footer>
</template>

<script setup>
import BouncingTrees from './BouncingTrees.vue'
</script>

<style scoped>
.svg-container {
  max-width: 100%; /* Make the container responsive */
}
.svg-content {
  width: 100%;
  height: auto;
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
