<template>
  <div class="container my-4">
    <div class="flex flex-col justify-center align-middle w-75">
      <div class="flex flex-row justify-center p-4">
        <base-btn class="w-1/3 mx-2" focus color="green">
          Start
        </base-btn>
        <base-btn class="w-1/3 mx-2" focus color="red">
          Stop
        </base-btn>
      </div>
      <div class="flex flex-row justify-center m-8">
        <div class="border border-4 rounded-md p-4 text-center">
          <span class="text-2xl">
            Time Left
          </span>
          <div class="text-4xl text-bold text-white">
            30
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
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseBtn from '@/components/base/BaseBtn.vue'
import { ref } from 'vue'

const numCorrect = ref(0)
const numIncorrect = ref(0)

const incCorrect = () => {
  numCorrect.value += 1
}
</script>
