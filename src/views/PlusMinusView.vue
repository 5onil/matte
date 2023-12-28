<template>
  <div class="plus-minus">
    <!-- <confetti-effect v-if="correctAnswer" /> -->
    <h3 class="text-5xl text-center h-12">{{ score }}</h3>
    <div class="flex flex-col items-center">
      <h3 class="text-4xl sub-heading">super plus</h3>
      <div class="flex gap-10 items-center -mt-12">
        <h1>{{ firstNumber }} + {{ secondNumber }} =</h1>
        <div class="relative">
          <input
            type="text"
            class="bg-transparent focus:border-none focus:outline-none"
            v-model="answer"
            maxlength="2"
            size="2"
            @input="validateInput"
            @keydown.enter="calculateAnswer"
          />
          <div class="platform"></div>
        </div>
      </div>
      <button @click.prevent="calculateAnswer" class="pushable relative z-10">
        <span class="front">❔</span>
      </button>
    </div>
    <p
      v-if="wrongAnswer"
      class="absolute text-9xl animate-pulse top-52 left-1/2 transform -translate-x-1/2"
    >
      😥
    </p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
// import ConfettiEffect from '../components/ConfettiEffect.vue'
import celebrationSoundFile from '../assets/sound/audience-clapping.mp3'

const celebrationSound = new Audio(celebrationSoundFile)
const firstNumber = ref(null)
const secondNumber = ref(null)
const answer = ref(null)
const correctAnswer = ref(false)
const wrongAnswer = ref(false)
const score = ref('')

function generateRandomNumbers() {
  firstNumber.value = Math.floor(Math.random() * 10) + 1
  secondNumber.value = Math.floor(Math.random() * 10) + 1
}

function calculateAnswer() {
  const sum = firstNumber.value + secondNumber.value
  const answerGiven = parseInt(answer.value)

  if (sum === answerGiven) {
    wrongAnswer.value = false
    correctAnswer.value = true
    celebrationSound.play()

    setTimeout(() => {
      correctAnswer.value = false
      answer.value = ''
      generateRandomNumbers()
      // scorePlaceholder.value = scorePlaceholder.slice(0, -1)
      score.value += '⭐️'
    }, 30)
  } else {
    correctAnswer.value = false
    wrongAnswer.value = true
  }
}

function validateInput(event) {
  const inputValue = event.target.value
  // Regular expression to allow only numbers
  const regex = /^[0-9]*$/

  if (!regex.test(inputValue)) {
    // If the input doesn't match the pattern, remove non-numeric characters
    answer.value = inputValue.replace(/\D/g, '')
  } else {
    // Set the answer value to the input value if it's a valid number
    answer.value = inputValue
  }
}

onMounted(() => {
  generateRandomNumbers()
})
</script>

<style scoped>
.plus-minus {
  height: calc(100dvh - 206.5px);
  background-color: #c8ebff;
}

h1,
input {
  position: relative;
  text-transform: uppercase;
  font-size: 16dvw;
  line-height: 1;
  color: #ffffff;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
  /* text-stroke: 2px black; */
  text-shadow:
    0px 0px 0 rgb(-13, -13, -13),
    1px 1px 0 rgb(-25, -25, -25),
    2px 2px 0 rgb(-38, -38, -38),
    3px 3px 0 rgb(-51, -51, -51),
    4px 4px 0 rgb(-64, -64, -64),
    5px 5px 0 rgb(-76, -76, -76),
    6px 6px 0 rgb(-89, -89, -89),
    7px 7px 0 rgb(-102, -102, -102),
    8px 8px 0 rgb(-115, -115, -115),
    9px 9px 0 rgb(-127, -127, -127),
    10px 10px 0 rgb(-140, -140, -140),
    11px 11px 0 rgb(-153, -153, -153),
    12px 12px 0 rgb(-166, -166, -166),
    13px 13px 0 rgb(-179, -179, -179),
    14px 14px 0 rgb(-191, -191, -191),
    15px 15px 0 rgb(-204, -204, -204),
    16px 16px 0 rgb(-217, -217, -217),
    17px 17px 0 rgb(-230, -230, -230),
    18px 18px 0 rgb(-242, -242, -242),
    19px 19px 0 rgb(-255, -255, -255),
    20px 20px 0 rgb(-268, -268, -268),
    21px 21px 20px rgba(0, 0, 0, 0),
    21px 21px 1px rgba(0, 0, 0, 0.5),
    0px 0px 20px rgba(0, 0, 0, 0.2);
}

input {
  color: #fdd835;
  text-align: center;
  font-weight: 900;
  line-height: 1dvh;
}

.platform {
  position: absolute;
  bottom: 64px;
  width: 100%;
  height: 40px;
  background-color: #fff;
  border: 2px solid #000;
  box-shadow:
    1px 1px 0px 0px rgba(0, 0, 0, 1),
    2px 2px 0px 0px rgba(0, 0, 0, 1),
    3px 3px 0px 0px rgba(0, 0, 0, 1),
    4px 4px 0px 0px rgba(0, 0, 0, 1),
    5px 5px 0px 0px rgba(0, 0, 0, 1),
    6px 6px 0px 0px rgba(0, 0, 0, 1),
    7px 7px 0px 0px rgba(0, 0, 0, 1),
    8px 8px 0px 0px rgba(0, 0, 0, 1),
    9px 9px 0px 0px rgba(0, 0, 0, 1),
    10px 10px 0px 0px rgba(0, 0, 0, 1),
    11px 11px 0px 0px rgba(0, 0, 0, 1),
    12px 12px 0px 0px rgba(0, 0, 0, 1),
    13px 13px 0px 0px rgba(0, 0, 0, 1),
    14px 14px 0px 0px rgba(0, 0, 0, 1),
    15px 15px 0px 0px rgba(0, 0, 0, 1),
    16px 16px 0px 0px rgba(0, 0, 0, 1),
    17px 17px 0px 0px rgba(0, 0, 0, 1),
    18px 18px 0px 0px rgba(0, 0, 0, 1),
    19px 19px 0px 0px rgba(0, 0, 0, 1),
    20px 20px 0px 0px rgba(0, 0, 0, 1);
}

.sub-heading {
  position: relative;
}
.sub-heading::before,
.sub-heading::after {
  content: '';
  position: absolute;
  background-color: #000000;
  height: 4px;
  width: 100%;
  top: 21px;
}
.sub-heading::before {
  left: -106%;
}
.sub-heading::after {
  right: -106%;
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
  padding: 12px 42px;
  border-radius: 12px;
  font-size: 1.25rem;
  border: 2px solid #000000;
  background-color: hsl(345deg 100% 47%);
  color: white;
  transform: translateY(-6px);
}
.pushable:active .front {
  transform: translateY(-2px);
}
</style>
