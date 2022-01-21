<template>
  <div class="container my-4">
    <div class="flex flex-col justify-center align-middle w-75">
      <div class="flex flex-row justify-center p-4">
        <base-btn
          v-if="timeRemaining === PLAY_TIME_SECONDS"
          class="w-1/3 mx-2"
          focus
          color="green"
          :disabled="startedTimer"
          @click="startGame"
        >
          Start
        </base-btn>
        <base-btn
          v-else
          class="w-1/3 mx-2"
          focus
          color="red"
          @click="resetGame"
        >
          Stop
        </base-btn>
      </div>
      <div class="flex flex-row justify-center m-8">
        <div class="border border-4 rounded-md p-4 text-center">
          <span class="text-2xl">
            Time Left
          </span>
          <div class="text-4xl text-bold text-white">
            {{ timeRemaining }}
          </div>
        </div>
        <div
          v-if="startedTimer"
          class="p-4 m-4 rounded-md bg-slate-200 text-black flex flex-row"
        >
          <div class="rounded-md p-2 m-2 border border-2 border-black">
            <press-prompt v-if="nextLetter === 'L'" letter="L" @correct="incCorrect" @incorrect="incIncorrect" />
            <blank-prompt v-else />
          </div>
          <div class="rounded-md p-2 m-2 border border-2 border-black">
            <press-prompt v-if="nextLetter === 'D'" letter="D" @correct="incCorrect" @incorrect="incIncorrect" />
            <blank-prompt v-else />
          </div>
          <div class="rounded-md p-2 m-2 border border-2 border-black">
            <press-prompt v-if="nextLetter === 'R'" letter="R" @correct="incCorrect" @incorrect="incIncorrect" />
            <blank-prompt v-else />
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-center m-4 p-4">
        <div class="p-4 m-4 border border-4 rounded-xl border-emerald-500 text-center">
          <span class="text-2xl">Correct: </span>
          <div class="text-4xl">{{ numCorrect }}</div>
        </div>
        <div class="p-4 m-4 border border-4 rounded-xl border-rose-500 text-center">
          <span class="text-2xl">Incorrect: </span>
          <div class="text-4xl">{{ numIncorrect }}</div>
        </div>
        <div
          class="p-4 m-4 border border-4 rounded-xl border-orange-300 text-center"
        >
          <span class="text-2xl">Score: </span>
          <div class="text-4xl">{{ score }}</div>
        </div>
      </div>
      <div class="flex flex-row justify-center align-start rounded-md border-2 p-4">
        <base-input
          label="Player Name"
          v-model="playerName"
        />
        <div class="mx-4 text-2xl text-white">
          Score: {{ playerName }}
        </div>
        <base-btn color="gold">
          SAVE
        </base-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseBtn from '@/components/base/BaseBtn.vue'
import { computed, ref, watch } from 'vue'
import BaseInput from '@/components/base/BaseInput.vue'
import useTimer from '@/composables/useTimer'
import PressPrompt from '@/components/game/PressPrompt.vue';
import BlankPrompt from '@/components/game/BlankPrompt.vue';

const numCorrect = ref(0)
const numIncorrect = ref(0)
const playerName = ref('')
const nextLetter = ref('L')
const startedTimer = ref(false)

const incCorrect = () => {
  numCorrect.value += 1
  setNextLetter()
}
const incIncorrect = () => {
  numIncorrect.value += 1
  setNextLetter()
}
const score = computed(() => numCorrect.value - (5 * numIncorrect.value))

watch(() => score.value, (newVal) => {
  if (newVal < 0) {
    resetGame()
  }
  if (newVal > 100) {
    console.log('GO OFF KING/QUEEN')
  }
})

const PLAY_TIME_SECONDS = 20
const { reset, timeRemaining, countDownTimer } = useTimer(PLAY_TIME_SECONDS)

const startGame = () => {
  startedTimer.value = true
  countDownTimer()
  setNextLetter()
  numCorrect.value = 0
  numIncorrect.value = 0
}

const resetGame = () => {
  startedTimer.value = false
  reset()
}

watch(() => timeRemaining.value, newVal => {
  if (newVal === PLAY_TIME_SECONDS) {
    startedTimer.value = false
  }
})

const setNextLetter = () => {
  const random = Math.random()
  if (random < 0.33) {
    nextLetter.value = 'L'
    return
  }
  nextLetter.value = random < 0.66 ? 'D' : 'R'
}

</script>
