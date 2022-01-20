<template>
  <div class="container my-4">
    <div class="flex flex-col justify-center align-middle w-75">
      <div class="flex flex-row justify-center p-4">
        <base-btn
          class="w-1/3 mx-2"
          focus
          color="green"
          @click="countDownTimer"
        >
          Start
        </base-btn>
        <base-btn
          class="w-1/3 mx-2"
          focus
          color="red"
          @click="reset"
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
        <div class="p-4 m-4 rounded-md bg-slate-200 text-black">
          <base-btn color="green" class="p-8" @click="incCorrect">CLICK ME</base-btn>
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
          <div class="text-4xl">0</div>
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
import { ref } from 'vue'
import BaseInput from '@/components/base/BaseInput.vue'
import useTimer from '@/composables/useTimer'

const numCorrect = ref(0)
const numIncorrect = ref(0)
const playerName = ref('')

const incCorrect = () => {
  numCorrect.value += 1
}

const PLAY_TIME_SECONDS = 20
const { reset, timeRemaining, countDownTimer } = useTimer(PLAY_TIME_SECONDS)

</script>
